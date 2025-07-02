// === src/data/projects.ts ===

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'Elden Ring Boss Tracker',
    description: 'Track completion and deaths for every boss in Elden Ring.',
    image: '/images/elden-ring.png',
    tech: ['React', 'TypeScript', 'Vite'],
    github: 'https://github.com/kiranadhikari1/elden-ring-tracker',
    demo: 'https://eldenring.kiranadhikari.dev'
  },
  {
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website to showcase projects and skills.',
    image: '/images/portfolio.png',
    tech: ['React', 'TypeScript', 'CSS Modules'],
    github: 'https://github.com/kiranadhikari1/portfolio',
    demo: 'https://kiranadhikari.dev'
  },
  {
    title: '---',
    description: 'palceholder',
    image: '/images/weather-app.png',
    tech: ['React', 'OpenWeatherMap API', 'Tailwind CSS'],
    github: 'https://github.com/kiranadhikari1/weather-app',
    demo: 'https://weather.kiranadhikari.dev'
  },
  {
    title: '---',
    description: 'palceholder',
    image: '/images/task-manager.png',
    tech: ['React', 'TypeScript', 'Vite', 'LocalStorage'],
    github: 'https://github.com/kiranadhikari1/task-manager',
    demo: 'https://tasks.kiranadhikari.dev'
  },
  {
    title: '---',
    description: 'palceholder',
    image: '/images/blog-cms.png',
    tech: ['Next.js', 'React', 'Markdown'],
    github: 'https://github.com/kiranadhikari1/blog-cms',
    demo: 'https://blogcms.kiranadhikari.dev'
  },
  {
    title: '---',
    description: 'palceholder',
    image: '/images/chat-app.png',
    tech: ['React', 'Node.js', 'Socket.io'],
    github: 'https://github.com/kiranadhikari1/chat-app',
    demo: 'https://chat.kiranadhikari.dev'
  }
];
