'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { generateInspirationAction } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Sparkles, Loader2 } from 'lucide-react';
import { aiMockupPlaceholder } from '@/lib/data';
import { useEffect, useRef } from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Idea
        </>
      )}
    </Button>
  );
}

export default function InspirationForm() {
  const initialState = {
    error: null,
    data: null,
  };
  const [state, formAction] = useFormState(generateInspirationAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.data) {
        formRef.current?.reset();
    }
  }, [state.data]);

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <form ref={formRef} action={formAction} className="flex flex-col sm:flex-row gap-4">
            <Input
              name="niche"
              placeholder="e.g., 'a local coffee shop', 'a portfolio for a photographer'"
              required
              className="flex-grow text-base"
            />
            <SubmitButton />
          </form>
          {state.error && <p className="text-destructive text-sm mt-2">{state.error}</p>}
        </CardContent>
      </Card>
      
      {state.data && (
        <div className="mt-8">
            <Card className="overflow-hidden animate-in fade-in duration-500">
                <div className="grid md:grid-cols-2">
                    <div className="relative aspect-video md:aspect-auto">
                        <Image 
                            src={state.data.mockupImageUrl || aiMockupPlaceholder.imageUrl} 
                            alt={state.data.mockupDescription}
                            fill
                            className="object-cover"
                            data-ai-hint="website mockup"
                        />
                    </div>
                    <div className="p-6">
                        <CardHeader className="p-0">
                            <CardTitle className="font-headline text-2xl">Generated Mockup</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 pt-4">
                            <p className="text-muted-foreground">{state.data.mockupDescription}</p>
                        </CardContent>
                    </div>
                </div>
            </Card>
        </div>
      )}
    </div>
  );
}
