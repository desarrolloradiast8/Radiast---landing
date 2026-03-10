# 🔧 Configuración de Gmail para el Formulario de Contacto

## 📋 Pasos para configurar el envío de correos

### 1. Generar una Contraseña de Aplicación de Google

**IMPORTANTE**: No uses tu contraseña normal de Gmail. Google requiere una "Contraseña de Aplicación" especial.

#### Paso a paso:

1. **Ve a**: https://myaccount.google.com/apppasswords
   
2. **Inicia sesión** con tu cuenta de Gmail (contacto@radiast.com)

3. **Si no ves la opción "Contraseñas de aplicación"**, primero necesitas:
   - Ir a https://myaccount.google.com/security
   - Activar la **"Verificación en 2 pasos"** (es obligatorio)
   - Luego volver a https://myaccount.google.com/apppasswords

4. **Crear contraseña de aplicación**:
   - En "Seleccionar aplicación" → elige **"Correo"** o **"Otra (nombre personalizado)"**
   - Si es personalizado, escribe: **"Radiast Website"**
   - Haz clic en **"Generar"**

5. **¡Importante!** Google te mostrará una contraseña de 16 caracteres como esta:
   ```
   abcd efgh ijkl mnop
   ```
   **Cópiala sin los espacios** → `abcdefghijklmnop`

### 2. Editar el archivo `.env.local`

Abre el archivo que está en:
```
radiast-landing/.env.local
```

Y reemplaza estas líneas con tu información:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=contacto@radiast.com
SMTP_PASS=tu_contraseña_generada_aqui

CONTACT_FROM=Radiast Web <contacto@radiast.com>
CONTACT_TO=contacto@radiast.com
```

**Ejemplo real**:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=contacto@radiast.com
SMTP_PASS=abcdefghijklmnop

CONTACT_FROM=Radiast Web <contacto@radiast.com>
CONTACT_TO=contacto@radiast.com
```

### 3. Reiniciar el servidor

Después de guardar el archivo `.env.local`:
- Presiona `Ctrl + C` en la terminal donde está corriendo el servidor
- Ejecuta de nuevo: `npm run dev`

### 4. Probar el formulario

1. Ve a http://localhost:3000/contacto
2. Llena el formulario y envíalo
3. Revisa tu correo `contacto@radiast.com` - ¡debería llegar en segundos!

---

## 🔍 Si no llega el correo, revisa:

1. ✅ La verificación en 2 pasos está activada en tu cuenta Google
2. ✅ Copiaste la contraseña de aplicación correctamente (sin espacios)
3. ✅ El correo en `SMTP_USER` es el mismo que usaste para generar la contraseña
4. ✅ Reiniciaste el servidor después de editar `.env.local`
5. ✅ Revisa la carpeta de **Spam** en Gmail

## 📧 Configuración actual:

- **Servidor**: smtp.gmail.com:587
- **Correo que envía**: contacto@radiast.com
- **Correo que recibe**: contacto@radiast.com
- **Remitente visible**: "Radiast Web"

---

**¿Listo?** Después de seguir estos pasos, cada vez que alguien envíe el formulario en tu web, recibirás un correo automáticamente a `contacto@radiast.com`.
