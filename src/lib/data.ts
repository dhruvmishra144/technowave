
import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';
import {
  Palette,
  Zap,
  LayoutTemplate,
  Rocket,
  Search,
  PenTool,
  CheckCircle,
  BarChart,
  Users,
  TrendingUp,
  ShieldCheck,
  Code,
  ShoppingCart,
  Smartphone,
  Briefcase,
  ThumbsUp,
  Cog,
  Server,
} from 'lucide-react';

const findImage = (id: string): ImagePlaceholder | undefined => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    console.warn(`Image with id "${id}" not found.`);
    return undefined;
  }
  return image;
};

export const features = [
  {
    title: 'Custom Web Design',
    description:
      'We design beautiful, user-centric websites that reflect your brand identity and engage your audience.',
    imageId: 'feature-1',
  },
  {
    title: 'High-Performance Development',
    description:
      'Our websites are built for speed and scalability, ensuring a fast, reliable experience for your users.',
  },
  {
    title: 'E-Commerce Solutions',
    description:
      'Powerful and secure e-commerce platforms that drive sales and provide a seamless shopping experience.',
    imageId: 'feature-3',
  },
];

export const processSteps = [
  {
    step: 1,
    title: 'Discovery & Strategy',
    description:
      "We start by understanding your business, goals, and target audience to craft a tailored web strategy.",
    icon: Search,
  },
  {
    step: 2,
    title: 'Design & UX',
    description:
      'Our team creates stunning, intuitive designs and wireframes that prioritize user experience.',
    icon: Palette,
  },
  {
    step: 3,
    title: 'Development & Testing',
    description:
      'We bring the designs to life with clean, efficient code and rigorously test across all devices.',
    icon: Code,
  },
  {
    step: 4,
    title: 'Launch & Optimization',
    description:
      'After a successful launch, we monitor performance and provide ongoing support to ensure your success.',
    icon: Rocket,
  },
];

export const benefits = [
  {
    title: 'Stunning Design',
    description: 'Make a lasting first impression with a visually appealing, professional website.',
    icon: Palette,
  },
  {
    title: 'Blazing Fast Speed',
    description:
      'Improve user experience and SEO with a website optimized for performance.',
    icon: Zap,
  },
  {
    title: 'Mobile Responsive',
    description:
      'Reach your customers on any device with a fully responsive layout.',
    icon: LayoutTemplate,
  },
  {
    title: 'SEO Optimized',
    description:
      'Increase your visibility on search engines and attract more organic traffic.',
    icon: TrendingUp,
  },
];

export const pricingTiers = [
  {
    name: 'Starter',
    price: '$1,500',
    description: 'Perfect for individuals and small businesses needing a professional online presence.',
    features: [
      'Up to 5 Pages',
      'Custom Design',
      'Mobile Responsive',
      'Basic SEO Setup',
      '1 Month Support',
    ],
    buttonText: 'Choose Starter',
  },
  {
    name: 'Business',
    price: '$4,500',
    description: 'For growing businesses looking to expand their digital footprint and features.',
    features: [
      'Up to 15 Pages',
      'CMS Integration (e.g., WordPress)',
      'Advanced SEO',
      'E-commerce Functionality',
      '3 Months Support',
    ],
    buttonText: 'Choose Business',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description:
      'For large organizations with complex requirements and custom needs.',
    features: [
      'Unlimited Pages',
      'Custom Application Development',
      'API Integrations',
      'Dedicated Project Manager',
      'Ongoing Maintenance & Support',
    ],
    buttonText: 'Contact Us',
  },
];

export const testimonials = [
  {
    quote:
      'TechnoWave delivered a website that exceeded all our expectations. The design is stunning, and the performance is flawless. Our online engagement has skyrocketed since the launch. Truly a five-star experience from start to finish.',
    name: 'Sarah Johnson',
    role: 'CEO of Innovate Inc.',
    image: findImage('team-1'),
  },
  {
    quote:
      'The team at TechnoWave is incredibly talented and professional. They took our vision and turned it into a reality that is both beautiful and functional. The new e-commerce platform they built for us is a game-changer.',
    name: 'Michael Chen',
    role: 'COO of Tech Solutions',
    image: findImage('team-2'),
  },
  {
    quote:
      "Our old website was slow and outdated. TechnoWave gave us a complete overhaul, and the results are incredible. The new site is fast, easy to navigate, and has significantly improved our conversion rates. We couldn't be happier.",
    name: 'Jessica Rodriguez',
    role: 'Marketing Director at Creative Co.',
    image: findImage('team-3'),
  },
];

