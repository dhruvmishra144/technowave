'use server';

/**
 * @fileOverview AI-powered tool to generate website mockups and get inspiration from successful projects.
 *
 * - generateWebsiteMockup - A function that generates website mockups based on a niche.
 * - PortfolioInspirationInput - The input type for the generateWebsiteMockup function.
 * - PortfolioInspirationOutput - The return type for the generateWebsiteMockup function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioInspirationInputSchema = z.object({
  niche: z
    .string()
    .describe('The specific niche or industry for the website mockup.'),
});
export type PortfolioInspirationInput = z.infer<typeof PortfolioInspirationInputSchema>;

const PortfolioInspirationOutputSchema = z.object({
  mockupDescription: z.string().describe('A description of the generated website mockup.'),
  mockupImageUrl: z.string().describe('The URL of the generated website mockup image.'),
});
export type PortfolioInspirationOutput = z.infer<typeof PortfolioInspirationOutputSchema>;

export async function generateWebsiteMockup(
  input: PortfolioInspirationInput
): Promise<PortfolioInspirationOutput> {
  return portfolioInspirationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioInspirationPrompt',
  input: {schema: PortfolioInspirationInputSchema},
  output: {schema: PortfolioInspirationOutputSchema},
  prompt: `You are a website design expert. Generate a website mockup and description for the given niche.

Niche: {{{niche}}}

Instructions: Create a description of the website, and generate a URL for the mockup image. Focus on design elements that are successful in this niche.

Description:
Mockup Image URL:`, // The prompt should generate both a description and an image URL
});

const portfolioInspirationFlow = ai.defineFlow(
  {
    name: 'portfolioInspirationFlow',
    inputSchema: PortfolioInspirationInputSchema,
    outputSchema: PortfolioInspirationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
