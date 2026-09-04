// School Real Media Store with IndexedDB Persistence
// Manages real photos of Radiant International School (Playground, Dell Computer Lab, Cambridge Classrooms, and Flyers)

export interface SchoolPhotoItem {
  id: string;
  slotKey: string;
  originalFileName: string;
  alternativeFileNames: string[];
  publicPath: string;
  title: string;
  category: 'facilities' | 'ict' | 'academics' | 'flyers';
  description: string;
  dimensions?: string;
}

export const OFFICIAL_SCHOOL_PHOTOS: SchoolPhotoItem[] = [
  {
    id: 'playground-turf',
    slotKey: 'playgroundTurf',
    originalFileName: 'FB_IMG_1788363448679.jpg',
    alternativeFileNames: ['playground-turf.jpg', 'playground.jpg', 'turf-park.jpg'],
    publicPath: '/images/FB_IMG_1788363448679.jpg',
    title: 'Covered Artificial Turf Play Park & Playground',
    category: 'facilities',
    description:
      'High-roof covered outdoor play park with lush artificial grass turf, multi-level playhouses, slide chutes, rocking horses, swings, and playful pencil mural.',
  },
  {
    id: 'computer-lab-main',
    slotKey: 'computerLabMain',
    originalFileName: 'FB_IMG_1788363411839.jpg',
    alternativeFileNames: ['computer-lab-1.jpg', 'computer-lab.jpg', 'ict-lab.jpg'],
    publicPath: '/images/FB_IMG_1788363411839.jpg',
    title: 'Dell Computer & ICT Workstation Laboratory',
    category: 'ict',
    description:
      'Students in Radiant white polo uniforms learning at individual Dell desktop workstations with guided digital instruction in an air-conditioned laboratory.',
  },
  {
    id: 'computer-lab-teacher',
    slotKey: 'computerLabTeacher',
    originalFileName: 'FB_IMG_1788363403682.jpg',
    alternativeFileNames: ['computer-lab-2.jpg', 'ict-instruction.jpg'],
    publicPath: '/images/FB_IMG_1788363403682.jpg',
    title: 'Guided Computer Skills & Workstation Mentorship',
    category: 'ict',
    description:
      'Pupils receiving attentive 1-on-1 computer guidance from teachers at modern Dell PC stations.',
  },
  {
    id: 'computer-lab-typing',
    slotKey: 'computerLabTyping',
    originalFileName: 'FB_IMG_1788363400746.jpg',
    alternativeFileNames: ['computer-lab-3.jpg', 'typing-practice.jpg'],
    publicPath: '/images/FB_IMG_1788363400746.jpg',
    title: 'Word Processing & Geometric Shapes Practice',
    category: 'ict',
    description:
      'Pupils practicing keyboard typing and learning geometric shapes (star, rectangle, circle) on Dell monitors.',
  },
  {
    id: 'computer-lab-student',
    slotKey: 'computerLabStudent',
    originalFileName: 'FB_IMG_1788363397502.jpg',
    alternativeFileNames: ['computer-lab-4.jpg', 'student-pc.jpg'],
    publicPath: '/images/FB_IMG_1788363397502.jpg',
    title: 'Individual Student Digital Learning',
    category: 'ict',
    description:
      'Pupil in school uniform attentively focused on shape identification and interactive digital tasks.',
  },
  {
    id: 'computer-lab-overview',
    slotKey: 'computerLabOverview',
    originalFileName: 'FB_IMG_1788363365642.jpg',
    alternativeFileNames: ['computer-lab-overview.jpg', 'ict-overview.jpg'],
    publicPath: '/images/FB_IMG_1788363365642.jpg',
    title: 'Computer Laboratory Learning Environment',
    category: 'ict',
    description:
      'Overview of the Dell desktop computer room with ergonomic student chairs, bright daylight curtains, and individual workstations.',
  },
  {
    id: 'classroom-reading',
    slotKey: 'classroomReading',
    originalFileName: 'Screenshot_20260902_173445_Facebook.jpg',
    alternativeFileNames: ['classroom-reading.jpg', 'cambridge-students.jpg', 'uniform-reading.jpg'],
    publicPath: '/images/Screenshot_20260902_173445_Facebook.jpg',
    title: 'Cambridge Primary Students in Uniform Reading',
    category: 'academics',
    description:
      'Students in Radiant uniform (white shirt, navy ties/bows, embroidered crest) studying Cambridge curriculum textbooks together around a classroom table with shape posters.',
  },
  {
    id: 'flyer-admissions-2026',
    slotKey: 'flyerAdmissions2026',
    originalFileName: 'FB_IMG_1788363414924.jpg',
    alternativeFileNames: ['flyer-admissions-2026.jpg', 'FB_IMG_1788363337428.jpg', 'flyer-2026.jpg'],
    publicPath: '/images/FB_IMG_1788363414924.jpg',
    title: 'Official Flyer: Academic Year 2026–2027 Admissions',
    category: 'flyers',
    description:
      'Admissions & Registrations Open on 13th July 2026 for Cambridge International Curriculum Year 1, 2, 3 featuring students with awards and textbooks.',
  },
  {
    id: 'flyer-commitment-primary',
    slotKey: 'flyerCommitmentPrimary',
    originalFileName: 'FB_IMG_1788363329825.jpg',
    alternativeFileNames: ['flyer-commitment.jpg', 'flyer-primary-uniform.jpg'],
    publicPath: '/images/FB_IMG_1788363329825.jpg',
    title: 'Official Flyer: Our Commitment (Primary Y1, Y2, Y3)',
    category: 'flyers',
    description:
      'Radiant International School commitment poster featuring smiling boy & girl in smart school uniform, office hours (9am - 3pm), and contact lines.',
  },
  {
    id: 'flyer-classes-tiers',
    slotKey: 'flyerClassesTiers',
    originalFileName: 'FB_IMG_1788363456519.jpg',
    alternativeFileNames: ['flyer-classes.jpg', 'flyer-creche-topclass.jpg'],
    publicPath: '/images/FB_IMG_1788363456519.jpg',
    title: 'Official Flyer: Admission Opens (Creche to Top Class)',
    category: 'flyers',
    description:
      'Official admissions flyer detailing Creche Class (18m-2y), Baby Class (3-4y), Middle Class (4-5y), and Top Class (5-6y) with real classroom photos.',
  },
  {
    id: 'flyer-physical-brochure',
    slotKey: 'flyerPhysicalBrochure',
    originalFileName: '20260902_171116.jpg',
    alternativeFileNames: ['physical-flyer.jpg', 'flyer-brochure.jpg'],
    publicPath: '/images/20260902_171116.jpg',
    title: 'Physical School Admissions Prospectus Flyer',
    category: 'flyers',
    description:
      'Physical printed flyer showing story circle red carpet, creative craft tables, and graduation ceremony photos.',
  },
  {
    id: 'flyer-cambridge-announcement',
    slotKey: 'flyerCambridgeAnnouncement',
    originalFileName: 'FB_IMG_1788363337428.jpg',
    alternativeFileNames: ['flyer-announcement.jpg'],
    publicPath: '/images/FB_IMG_1788363337428.jpg',
    title: 'Cambridge International Curriculum Admissions',
    category: 'flyers',
    description:
      'Detailed Cambridge curriculum accreditation notice with holistic development, values, character, and contact hotlines.',
  },
];

