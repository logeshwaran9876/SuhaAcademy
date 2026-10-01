// Shared type definitions for components that consume JS data files

export interface Course {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  image: string;
  icon: string;
  curriculum: string[];
  cta: string;
  highlights: string[];
  isWorkshop?: boolean;
}
