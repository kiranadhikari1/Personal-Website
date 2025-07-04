export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  type: 'co-op' | 'full-time' | 'internship' | 'contract';
  description?: string;
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Ross Video",
    position: "Device Simulation Developer",
    duration: "Sep 2022 – Apr 2023",
    type: "co-op",
  },
  {
    id: 2,
    company: "Ross Video",
    position: "Full Stack Developer",
    duration: "May 2023 – Aug 2023",
    type: "co-op",
  },
  {
    id: 3,
    company: "Ross Video",
    position: "Full Stack Developer",
    duration: "May 2024 – Aug 2024",
    type: "co-op",
  },
  {
    id: 4,
    company: "Ross Video",
    position: "Software Developer",
    duration: "May 2025 – Current",
    type: "full-time",
  },
];