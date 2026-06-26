export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  details: string[];
  isCopywriting: boolean;
}

export interface Campaign {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  concept: string;
  illustrator?: string;
  quote?: string;
  copywritingSample: string;
  results?: string[];
  tags: string[];
  images: string[];
}

export interface ShortFilm {
  id: string;
  title: string;
  year: number;
  genre: string;
  logline: string;
  synopsis: string;
  storyline: string;
  stillUrl: string;
  director: string;
  roles: string[]; // e.g., ['Producer', 'Director', 'Writer']
}

export interface PhotographyItem {
  id: string;
  title: string;
  category: 'Fine Art' | 'Postcard Campaign' | 'Film Still';
  imageUrl: string;
  description?: string;
}

export interface ActingExperience {
  id: string;
  project: string;
  year: string;
  type: 'Theater' | 'Short Film';
  role: string;
  description: string;
}

export interface CollaborationItem {
  id: string;
  role: string;
  project: string;
  year: number;
  director: string;
  type: string;
}
