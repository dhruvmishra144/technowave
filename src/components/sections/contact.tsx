'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { sendContactMessage } from '@/app/actions';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useRef } from 'react';
import { Loader2, Send } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          Send Message <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export default function ContactSection() {
  const initialState = { message: null, errors: {}, success: false };
  const [state, formAction] = useFormState(sendContactMessage, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast({
        title: 'Message Sent!',
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.message && state.errors) {
       toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
              Let's Build Together
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a project in mind or just want to say hello? We'd love to hear from you. Fill out the form, and we'll get back to you as soon as possible.
            </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 mt-12">
          <div className="space-y-4">
             <div className="space-y-2 pt-4">
                <h3 className="text-xl font-bold font-headline">Contact Information</h3>
                <p className="text-muted-foreground"><strong className="text-primary">Email:</strong> contact@technowave.dev</p>
                <p className="text-muted-foreground"><strong className="text-primary">Phone:</strong> (123) 456-7890</p>
                <p className="text-muted-foreground"><strong className="text-primary">Address:</strong> 123 AI Lane, Tech City, 54321</p>
            </div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border/50">
            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your Name" required />
                {state.errors?.name && <p className="text-destructive text-sm">{state.errors.name[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                {state.errors?.email && <p className="text-destructive text-sm">{state.errors.email[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Tell us about your project..." required className="min-h-[120px]" />
                {state.errors?.message && <p className="text-destructive text-sm">{state.errors.message[0]}</p>}
              </div>
              <SubmitButton />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
