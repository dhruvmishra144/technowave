import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';
import { Bot, Zap, BrainCircuit, Rocket } from 'lucide-react';

const findImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id "${id}" not found.`);
  }
  return image;
};

export const services = [
  {
    title: 'AI Chatbots',
    description: 'Intelligent, conversational chatbots to automate customer support and sales.',
    icon: Bot,
  },
  {
    title: 'Workflow Automation',
    description: 'Automating repetitive tasks and streamlining business processes with AI.',
    icon: Zap,
  },
  {
    title: 'Machine Learning',
    description: 'Building custom machine learning models to solve unique business challenges.',
    icon: BrainCircuit,
  },
  {
    title: 'AI Strategy',
    description: 'Crafting data-driven AI strategies to help your business grow and innovate.',
    icon: Rocket,
  },
];

export const portfolioProjects = [
  {
    id: '1',
    title: 'Automated Financial Advisor',
    description: 'An AI-powered platform providing personalized financial advice and portfolio management.',
    image: findImage('portfolio-1'),
    testimonial:
      '"Xtract revolutionized how we approach client advisement. Their AI solution is a game-changer."',
    client: 'Financify Inc.',
  },
  {
    id: '2',
    title: 'AI-Powered E-commerce',
    description: 'An e-commerce site using AI for personalized recommendations and inventory management.',
    image: findImage('portfolio-2'),
    testimonial:
      '"Our sales increased by 40% after implementing the AI features. Incredible work."',
    client: 'Vogue Apparel',
  },
  {
    id: '3',
    title: 'Smart Real Estate Platform',
    description: 'An AI-driven platform for property valuation, market analysis, and lead generation.',
    image: findImage('portfolio-3'),
    testimonial:
      '"The market insights from the AI are invaluable. Xtract delivered beyond our expectations."',
    client: 'Prestige Properties',
  },
  {
    id: '4',
    title: 'AI Fitness Coach App',
    description: 'A mobile app that uses AI to create dynamic, personalized workout and nutrition plans.',
    image: findImage('portfolio-4'),
    testimonial:
      '"User engagement is through the roof. The AI coach feels incredibly human and motivating."',
    client: 'Zenith Wellness',
  },
];

export const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Lead AI Engineer',
    bio: 'Jane is the mastermind behind our most complex AI models, with a passion for clean code and innovative solutions.',
    image: findImage('team-1'),
  },
  {
    name: 'John Smith',
    role: 'Project Manager',
    bio: 'John ensures every project is delivered on time and exceeds client expectations, bridging the gap between vision and execution.',
    image: findImage('team-2'),
  },
  {
    name: 'Alex Ray',
    role: 'Machine Learning Specialist',
    bio: 'Alex crafts powerful machine learning solutions, believing that great data science is about solving problems elegantly.',
    image: findImage('team-3'),
  },
];

export const aiMockupPlaceholder = findImage('ai-mockup-placeholder');
