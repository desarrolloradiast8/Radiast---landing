import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  nombre: string;
  empresa: string;
  ciudad: string;
  telefono: string;
  email: string;
  mensaje: string;
  empresa_web: string;
};

function getText(formData: FormData, key: keyof ContactPayload): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const payload: ContactPayload = {
    nombre: getText(formData, "nombre"),
    empresa: getText(formData, "empresa"),
    ciudad: getText(formData, "ciudad"),
    telefono: getText(formData, "telefono"),
    email: getText(formData, "email"),
    mensaje: getText(formData, "mensaje"),
    empresa_web: getText(formData, "empresa_web"),
  };

  const redirectUrl = new URL("/contacto", request.url);

  // Honeypot anti-spam.
  if (payload.empresa_web) {
    redirectUrl.searchParams.set("enviado", "1");
    return NextResponse.redirect(redirectUrl, { status: 303 });
  }

  if (!payload.nombre || !payload.telefono || !payload.email || !payload.mensaje) {
    redirectUrl.searchParams.set("error", "missing_fields");
    return NextResponse.redirect(redirectUrl, { status: 303 });
  }

  try {
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO || "contacto@radiast.com";
    const fromEmail = process.env.CONTACT_FROM || process.env.SMTP_FROM || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass || !fromEmail) {
      throw new Error("SMTP env vars are incomplete");
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: payload.email,
      subject: `Nuevo contacto web - ${payload.nombre}`,
      text: [
        "Nuevo mensaje desde el formulario de contacto:",
        "",
        `Nombre: ${payload.nombre}`,
        `Empresa: ${payload.empresa || "No especificada"}`,
        `Ciudad: ${payload.ciudad || "No especificada"}`,
        `Telefono: ${payload.telefono}`,
        `Email: ${payload.email}`,
        "",
        "Mensaje:",
        payload.mensaje,
      ].join("\n"),
      html: `
        <h2>Nuevo mensaje desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${payload.nombre}</p>
        <p><strong>Empresa:</strong> ${payload.empresa || "No especificada"}</p>
        <p><strong>Ciudad:</strong> ${payload.ciudad || "No especificada"}</p>
        <p><strong>Telefono:</strong> ${payload.telefono}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${payload.mensaje.replace(/\n/g, "<br/>")}</p>
      `,
    });

    redirectUrl.searchParams.set("enviado", "1");
    return NextResponse.redirect(redirectUrl, { status: 303 });
  } catch (error) {
    console.error("Error al enviar formulario de contacto:", error);
    redirectUrl.searchParams.set("error", "send_failed");
    return NextResponse.redirect(redirectUrl, { status: 303 });
  }
}
