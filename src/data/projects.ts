export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  icon?: string;
}
const eldenringLogo = '/eldenRingLogo.png';

export const projects: Project[] = [
  {
    title: 'Selenium Automated Web Game',
    description: 'Automates interaction with a web-based game using Selenium and Python.',
    tech: ['Python'],
    github: 'https://github.com/kiranadhikari1/Selenium-Automated-Interactive-Web-Game',
    icon: '🎮'
  },
  {
    title: 'Elevator Simulation',
    description: 'Simulates elevator movement and request handling in Java.',
    tech: ['Java'],
    github: 'https://github.com/kiranadhikari1/elevatorSimulation',
    icon: '🛗'
  },
  {
    title: 'Neureset Device Simulator',
    description: 'Simulates hardware interaction for the Neureset medical device.',
    tech: ['Java'],
    github: 'https://github.com/kiranadhikari1/Neureset-Device-Simulator',
    icon: '🧠'
  },
  {
    title: 'SCMS & C-V2X in QNX vs Cloud',
    description: 'Comparison of QNX vs cloud deployment for SCMS and C-V2X systems.',
    tech: ['Java'],
    github: 'https://github.com/kiranadhikari1/SCMS-and-C-V2X-In-QNX-vs-Cloud-Deployment',
    icon: '☁️'
  },
  {
    title: 'Elden Ring Boss Checklist',
    description: 'Track boss fights and progress in Elden Ring using a visual checklist.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/kiranadhikari1/eldenRing_bossChecklist',
    icon: eldenringLogo
  },
  {
    title: 'Yukihira Themed Website',
    description: 'A themed personal website styled after Yukihira restaurant from Shokugeki no Soma.',
    tech: ['React', 'HTML', 'CSS'],
    github: 'https://github.com/kiranadhikari1/yukihira-themed-website',
    icon: '🍜'
  }
];
