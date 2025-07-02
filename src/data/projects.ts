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
  }
];
