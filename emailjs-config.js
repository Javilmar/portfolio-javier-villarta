// EmailJS Configuration
// Reemplaza estos valores con tus propias credenciales de EmailJS

const EMAILJS_CONFIG = {
    // Tu Public Key de EmailJS
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
    
    // Tu Service ID (ej: service_abc123)
    SERVICE_ID: 'YOUR_SERVICE_ID',
    
    // Tu Template ID (ej: template_xyz789)
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
    
    // Email de destino (tu email donde recibirás los mensajes)
    TO_EMAIL: 'javiervillartamartinez@gmail.com'
};

// Función para inicializar EmailJS
function initEmailJS() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        console.log('EmailJS inicializado correctamente');
    } else {
        console.error('EmailJS no está cargado');
    }
}

// Función para enviar email
async function sendEmail(formData) {
    try {
        const response = await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            formData,
            EMAILJS_CONFIG.PUBLIC_KEY
        );
        return response;
    } catch (error) {
        console.error('Error enviando email:', error);
        throw error;
    }
}

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EMAILJS_CONFIG, initEmailJS, sendEmail };
}
