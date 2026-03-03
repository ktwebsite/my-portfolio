import emailjs from '@emailjs/browser';

const config = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export async function sendEmail(form: HTMLFormElement): Promise<void> {
  const { serviceId, templateId, publicKey } = config;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS configuration is missing');
  }

  await emailjs.sendForm(serviceId, templateId, form, publicKey);
}
