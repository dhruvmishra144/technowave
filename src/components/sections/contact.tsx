'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { sendContactMessage } from '@/app/actions';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useRef } from 'react';
import { Loader2, Send, Mail, Phone } from 'lucide-react';
import { Card } from '../ui/card';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full"
      role="button"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        <>
          Submit Form <Send className="ml-2 h-4 w-4" />
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
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary mb-4">
            Contact
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
            Get in Touch with Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions or need AI solutions? Let us know by filling out the form, and we'll be in touch!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="bg-card/50 p-6 flex items-center gap-4">
                    <Mail className="w-8 h-8 text-primary"/>
                    <div>
                        <h3 className="font-bold text-lg">E-mail</h3>
                        <p className="text-muted-foreground">technowave@outlook.in</p>
                    </div>
                </Card>
                <Card className="bg-card/50 p-6 flex items-center gap-4">
                    <Phone className="w-8 h-8 text-primary"/>
                    <div>
                        <h3 className="font-bold text-lg">Phone</h3>
                        <p className="text-muted-foreground">+91 99536 49900</p>
                    </div>
                </Card>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border/50">
                <form ref={formRef} action={formAction} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" name="firstName" placeholder="Jane" required />
                            {state.errors?.firstName && <p className="text-destructive text-sm">{state.errors.firstName[0]}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" name="lastName" placeholder="Smith" required />
                            {state.errors?.lastName && <p className="text-destructive text-sm">{state.errors.lastName[0]}</p>}
                        </div>
                    </div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="jane@mail.com" required />
                            {state.errors?.email && <p className="text-destructive text-sm">{state.errors.email[0]}</p>}
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" name="phone" type="tel" placeholder="(123) 456-7890"/>
                             {state.errors?.phone && <p className="text-destructive text-sm">{state.errors.phone[0]}</p>}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" name="message" placeholder="Hi, I want to help with..." required className="min-h-[120px]" />
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