// In-Memory cache for uploaded Data URLs
const memoryCache: Record<string, string> = {};
const listeners: Set<() => void> = new Set();

const DB_NAME = 'radiant_school_media_db';
const STORE_NAME = 'photos';

function openDB(): Promise<IDBDatabase | null> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      resolve(null);
      return;
    }
    const request = window.indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve(null);
  });
}

// Load cached photos from IndexedDB on startup
export async function initializeMediaStore(): Promise<void> {
  try {
    const db = await openDB();
    if (!db) return;
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const getAllKeysReq = store.getAllKeys();
    getAllKeysReq.onsuccess = () => {
      const keys = getAllKeysReq.result;
      keys.forEach((key) => {
        const getReq = store.get(key);
        getReq.onsuccess = () => {
          if (getReq.result && typeof getReq.result === 'string') {
            memoryCache[String(key)] = getReq.result;
          }
        };
      });
      tx.oncomplete = () => notifyListeners();
    };
  } catch (err) {
    console.warn('Error reading from media store IndexedDB:', err);
  }
}

export function subscribeToMediaChanges(callback: () => void): () => void {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function notifyListeners() {
  listeners.forEach((cb) => {
    try {
      cb();
    } catch (e) {
      console.error(e);
    }
  });
}

// Store an uploaded file into memory and IndexedDB
export async function storePhotoFile(slotKey: string, file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async () => {
      const dataUrl = reader.result as string;
      memoryCache[slotKey] = dataUrl;
      notifyListeners();

      try {
        const db = await openDB();
        if (db) {
          const tx = db.transaction(STORE_NAME, 'readwrite');
          const store = tx.objectStore(STORE_NAME);
          store.put(dataUrl, slotKey);
        }
      } catch (e) {
        console.warn('Failed to persist photo in IndexedDB:', e);
      }

      resolve(dataUrl);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Match uploaded file to the most appropriate photo slot
export function matchFileToSlot(filename: string): SchoolPhotoItem | undefined {
  const lower = filename.toLowerCase();

  for (const item of OFFICIAL_SCHOOL_PHOTOS) {
    if (lower === item.originalFileName.toLowerCase()) return item;
    if (item.alternativeFileNames.some((alt) => lower.includes(alt.toLowerCase()))) return item;
  }

  // Fallback keyword matching
  if (lower.includes('play') || lower.includes('turf') || lower.includes('448679')) {
    return OFFICIAL_SCHOOL_PHOTOS.find((p) => p.slotKey === 'playgroundTurf');
  }
  if (lower.includes('read') || lower.includes('book') || lower.includes('screenshot') || lower.includes('uniform')) {
    return OFFICIAL_SCHOOL_PHOTOS.find((p) => p.slotKey === 'classroomReading');
  }
  if (lower.includes('1788363411839') || (lower.includes('lab') && lower.includes('1'))) {
    return OFFICIAL_SCHOOL_PHOTOS.find((p) => p.slotKey === 'computerLabMain');
  }
  if (lower.includes('1788363403682') || (lower.includes('lab') && lower.includes('2'))) {
    return OFFICIAL_SCHOOL_PHOTOS.find((p) => p.slotKey === 'computerLabTeacher');
  }
  if (lower.includes('1788363400746') || lower.includes('typing')) {
    return OFFICIAL_SCHOOL_PHOTOS.find((p) => p.slotKey === 'computerLabTyping');
  }
  if (lower.includes('1788363397502') || lower.includes('student')) {
    return OFFICIAL_SCHOOL_PHOTOS.find((p) => p.slotKey === 'computerLabStudent');
  }
  if (lower.includes('1788363365642') || lower.includes('overview')) {
    return OFFICIAL_SCHOOL_PHOTOS.find((p) => p.slotKey === 'computerLabOverview');
  }
  if (lower.includes('1788363414924') || lower.includes('2026') || lower.includes('july')) {
    return OFFICIAL_SCHOOL_PHOTOS.find((p) => p.slotKey === 'flyerAdmissions2026');
  }
  if (lower.includes('1788363329825') || lower.includes('commitment')) {
    return OFFICIAL_SCHOOL_PHOTOS.find((p) => p.slotKey === 'flyerCommitmentPrimary');
  }
  if (lower.includes('1788363456519') || lower.includes('creche') || lower.includes('baby')) {
    return OFFICIAL_SCHOOL_PHOTOS.find((p) => p.slotKey === 'flyerClassesTiers');
  }
  if (lower.includes('171116')) {
    return OFFICIAL_SCHOOL_PHOTOS.find((p) => p.slotKey === 'flyerPhysicalBrochure');
  }

  return undefined;
}

// Get the best available URL for a photo slot:
// 1) In-memory / IndexedDB uploaded Data URL
// 2) Static public path (/images/FB_IMG_...)
// 3) Fallback URL
export function getPhotoUrl(slotKey: string, fallbackUrl?: string): string {
  if (memoryCache[slotKey]) {
    return memoryCache[slotKey];
  }
  const item = OFFICIAL_SCHOOL_PHOTOS.find((p) => p.slotKey === slotKey);
  if (item) {
    return item.publicPath;
  }
  return fallbackUrl || '/radiant-crest.svg';
}

export function hasCustomPhoto(slotKey: string): boolean {
  return Boolean(memoryCache[slotKey]);
}

export function getCustomPhotoCount(): number {
  return Object.keys(memoryCache).length;
}

// Clear all uploaded photos
export async function clearAllCustomPhotos(): Promise<void> {
  Object.keys(memoryCache).forEach((k) => delete memoryCache[k]);
  notifyListeners();
  try {
    const db = await openDB();
    if (db) {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).clear();
    }
  } catch (e) {
    console.error(e);
  }
}
