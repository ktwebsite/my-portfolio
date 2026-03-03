import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { sendEmail } from '../services/emailService';

export type SendStatus = 'idle' | 'sending' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  message: '',
};

export function useContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SendStatus>('idle');
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setStatus('sending');

    try {
      await sendEmail(formRef.current);
      setStatus('success');
      resetForm();
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const isSubmitting = status === 'sending';

  return {
    formRef,
    formData,
    status,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
}
