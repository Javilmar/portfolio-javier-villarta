# 📧 Configuración de EmailJS - Guía Paso a Paso

## 🚀 Pasos para configurar EmailJS:

### **1. Crear cuenta en EmailJS**
- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Crea una cuenta gratuita
- **Límite:** 200 emails/mes gratis

### **2. Configurar servicio de email**
1. **Ve a "Email Services"**
2. **Haz clic en "Add New Service"**
3. **Selecciona tu proveedor:**
   - **Gmail** (recomendado)
   - **Outlook**
   - **Yahoo**
   - **Otro**
4. **Sigue las instrucciones** para conectar tu email
5. **Copia el Service ID** (ej: `service_abc123`)

### **3. Crear plantilla de email**
1. **Ve a "Email Templates"**
2. **Haz clic en "Create New Template"**
3. **Configura la plantilla:**

```html
De: {{from_name}} ({{from_email}})
Asunto: {{subject}}

Mensaje:
{{message}}

---
Enviado desde tu portfolio web
```

4. **Guarda y copia el Template ID** (ej: `template_xyz789`)

### **4. Obtener Public Key**
1. **Ve a "Account" → "General"**
2. **Copia tu Public Key** (ej: `abc123def456`)

### **5. Actualizar tu código**
Reemplaza estos valores en tu código:

#### **En `index.html` (línea 404):**
```javascript
emailjs.init("TU_PUBLIC_KEY_AQUI");
```

#### **En `script.js` (líneas 135-140):**
```javascript
const response = await emailjs.send(
    'TU_SERVICE_ID_AQUI',     // Reemplaza con tu Service ID
    'TU_TEMPLATE_ID_AQUI',    // Reemplaza con tu Template ID
    data,
    'TU_PUBLIC_KEY_AQUI'      // Reemplaza con tu Public Key
);
```

## 🎯 Variables disponibles en la plantilla:
- `{{from_name}}` - Nombre del remitente
- `{{from_email}}` - Email del remitente
- `{{subject}}` - Asunto del mensaje
- `{{message}}` - Contenido del mensaje

## ✅ Características implementadas:
- **Validación de formulario**
- **Estado de carga** ("Enviando...")
- **Mensajes de éxito/error**
- **Auto-reset** del formulario
- **Mensajes temporales** (se eliminan en 5 segundos)

## 🧪 Probar el formulario:
1. **Abre tu portfolio** en el navegador
2. **Ve a la sección de contacto**
3. **Llena el formulario** con datos de prueba
4. **Envía el mensaje**
5. **Revisa tu email** - deberías recibir el mensaje

## 🔧 Solución de problemas:
- **Error de CORS:** Verifica que tu dominio esté en la lista blanca
- **Emails no llegan:** Revisa la configuración del servicio de email
- **Error 400:** Verifica que las variables de la plantilla coincidan
- **Error 401:** Verifica tu Public Key

## 📞 Soporte:
- **Documentación:** [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- **Community:** [https://github.com/emailjs-com/emailjs-sdk](https://github.com/emailjs-com/emailjs-sdk)
