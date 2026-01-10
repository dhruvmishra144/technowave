'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const contactSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function sendContactMessage(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
      success: false,
    };
  }
  
  // Simulate sending the message
  console.log('New contact message:', validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  revalidatePath('/contact');

  return {
    message: "Thank you for your message! We'll get back to you shortly.",
    success: true,
  };
}
