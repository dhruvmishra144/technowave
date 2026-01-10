'use server';

import { generateWebsiteMockup } from '@/ai/flows/portfolio-inspiration-tool';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function sendContactMessage(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
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

const inspirationSchema = z.object({
    niche: z.string().min(3, { message: 'Please describe your niche in at least 3 characters.' }),
});

export async function generateInspirationAction(prevState: any, formData: FormData) {
    const validatedFields = inspirationSchema.safeParse({
        niche: formData.get('niche'),
    });

    if (!validatedFields.success) {
        return {
            ...prevState,
            error: validatedFields.error.flatten().fieldErrors.niche?.[0] || 'Invalid input.',
            data: null,
        }
    }

    try {
        const result = await generateWebsiteMockup({ niche: validatedFields.data.niche });
        return {
            ...prevState,
            error: null,
            data: result,
        }
    } catch (error) {
        console.error(error);
        return {
            ...prevState,
            error: 'Failed to generate inspiration. Please try again.',
            data: null,
        }
    }
}
