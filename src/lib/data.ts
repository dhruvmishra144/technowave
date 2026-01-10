import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';
import {
  Bot,
  Zap,
  BrainCircuit,
  Rocket,
  Search,
  FlaskConical,
  ClipboardCheck,
  CheckCircle,
  BarChart,
  Users,
  TrendingUp,
} from 'lucide-react';

const findImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id "${id}" not found.`);
  }
  return image;
};

export const features = [
  {
    title: 'Custom AI Chatbots',
    description:
      'Engage your customers with intelligent, 24/7 conversational AI that boosts sales and provides instant support.',
    imageId: 'feature-1',
  },
  {
    title: 'Workflow Automation',
    description:
      'Streamline your business operations by automating repetitive tasks, freeing up your team for more strategic work.',
    imageId: 'feature-2',
  },
  {
    title: 'Data-driven Insights',
    description:
      'Leverage machine learning to uncover valuable insights from your data, enabling smarter, faster business decisions.',
    imageId: 'feature-3',
  },
];

export const processSteps = [
  {
    step: 1,
    title: 'Discovery',
    description:
      "We start by understanding your business, goals, and challenges to identify the best opportunities for AI.",
    icon: Search,
  },
  {
    step: 2,
    title: 'Strategy',
    description:
      'We craft a custom AI strategy and roadmap tailored to your specific needs and objectives.',
    icon: Rocket,
  },
  {
    step: 3,
    title: 'Implementation',
    description:
      'Our expert team develops and integrates the AI solution seamlessly into your existing workflow.',
    icon: FlaskConical,
  },
  {
    step: 4,
    title: 'Review',
    description:
      'We rigorously test and refine the solution to ensure it meets the highest standards of performance and reliability.',
    icon: ClipboardCheck,
  },
];

export const benefits = [
  {
    title: 'Increased Efficiency',
    description: 'Automate tasks and optimize processes to get more done, faster.',
    icon: TrendingUp,
  },
  {
    title: 'Cost Reduction',
    description:
      'Lower operational costs by minimizing manual work and resource allocation.',
    icon: BarChart,
  },
  {
    title: 'Enhanced Engagement',
    description:
      'Provide personalized, instant responses to your customers, 24/7.',
    icon: Users,
  },
  {
    title: 'Smarter Decisions',
    description:
      'Utilize data-driven insights to make informed, strategic decisions.',
    icon: BrainCircuit,
  },
];

export const pricingTiers = [
  {
    name: 'Starter',
    price: '$499',
    description: 'For small businesses getting started with AI automation.',
    features: [
      '1 AI Chatbot',
      'Basic Workflow Automation',
      'Monthly Performance Report',
      'Email Support',
    ],
    buttonText: 'Choose Starter',
  },
  {
    name: 'Growth',
    price: '$999',
    description: 'For growing businesses looking to scale their operations.',
    features: [
      '3 AI Chatbots',
      'Advanced Workflow Automation',
      'Real-time Analytics Dashboard',
      'Priority Email & Chat Support',
    ],
    buttonText: 'Choose Growth',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description:
      'For large organizations requiring a tailored, end-to-end AI solution.',
    features: [
      'Unlimited AI Chatbots',
      'Custom ML Model Development',
      'Full System Integration',
      'Dedicated Account Manager',
    ],
    buttonText: 'Contact Us',
  },
];

export const testimonials = [
  {
    quote:
      'Working with Xtract has been a revelation for our company. Their AI-powered chatbot has transformed our customer service, handling over 70% of inquiries and freeing up our team to focus on complex issues. The results have been phenomenal.',
    name: 'Sarah Johnson',
    role: 'CEO of Innovate Inc.',
    image: findImage('team-1'),
  },
  {
    quote:
      'The workflow automation solution implemented by Xtract has saved us countless hours of manual work. Our processes are now more efficient and error-free than ever before. Their team understood our needs perfectly and delivered beyond our expectations.',
    name: 'Michael Chen',
    role: 'COO of Tech Solutions',
    image: findImage('team-2'),
  },
  {
    quote:
      "We were drowning in data until Xtract developed a custom machine learning model for us. We now have actionable insights that drive our marketing strategy and have seen a significant ROI. I can't recommend them highly enough.",
    name: 'Jessica Rodriguez',
    role: 'Marketing Director at Creative Co.',
    image: findImage('team-3'),
  },
];

export const faqs = [
    {
        question: "What is AI automation?",
        answer: "AI automation uses artificial intelligence technologies to streamline and optimize business processes, reducing manual effort and increasing efficiency. This can range from simple task automation to complex decision-making systems."
    },
    {
        question: "How long does it take to implement an AI solution?",
        answer: "The timeline for implementation varies depending on the complexity of the project. A simple chatbot might take a few weeks, while a custom machine learning model could take several months. We provide a detailed project roadmap after the initial discovery phase."
    },
    {
        question: "How do you ensure the security of our data?",
        answer: "Data security is our top priority. We adhere to industry best practices for data encryption, access control, and compliance. All data is handled with strict confidentiality and stored in secure, world-class data centers."
    },
    {
        question: "Can you integrate with our existing software?",
        answer: "Yes, our solutions are designed to be flexible and can be integrated with a wide range of existing software and platforms. We work closely with your team to ensure a seamless integration process."
    }
];

export const services = [
  {
    title: 'AI Chatbots',
    description:
      'Intelligent, 24/7 conversational AI to boost sales and support.',
    icon: Bot,
  },
  {
    title: 'Workflow Automation',
    description:
      'Streamline repetitive tasks to free up your team for strategic work.',
    icon: Zap,
  },
  {
    title: 'Machine Learning',
    description:
      'Custom models to uncover insights and drive smarter decisions.',
    icon: BrainCircuit,
  },
  {
    title: 'AI-Powered Apps',
    description:
      'Develop intelligent applications that deliver innovative user experiences.',
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
