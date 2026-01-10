import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';
import { Code, Palette, Search, Megaphone } from 'lucide-react';

const findImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id "${id}" not found.`);
  }
  return image;
};

export const services = [
  {
    title: 'Web Design',
    description: 'Creating stunning, user-centric designs that are both beautiful and intuitive.',
    icon: Palette,
  },
  {
    title: 'Development',
    description: 'Building robust, scalable, and high-performance websites and applications.',
    icon: Code,
  },
  {
    title: 'SEO',
    description: 'Optimizing your site to rank higher on search engines and attract more traffic.',
    icon: Search,
  },
  {
    title: 'Digital Marketing',
    description: 'Crafting data-driven marketing strategies to grow your online presence.',
    icon: Megaphone,
  },
];

export const portfolioProjects = [
  {
    id: '1',
    title: 'Fintech Dashboard',
    description: 'A sleek, modern dashboard for a financial technology startup, providing users with real-time data visualization and analytics.',
    image: findImage('portfolio-1'),
    testimonial:
      '"TechnoWave transformed our vision into a reality. Their attention to detail and commitment to quality is unparalleled."',
    client: 'Financify Inc.',
  },
  {
    id: '2',
    title: 'Fashion E-commerce',
    description: 'An elegant e-commerce platform for a luxury fashion brand, featuring a seamless shopping experience and beautiful product displays.',
    image: findImage('portfolio-2'),
    testimonial:
      '"The new website has significantly boosted our online sales. The team was a pleasure to work with."',
    client: 'Vogue Apparel',
  },
  {
    id: '3',
    title: 'Real Estate Hub',
    description: 'A comprehensive corporate website for a real estate agency, with property listings, agent profiles, and a mortgage calculator.',
    image: findImage('portfolio-3'),
    testimonial:
      '"Our online presence has never been stronger. TechnoWave delivered a product that exceeded all our expectations."',
    client: 'Prestige Properties',
  },
  {
    id: '4',
    title: 'Wellness Mobile App',
    description: 'A user-friendly mobile application for a health and wellness company, offering personalized fitness plans and progress tracking.',
    image: findImage('portfolio-4'),
    testimonial:
      '"The app is intuitive, beautiful, and our users love it. The development process was smooth and collaborative."',
    client: 'Zenith Wellness',
  },
];

export const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Lead Developer',
    bio: 'Jane is the mastermind behind our most complex projects, with a passion for clean code and innovative solutions.',
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
    role: 'UI/UX Designer',
    bio: 'Alex crafts beautiful and intuitive user experiences, believing that great design is about solving problems elegantly.',
    image: findImage('team-3'),
  },
];

export const aiMockupPlaceholder = findImage('ai-mockup-placeholder');
