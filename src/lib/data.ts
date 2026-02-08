
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

const findImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    console.warn(`Image with id "${id}" not found.`);
    // Return a default placeholder to avoid breaking the build
    return {
      id: 'not-found',
      description: 'Image not found',
      imageUrl: 'https://placehold.co/600x400',
      imageHint: 'placeholder',
    };
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
      'Stock Photography',
    ],
    buttonText: 'Choose Starter',
  },
  {
    name: 'Business',
    price: '$4,500',
    description: 'For growing businesses looking to expand their digital footprint and features.',
    features: [
      'Up to 15 Pages',
      'CMS Integration',
      'Advanced SEO',
      'E-commerce Functionality (up to 50 products)',
      'Blog Setup',
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
      'Advanced Security Features',
      'Ongoing Maintenance & Support',
    ],
    buttonText: 'Contact Us',
  },
];

export const testimonials = [
  {
    quote:
      'TechnoWave delivered a website that exceeded all our expectations. The design is stunning, and the performance is flawless. Our online engagement has skyrocketed since the launch. Truly a five-star experience from start to finish.',
    name: 'Priya Sharma',
    role: 'CEO of Innovate Inc.',
    image: findImage('team-1'),
  },
  {
    quote:
      "Our old website was slow and outdated. TechnoWave gave us a complete overhaul, and the results are incredible. The new site is fast, easy to navigate, and has significantly improved our conversion rates. We couldn't be happier.",
    name: 'Arjun Kapoor',
    role: 'Marketing Director at Creative Co.',
    image: findImage('team-2'),
  },
  {
    quote:
      'The team at TechnoWave is incredibly talented and professional. They took our vision and turned it into a reality that is both beautiful and functional. The new e-commerce platform they built for us is a game-changer.',
    name: 'Riya Sharma',
    role: 'COO of Tech Solutions',
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
    name: 'Aditi Sharma',
    role: 'Lead Web Developer',
    bio: 'Aditi is the mastermind behind our most complex web applications, with a passion for clean code and innovative solutions.',
    image: findImage('team-1'),
  },
  {
    name: 'Neha Patel',
    role: 'UI/UX Designer',
    bio: 'Neha crafts beautiful and intuitive user interfaces, believing that great design is about solving problems elegantly.',
    image: findImage('team-3'),
  },
];

export const detailedFaqs = [
  {
    category: 'General Questions',
    questions: [
      {
        question: 'What kind of businesses do you work with?',
        answer: 'We work with a wide range of businesses, from startups and small businesses to large enterprises. Our expertise is adaptable to various industries, including tech, e-commerce, healthcare, and more.'
      },
      {
        question: 'What makes TechnoWave different from other web development agencies?',
        answer: 'We combine cutting-edge technology with a deeply collaborative process. Our focus is not just on building websites, but on creating digital experiences that deliver measurable results and long-term value for our clients.'
      },
      {
        question: 'Where are you based?',
        answer: 'Our team operates remotely, allowing us to work with the best talent and serve clients from all over the world. Our primary business registration is in India.'
      }
    ]
  },
  {
    category: 'Process & Timeline',
    questions: [
      {
        question: 'What is your web development process?',
        answer: 'Our process is divided into four key phases: 1) Discovery & Strategy, 2) Design & UX, 3) Development & Testing, and 4) Launch & Optimization. This structured approach ensures we meet your goals on time and within budget.'
      },
      {
        question: "How long does it take to build a website?",
        answer: "A typical project timeline ranges from 4 to 12 weeks. A basic marketing site might take 4-6 weeks, while a complex e-commerce platform or custom application could take 8-12 weeks or more. We provide a detailed timeline after the initial discovery phase."
      },
      {
        question: 'How involved will I be in the process?',
        answer: 'We believe in a collaborative partnership. You will be involved at every key stage, from initial strategy and design approvals to user acceptance testing. Your feedback is crucial to ensuring the final product meets your vision.'
      }
    ]
  },
  {
    category: 'Pricing & Packages',
    questions: [
      {
        question: 'How much does a website cost?',
        answer: "The cost depends on the project's scope and complexity. Our Starter package begins at $1,500 for a basic website. Our Business package, which includes e-commerce, starts at $4,500. For custom enterprise solutions, we provide a detailed quote after an in-depth consultation."
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, for larger projects, we typically structure payments in milestones. A common structure is a 50% upfront payment, 25% upon design approval, and 25% upon project completion before launch.'
      },
      {
        question: 'Are there any hidden fees?',
        answer: 'No. We are transparent with our pricing. All costs will be outlined in your project proposal. Any additional work requested during the project will be discussed and quoted separately before we proceed.'
      }
    ]
  },
  {
    category: 'Support & Maintenance',
    questions: [
      {
        question: 'What kind of support do you offer after the website is launched?',
        answer: 'All our packages include a period of post-launch support to fix any bugs. We also offer ongoing monthly maintenance plans that cover updates, security monitoring, backups, and a set number of hours for content or feature updates.'
      },
      {
        question: 'Will I be able to update the website myself?',
        answer: "Yes. For most projects, we build on a Content Management System (CMS) like WordPress or a headless CMS, which allows you to easily update content, images, and other elements without needing any coding knowledge. We provide training on how to use your new CMS."
      }
    ]
  }
];

export const featureComparison = [
  { feature: 'Number of Pages', starter: 'Up to 5', business: 'Up to 15', enterprise: 'Unlimited' },
  { feature: 'Custom Design', starter: true, business: true, enterprise: true },
  { feature: 'Responsive Design', starter: true, business: true, enterprise: true },
  { feature: 'CMS Integration', starter: false, business: true, enterprise: true },
  { feature: 'E-commerce', starter: false, business: 'Up to 50 products', enterprise: 'Advanced' },
  { feature: 'Blog Setup', starter: false, business: true, enterprise: true },
  { feature: 'Basic SEO', starter: true, business: true, enterprise: true },
  { feature: 'Advanced SEO', starter: false, business: true, enterprise: true },
  { feature: 'API Integrations', starter: false, business: false, enterprise: true },
  { feature: 'Dedicated Project Manager', starter: false, business: false, enterprise: true },
  { feature: 'Support', starter: '1 Month', business: '3 Months', enterprise: 'Ongoing' },
];