export const faqs = [
    {
        question: "What is the typical timeline for a new website?",
        answer: "A typical website project takes between 4 to 8 weeks from start to finish, depending on the complexity and number of pages. We provide a detailed project timeline after our initial discovery call."
    },
    {
        question: "Do you provide website maintenance services?",
        answer: "Yes, we offer a range of website maintenance packages to ensure your site remains secure, updated, and performing at its best. We can also provide ad-hoc support as needed."
    },
    {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely. All the websites we build are fully responsive, meaning they will look great and function perfectly on all devices, including desktops, tablets, and smartphones."
    },
    {
        question: "Can you help with my website's ranking on Google?",
        answer: "Yes, we include foundational SEO (Search Engine Optimization) in all our projects. For more advanced needs, we offer comprehensive SEO services to help you rank higher and attract more organic traffic."
    }
];

export const services = [
  {
    title: 'Website Designing & Development',
    description: 'Beautiful and intuitive UI/UX design that provides a great user experience.',
    icon: LayoutTemplate,
  },
  {
    title: 'Ecommerce Website Designing',
    description: 'Robust online stores to sell your products and services effectively.',
    icon: ShoppingCart,
  },
  {
    title: 'Digital Brand Development',
    description: 'Building a strong, recognizable brand that connects with your audience.',
    icon: PenTool,
  },
  {
    title: 'Mobile App Development',
    description: 'Custom mobile applications for iOS and Android to engage your users.',
    icon: Smartphone,
  },
  {
    title: 'SEO Services',
    description: 'Improving your visibility on search engines to attract more organic traffic.',
    icon: TrendingUp,
  },
  {
    title: 'Startup Consulting & Nurturing',
    description: 'Expert guidance to help your startup grow from idea to success.',
    icon: Briefcase,
  },
  {
    title: 'Online Reputation Management',
    description: 'Managing and improving your online presence and reputation.',
    icon: ThumbsUp,
  },
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs.',
    icon: Cog,
  },
  {
    title: 'Websites Maintenance Service',
    description: 'Keeping your website secure, updated, and running smoothly.',
    icon: Server,
  },
];


export const portfolioProjects = [
  {
    id: '1',
    title: 'Fintech Startup Website',
    description: 'A sleek, modern website for a growing financial technology company.',
    image: findImage('portfolio-1'),
    testimonial:
      '"TechnoWave revolutionized how we approach our digital presence. Their design is a game-changer."',
    client: 'Financify Inc.',
  },
  {
    id: '2',
    title: 'Fashion E-commerce Store',
    description: 'An elegant e-commerce site for a high-end apparel brand.',
    image: findImage('portfolio-2'),
    testimonial:
      '"Our sales increased by 40% after launching the new site. Incredible work."',
    client: 'Vogue Apparel',
  },
  {
    id: '3',
    title: 'Corporate Real Estate Site',
    description: 'A professional website for a major real estate agency, featuring property listings and agent profiles.',
    image: findImage('portfolio-3'),
    testimonial:
      '"The new website is a huge asset for our agents. TechnoWave delivered beyond our expectations."',
    client: 'Prestige Properties',
  },
  {
    id: '4',
    title: 'Health & Wellness App Landing Page',
    description: 'A vibrant and engaging landing page to drive downloads for a new fitness app.',
    image: findImage('portfolio-4'),
    testimonial:
      '"User sign-ups are through the roof. The landing page is both beautiful and effective."',
    client: 'Zenith Wellness',
  },
];

export const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Lead Web Developer',
    bio: 'Jane is the mastermind behind our most complex web applications, with a passion for clean code and innovative solutions.',
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
    bio: 'Alex crafts beautiful and intuitive user interfaces, believing that great design is about solving problems elegantly.',
    image: findImage('team-3'),
  },
];
