export interface TechStack {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export const techStack: TechStack[] = [
  { name: 'React', icon: '⚛️', category: 'frontend' },
  { name: 'TypeScript', icon: '📘', category: 'frontend' },
  { name: 'JavaScript', icon: '🟨', category: 'frontend' },
  { name: 'Node.js', icon: '🟩', category: 'backend' },
  { name: 'CSS/SCSS', icon: '🎨', category: 'frontend' },
  { name: 'HTML5', icon: '🏗️', category: 'frontend' },
  { name: 'Git', icon: '🔧', category: 'tools' },
  { name: 'AWS', icon: '☁️', category: 'tools' },
  { name: 'Python', icon: '🐍', category: 'backend' },
  { name: 'C++', icon: '⚙️', category: 'backend' },
];
