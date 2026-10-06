export interface Program {
  id: string;
  title: string;
  badge: string;
  ageGroup: string;
  timings: string;
  themeColor: string;
  accentBg: string;
  borderColor: string;
  textColor: string;
  buttonClass: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  skills: string[];
  activities: string[];
  keyHighlights: string[];
}

export interface Facility {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  tag: string;
  image: string;
}

export interface Activity {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  color: string;
  bgColor: string;
  benefits: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'classroom' | 'activities' | 'events' | 'celebrations' | 'campus';
  image: string;
  alt: string;
  date?: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  relation: string;
  childName: string;
  program: string;
  rating: number;
  review: string;
  avatarBg: string;
  verified: boolean;
  date: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'admissions' | 'academics' | 'safety' | 'general';
}
