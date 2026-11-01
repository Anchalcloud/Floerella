// Portfolio content data - centralized for easy updates
export const PORTFOLIO_DATA = {
  personal: {
    name: 'Anchal Kumari',
    headline: 'BTech CSE Student | Aspiring AI Engineer',
    intro: 'I\'m a Computer Science student building a strong foundation in software development, data structures and algorithms, full-stack development, and AI/ML. I enjoy turning real-world problems into practical software solutions and continuously build projects to strengthen my engineering skills.',
    location: 'India',
    expectedGraduation: 2029,
    email: 'kumarianchal3663@gmail.com',
    links: {
      linkedin: 'https://www.linkedin.com/in/anchal-thakur-an',
      github: 'https://github.com/Anchalcloud',
    },
  },
  
  about: {
    fullText: 'I am a BTech Computer Science and Engineering student currently in my 3rd semester. I\'m developing my foundation across programming, data structures and algorithms, full-stack development, and machine learning.\n\nMy long-term goal is to become an AI Engineer. I\'m currently focusing on becoming a strong software engineer first—understanding how applications, APIs, databases and systems work—while gradually building deeper AI/ML knowledge.\n\nI prefer learning by building projects and understanding the concepts behind the implementation rather than simply copying solutions.',
    currentlyLearning: [
      'Data Structures & Algorithms',
      'Problem Solving',
      'Backend Development',
      'Machine Learning',
      'AI Engineering fundamentals',
      'Git & GitHub',
      'Software Engineering',
    ],
  },
  
  education: [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      status: 'Currently pursuing',
      expectedGraduation: 2029,
      currentSemester: '3rd semester',
      additionalInfo: '', // User can add university name later
    },
    {
      degree: 'Diploma',
      field: 'Computer Science & Engineering',
      status: 'Completed',
      additionalInfo: '', // User can add details later
    },
  ],
  
  experience: [
    {
      company: 'NTPC Limited',
      role: 'Industrial Training',
      duration: '3 months',
      description: 'Completed industrial training with exposure to networking and supervised machine learning fundamentals. The training helped me understand how technical concepts are applied in an organizational environment.',
    },
  ],
  
  problemSolving: {
    count: 100, // Easy to update
    roadmap: 'NeetCode',
    focus: 'DSA & Problem Solving',
    topics: [
      'Arrays',
      'Hash Maps',
      'Two Pointers',
      'Sliding Window',
      'Binary Search',
      'Prefix Sum',
      'Sorting',
      'Greedy techniques',
      'Array manipulation',
      'Basic algorithmic problem-solving patterns',
    ],
  },
  
  projects: [
    {
      id: 'prescripto',
      name: 'Prescripto',
      category: 'Full-Stack Web Application',
      description: 'Prescripto is a full-stack doctor appointment web application designed to connect patients with doctors through a structured appointment workflow.',
      technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      features: [
        'Doctor listing',
        'Doctor availability',
        'Appointment-related functionality',
        'Admin functionality',
        'Responsive user interface',
        'Database-backed application',
      ],
      github: '', // Placeholder - user will add
      liveDemo: '', // Placeholder - user will add
      image: '/projects/prescripto.png',
    },
    {
      id: 'flowerella',
      name: 'Flowerella',
      category: 'Frontend / E-commerce UI',
      description: 'Flowerella is a responsive flower e-commerce website built with React, focusing on product discovery, filtering, wishlist and cart interactions.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
      features: [
        'Product browsing',
        'Search',
        'Product filtering',
        'Wishlist',
        'Shopping cart',
        'Responsive design',
        'Product cards',
        'Navigation between pages',
      ],
      github: '', // Placeholder
      liveDemo: '', // Placeholder
      image: '/projects/flowerella.png',
    },
    {
      id: 'ai-chatbot',
      name: 'AI Chatbot & Voice Translator',
      category: 'AI / Application',
      description: 'An AI-focused application exploring conversational interaction and voice translation.',
      technologies: [], // User will add
      features: [],
      github: '', // Placeholder
      liveDemo: '', // Placeholder
      image: '/projects/ai-chatbot.png',
    },
  ],
  
  featuredProject: {
    title: 'Featured Real-World Project',
    status: 'Coming Soon',
    subtitle: 'Building a practical solution to a real-world problem with measurable impact.',
    problem: '',
    existingSolution: '',
    improvement: '',
    technology: '',
    impact: '',
    architecture: '',
    github: '',
    liveDemo: '',
    image: '',
  },
  
  skills: {
    programming: ['Python', 'Java', 'JavaScript'],
    webDevelopment: ['React', 'Node.js', 'Express.js', 'HTML', 'CSS'],
    database: ['MongoDB'],
    computerScience: [
      'Data Structures & Algorithms',
      'Problem Solving',
      'Object-Oriented Programming',
      'Operating Systems fundamentals',
      'Computer Networks fundamentals',
      'Database fundamentals',
    ],
    aiML: [
      'Machine Learning fundamentals',
      'Supervised Learning fundamentals',
      'AI Engineering fundamentals',
    ],
    tools: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  
  learningJourney: [
    'Programming Fundamentals',
    '100+ DSA Problems Solved',
    'Problem-Solving Patterns',
    'Full-Stack Development',
    'Machine Learning',
    'AI Engineering',
    'Real-World AI Systems',
  ],
  
  journeyDescription: 'I\'m intentionally building a strong software engineering foundation before going deeper into AI engineering. My goal is to understand not only how to use AI models, but also how complete AI-powered applications are designed, deployed and improved.',
}
