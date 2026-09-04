export interface NavLinkItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export interface ValueProp {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface AcademicStage {
  id: string;
  name: string;
  ageRange: string;
  gradeLevels: string;
  curriculum: string;
  tagline: string;
  description: string;
  image: string;
  keyFeatures: string[];
  subjects: string[];
  outcomes: string[];
  schedule: string;
}

export interface CoCurricularActivity {
  id: string;
  title: string;
  category: 'Sports & Athletics' | 'Performing & Visual Arts' | 'STEM & Innovation' | 'Leadership & Service' | 'Music & Media';
  ageGroup: string;
  description: string;
  image: string;
  schedule: string;
  coachOrLead: string;
  tags: string[];
}

export interface CampusFacility {
  id: string;
  name: string;
  category: 'Academics & STEM' | 'Sports & Athletics' | 'Arts & Performance' | 'Libraries & Commons' | 'Student Dining & Outdoor';
  description: string;
  image: string;
  features: string[];
  capacity?: string;
  highlights: string;
}

export interface AdmissionsStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  timeline: string;
  requirements: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  category: 'Academic Achievement' | 'Campus Life' | 'Arts & Culture' | 'Sports' | 'Community & Service' | 'Admissions Announcement' | 'Digital Literacy';
  date: string;
  readTime: string;
  author: string;
  summary: string;
  fullContent: string;
  image: string;
  featured?: boolean;
}

export interface SchoolEvent {
  id: string;
  title: string;
  category: 'Open Day' | 'Academic' | 'Sports' | 'Arts' | 'Community';
  date: string;
  time: string;
  location: string;
  description: string;
  targetAudience: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  subRole?: string;
  quote: string;
  grade?: string;
  avatar: string;
  yearJoined?: string;
  isPlaceholderNote?: boolean;
}

export interface ParentResource {
  title: string;
  category: string;
  description: string;
  actionText: string;
  icon: string;
  linkHref?: string;
  badge?: string;
}

export interface SchoolVideo {
  id: string;
  title: string;
  category: string;
  url: string;
  description: string;
  duration?: string;
  thumbnail: string;
  slotKey?: string;
  isReel?: boolean;
}

export interface SchoolConfig {
  name: string;
  tagline: string;
  founded: string;
  accreditation: string[];
  phone: string;
  admissionsPhone: string;
  email: string;
  admissionsEmail: string;
  googleMapsUrl?: string;
  address: {
    street: string;
    district: string;
    city: string;
    country: string;
    postalCode: string;
  };
  officeHours: string;
  socials: {
    facebook: string;
    instagram: string;
    linkedin: string;
    youtube: string;
    video1: string;
    video2: string;
    video3: string;
    mapLocation?: string;
  };
}

