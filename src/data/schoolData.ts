import {
  SchoolConfig,
  NavLinkItem,
  ValueProp,
  AcademicStage,
  CoCurricularActivity,
  CampusFacility,
  AdmissionsStep,
  NewsArticle,
  SchoolEvent,
  Testimonial,
  ParentResource,
  SchoolVideo,
} from '../types';

export const schoolImages = {
  crest: '/radiant-crest.svg',
  heroCampus: '/images/FB_IMG_1788363448679.jpg',
  classroom: '/images/Screenshot_20260902_173445_Facebook.jpg',
  ictLab: '/images/FB_IMG_1788363411839.jpg',
  scienceLab: '/images/FB_IMG_1788363403682.jpg',
  earlyYears: '/images/FB_IMG_1788363456519.jpg',
  sportsField: '/images/FB_IMG_1788363448679.jpg',
};

export const officialSchoolVideos: SchoolVideo[] = [
  {
    id: 'video-campus-playpark',
    title: 'Covered Turf Play Park & Campus Tour',
    category: 'Campus Facilities',
    url: 'https://www.facebook.com/share/v/1P5HqkDMYX/',
    description: 'Explore the modern Radiant campus grounds in Kololo, Juba, featuring our covered artificial turf playground, slides, rocking riders, and secure student recreation areas.',
    duration: 'Campus Video',
    thumbnail: '/images/FB_IMG_1788363448679.jpg',
    slotKey: 'playgroundTurf',
    isReel: false,
  },
  {
    id: 'video-ict-lab',
    title: 'Dell ICT Computer Lab & Digital Learning in Action',
    category: 'Technology & ICT',
    url: 'https://www.facebook.com/share/r/1BosLVEkYM/',
    description: 'Watch young pupils building digital literacy, typing mastery, interactive software skills, and logical thinking on individual Dell workstations with our dedicated ICT teacher.',
    duration: 'Facebook Reel',
    thumbnail: '/images/FB_IMG_1788363411839.jpg',
    slotKey: 'computerLabMain',
    isReel: true,
  },
  {
    id: 'video-classroom-life',
    title: 'Cambridge Primary & Early Childhood Classrooms',
    category: 'Cambridge Academics',
    url: 'https://www.facebook.com/share/v/18RARZHR6H/',
    description: 'A glimpse into the daily learning experience at Radiant: child-centered instruction, Cambridge textbooks, collaborative group desks, and foundational excellence where every child shines.',
    duration: 'Classroom Video',
    thumbnail: '/images/Screenshot_20260902_173445_Facebook.jpg',
    slotKey: 'classroomReading',
    isReel: false,
  },
];

export const schoolConfig: SchoolConfig = {
  name: 'Radiant International School',
  tagline: 'Inspiring Bright Minds. Shaping Future Leaders.',
  founded: '2018',
  accreditation: [
    'Cambridge Assessment International Education Registered Centre',
    'Cambridge International Primary Curriculum (Year 1, Year 2, Year 3)',
    'Ministry of General Education & Instruction Accredited',
    'Early Childhood Care & Development Centre of Excellence',
  ],
  phone: '+211 (0) 923 040 040',
  admissionsPhone: '+211 (0) 983 040 040',
  email: 'radiantinternationalschool2@gmail.com',
  admissionsEmail: 'radiantinternationalschool2@gmail.com',
  googleMapsUrl: 'https://maps.app.goo.gl/PRnnNNjLqXmWamB4A?g_st=aw',
  address: {
    street: 'Kololo Area, off Airport Road, next to Regency Hotel',
    district: 'Kololo Area',
    city: 'Juba',
    country: 'South Sudan',
    postalCode: 'VH4M+M74',
  },
  officeHours: 'Monday – Friday: 8:00 AM – 4:00 PM (Admissions & Administration Office: 9:00 AM – 4:00 PM)',
  socials: {
    facebook: 'https://www.facebook.com/share/v/1P5HqkDMYX/',
    mapLocation: 'https://maps.app.goo.gl/PRnnNNjLqXmWamB4A?g_st=aw',
    instagram: 'https://www.facebook.com/share/r/1BosLVEkYM/',
    linkedin: 'https://www.facebook.com/share/v/18RARZHR6H/',
    youtube: 'https://www.facebook.com/share/v/1P5HqkDMYX/',
    video1: 'https://www.facebook.com/share/v/1P5HqkDMYX/',
    video2: 'https://www.facebook.com/share/r/1BosLVEkYM/',
    video3: 'https://www.facebook.com/share/v/18RARZHR6H/',
  },
};

export const navLinks: NavLinkItem[] = [
  {
    label: 'About',
    href: '#about',
    description: 'Our heritage, leadership, and educational vision',
    children: [
      { label: 'Welcome from the School', href: '#about', description: 'Message from our leadership team' },
      { label: 'Vision, Mission & Values', href: '#why-radiant', description: 'Core principles guiding our student journey' },
      { label: 'Official Admissions Flyers', href: '#school-announcements', description: '2026/27 flyers, hours & contact lines' },
      { label: 'Accreditations & Standards', href: '#footer', description: 'Cambridge International & South Sudan approvals' },
    ],
  },
  {
    label: 'Academics',
    href: '#academics',
    description: 'Early Childhood & Cambridge Primary Curriculum (Year 1, 2, 3)',
    children: [
      { label: 'Creche & Baby Class (18m–4y)', href: '#academics', description: 'Sensory discovery, early phonics & gentle care' },
      { label: 'Middle & Top Class (4–6y)', href: '#academics', description: 'Early numeracy, school readiness & socialization' },
      { label: 'Cambridge Primary: Year 1', href: '#academics', description: 'Foundational literacy, mathematics & science' },
      { label: 'Cambridge Primary: Year 2', href: '#academics', description: 'Fluency, critical thinking & Dell ICT learning' },
      { label: 'Cambridge Primary: Year 3', href: '#academics', description: 'Advanced problem solving, inquiry & leadership' },
    ],
  },
  {
    label: 'School Videos',
    href: '#school-videos',
    badge: '3 Videos',
    description: 'Watch real campus tours, Dell ICT lab reels, and classroom videos',
  },
  {
    label: 'Admissions',
    href: '#admissions',
    badge: '2026/27 Open',
    description: 'Step-by-step admissions journey and campus tour bookings',
    children: [
      { label: 'Admissions Process', href: '#admissions', description: 'Straightforward pathway to joining Radiant' },
      { label: 'Book a Campus Tour', href: '#tour-modal', description: 'Personalized private tour of our Kololo campus' },
      { label: 'Admissions Requirements', href: '#admissions', description: 'Creche to Top Class & Primary Year 1 to 3' },
      { label: 'Apply Online', href: '#apply-modal', description: 'Start your confidential online application' },
    ],
  },
  {
    label: 'Student Life',
    href: '#student-life',
    description: 'Holistic growth, pastoral care, arts, and campus community',
    children: [
      { label: 'Pastoral Care & Wellbeing', href: '#student-life', description: 'Safe, supportive caring framework' },
      { label: 'Safe Play & Recreation', href: '#student-life', description: 'Covered artificial turf playground and active games' },
      { label: 'Beyond the Classroom', href: '#beyond-classroom', description: 'Music, arts, reading & play clubs' },
      { label: 'Playground & Recreation', href: '#campus', description: 'Covered artificial turf play park and activities' },
    ],
  },
  {
    label: 'Campus',
    href: '#campus',
    description: 'Modern facilities designed for joyful, focused learning',
    children: [
      { label: 'Dell ICT Computer Lab', href: '#campus', description: 'Individual computer workstations & digital literacy' },
      { label: 'Covered Artificial Turf Pitch', href: '#campus', description: 'All-weather sports, play equipment & slides' },
      { label: 'Cambridge Classrooms', href: '#campus', description: 'Bright, child-centered interactive classrooms' },
      { label: 'Real Photo Gallery', href: '#gallery', description: 'Explore authentic photos of our facilities' },
    ],
  },
  {
    label: 'News & Events',
    href: '#news-events',
    description: 'Latest school achievements, announcements, and key dates',
  },
  {
    label: 'Parents',
    href: '#parent-hub',
    description: 'School calendar, uniform guide, bus routes, and hours',
  },
  {
    label: 'Contact',
    href: '#contact',
    description: 'Get in touch with admissions, phone lines, and campus visits',
  },
];

export const valueProps: ValueProp[] = [
  {
    id: 'excellence',
    title: 'Excellence in Learning',
    tagline: 'Academic Rigor & Intellectual Curiosity',
    description:
      'We combine internationally acclaimed curricula (Cambridge & IB) with research-backed instructional methods that challenge students to think critically, communicate articulately, and master fundamental concepts.',
    icon: 'GraduationCap',
    highlights: ['Dual Cambridge & IB Continuum', '1:9 Teacher-to-Student Ratio', 'Individualized Academic Mentorship'],
  },
  {
    id: 'character',
    title: 'Character & Leadership',
    tagline: 'Integrity, Compassion & Ethical Action',
    description:
      'Character is at the heart of our philosophy. Students engage in ethical leadership training, debate societies, public service projects, and democratic student governance from an early age.',
    icon: 'ShieldCheck',
    highlights: ['Structured Leadership Diplomas', 'Duke of Edinburgh Program', 'Student-Led Service Projects'],
  },
  {
    id: 'wellbeing',
    title: 'Student Wellbeing & Safety',
    tagline: 'Nurturing Mind, Body & Emotional Health',
    description:
      'A safe, inclusive school where every child feels seen and valued. Our dedicated pastoral counselors, homeroom advisors, and full-time medical staff provide continuous, proactive care.',
    icon: 'HeartHandshake',
    highlights: ['Positive Psychology Framework', 'Full-time Certified Counselors', 'Dedicated Safeguarding Officers'],
  },
  {
    id: 'innovation',
    title: 'Innovation & Creativity',
    tagline: 'STEAM, Robotics & Design Thinking',
    description:
      'Preparing students for an evolving world with hands-on robotics labs, AI literacy modules, coding academies, ceramic studios, and black-box theater spaces.',
    icon: 'Lightbulb',
    highlights: ['Advanced Fabrication Labs', 'AI & Computational Thinking', 'State-of-the-Art Media Studios'],
  },
  {
    id: 'community',
    title: 'Inclusive Global Community',
    tagline: '45+ Nationalities, One Welcoming Family',
    description:
      'We celebrate diversity with deep cultural awareness and multilingual immersion. Our active Parent-Teacher Association fosters a warm, collaborative school community.',
    icon: 'Globe2',
    highlights: ['Bilingual Language Pathways', 'Active Parent Association (PTA)', 'International Cultural Festivals'],
  },
  {
    id: 'future-ready',
    title: 'Future-Ready Foundation',
    tagline: 'Dell ICT Lab & Cambridge Critical Thinking',
    description:
      'From our dedicated Dell ICT Computer Lab to inquiry-based Cambridge science and mathematics, pupils develop modern digital fluency, keyboard typing skills, and independent problem-solving abilities from their earliest years.',
    icon: 'Compass',
    highlights: ['Individual Dell Computer Workstations', 'Early Phonics & Cambridge Foundation', 'Character & Leadership Development'],
  },
];

export const academicStages: AcademicStage[] = [
  {
    id: 'early-years',
    name: 'Early Childhood Education (Creche – Top Class)',
    ageRange: '18 Months – 6 Years',
    gradeLevels: 'Creche, Baby Class, Middle Class & Top Class',
    curriculum: 'Early Childhood Development & School Readiness',
    tagline: 'Sensory discovery, early phonics, joyful exploration and social confidence.',
    description:
      'Our early years learning environment encompasses Creche Class (18m–2y), Baby Class (3–4y), Middle Class (4–5y), and Top Class (5–6y). With child-sized seating, plush carpeted play spaces, colorful learning toys, and loving certified teachers, little ones thrive through structured play, early phonemic reading, and foundational numeracy.',
    image: schoolImages.earlyYears,
    keyFeatures: [
      'Creche Class (18m–2y): Loving sensory care & motor development',
      'Baby Class (3–4y): Phonics sounds, colors, songs & social routines',
      'Middle Class (4–5y): Early letter writing, counting & nature inquiry',
      'Top Class (5–6y): Reading sentences, mental math & Cambridge transition',
    ],
    subjects: ['Early Phonics & Vocabulary', 'Number Recognition & Counting', 'Creative Fine Arts & Singing', 'Sensory Play & Motor Coordination', 'Character & Emotional Wellbeing'],
    outcomes: ['Confident communication and social cooperation', 'Curiosity and love for reading', 'Complete readiness for Cambridge Primary Year 1'],
    schedule: '8:00 AM – 1:00 PM (Monday – Friday)',
  },
  {
    id: 'primary-school',
    name: 'Cambridge International Primary (Year 1, Year 2 & Year 3)',
    ageRange: 'Ages 6 – 9 Years',
    gradeLevels: 'Year 1, Year 2 & Year 3',
    curriculum: 'Cambridge International Primary Curriculum',
    tagline: 'Rigorous international curriculum fostering critical thinking, literacy, and digital competence.',
    description:
      'Radiant International School follows the world-renowned Cambridge International Curriculum for Year 1, Year 2, and Year 3. Pupils study Cambridge English, Mathematics, and Science using official textbooks, supported by hands-on ICT computer lab training, physical recreation on our turf pitch, and expressive arts.',
    image: schoolImages.classroom,
    keyFeatures: [
      'Cambridge Primary English, Mathematics & Science frameworks',
      'Hands-on Dell ICT Computer Lab training (1-to-1 pupil workstations)',
      'Cambridge textbooks, workbooks & diagnostic progression tests',
      'Small, focused class sizes with attentive individualized mentoring',
    ],
    subjects: ['Cambridge English Language & Literacy', 'Cambridge Mathematics & Problem Solving', 'Cambridge Science & Environmental Inquiry', 'Computer & ICT Skills (Dell Workstations)', 'Expressive Visual Arts & Music', 'Physical Education & Turf Pitch Games'],
    outcomes: ['Strong reading comprehension, spelling, and expressive writing', 'Solid computational numeracy and analytical reasoning', 'Computer literacy, keyboard typing, and digital confidence'],
    schedule: '8:00 AM – 3:00 PM (Monday – Friday)',
  },
];

export const coCurricularActivities: CoCurricularActivity[] = [
  {
    id: 'football',
    title: 'Junior Football & Athletics',
    category: 'Sports & Athletics',
    ageGroup: 'Creche to Year 3',
    description: 'Covered artificial turf pitch with fundamental movement drills, ball control, agility games, and team cooperation.',
    image: schoolImages.sportsField,
    schedule: 'Tue, Thu | 3:00 PM – 4:00 PM',
    coachOrLead: 'Physical Education & Sports Instructor',
    tags: ['Turf Sports Pitch', 'Coordination & Fitness', 'Teamwork'],
  },
  {
    id: 'robotics',
    title: 'Dell ICT & Young Coders Club',
    category: 'STEM & Innovation',
    ageGroup: 'Year 1, Year 2 & Year 3',
    description: 'Students explore interactive digital educational software, keyboard typing mastery, geometric shapes, and early logical sequencing in the computer lab.',
    image: schoolImages.ictLab,
    schedule: 'Mon, Wed | 3:00 PM – 4:00 PM',
    coachOrLead: 'Computer & ICT Instructor',
    tags: ['Dell ICT Lab', 'Digital Literacy', 'Keyboard Practice'],
  },
  {
    id: 'early-play',
    title: 'Creative Arts, Music & Little Explorers',
    category: 'Performing & Visual Arts',
    ageGroup: 'Creche to Year 3',
    description: 'Expressive drawing, painting, choir, rhythm percussion, and sensory craft discovery led by dedicated creative arts teachers.',
    image: schoolImages.earlyYears,
    schedule: 'Mon, Wed | 2:30 PM – 3:30 PM',
    coachOrLead: 'Faculty of Creative Arts',
    tags: ['Art Studio', 'Music Rhythm', 'Creative Discovery'],
  },
  {
    id: 'mun',
    title: 'Storytelling, Phonics & Public Speaking Club',
    category: 'Leadership & Service',
    ageGroup: 'Top Class to Year 3',
    description: 'Pupils build confidence in reading aloud, reciting poems, storytelling, and expressive conversation in front of peers.',
    image: schoolImages.classroom,
    schedule: 'Thu | 3:00 PM – 4:00 PM',
    coachOrLead: 'Cambridge Literacy Lead',
    tags: ['Public Speaking', 'Confidence Building', 'Storytelling'],
  },
  {
    id: 'campus-life',
    title: 'Young Gardeners & Nature Discovery Club',
    category: 'Leadership & Service',
    ageGroup: 'All Classes (Creche to Year 3)',
    description: 'Fostering respect for the environment through campus plant care, sensory nature observation, and outdoor exploration.',
    image: schoolImages.heroCampus,
    schedule: 'Friday | 2:00 PM – 3:00 PM',
    coachOrLead: 'Early Years Lead',
    tags: ['Green Campus', 'Nature Exploration', 'Caring for Nature'],
  },
];

export const campusFacilities: CampusFacility[] = [
  {
    id: 'ict-lab',
    name: 'Modern Dell ICT Computer Laboratory',
    category: 'Academics & STEM',
    description: 'Equipped with individual Dell desktop workstations with ergonomic seating where Year 1, Year 2, and Year 3 pupils learn computer literacy, typing skills, digital drawing, and software fundamentals.',
    image: schoolImages.ictLab,
    features: ['1-to-1 pupil Dell computer workstation allocation', 'Filtered educational learning programs', 'Air-conditioned ergonomic learning space', 'Led by specialized ICT instructors'],
    capacity: 'Dedicated class ICT sessions',
    highlights: 'Essential part of the Cambridge Primary digital curriculum',
  },
  {
    id: 'classrooms',
    name: 'Collaborative Cambridge Classrooms',
    category: 'Academics & STEM',
    description: 'Bright, child-centered classrooms equipped with Cambridge textbooks, phonics wall charts, student storage, and collaborative group seating.',
    image: schoolImages.classroom,
    features: ['Low student-to-teacher ratio', 'Official Cambridge curriculum textbooks & charts', 'Dedicated reading nooks & manipulative math aids', 'Air conditioning & bright natural lighting'],
    capacity: 'Small focused class sizes',
    highlights: 'Promotes interactive dialogue and student-centered inquiry',
  },
  {
    id: 'early-years-garden',
    name: 'Early Years Discovery Rooms (Creche – Top Class)',
    category: 'Student Dining & Outdoor',
    description: 'Enclosed, vibrant classrooms with plush red carpet, brightly colored ergonomic study tables, building blocks, and sensory learning toys designed for safe exploratory play.',
    image: schoolImages.earlyYears,
    features: ['Safe plush carpeted learning area', 'Brightly colored child-sized study tables & chairs', 'Alphabet phonics & math manipulative toys', 'Enclosed 24/7 monitored safe perimeter'],
    capacity: 'Creche, Baby, Middle & Top Classes',
    highlights: 'Tailored for foundational milestones and early childhood joy',
  },
  {
    id: 'turf-playground',
    name: 'Covered Artificial Turf Play Park & Playground',
    category: 'Sports & Athletics',
    description: 'High-roof covered play park with lush artificial grass turf, multi-level play structures, slides, rocking horse riders, and swings for safe outdoor recreation in all weather.',
    image: schoolImages.sportsField,
    features: ['Soft clean all-weather artificial turf ground', 'High-roof overhead shade canopy against sun and rain', 'Child-safe playground equipment (slides & riders)', 'Caregiver and teacher supervision during recreation'],
    capacity: 'Whole School Recess & PE',
    highlights: 'Safe active physical play every single day',
  },
  {
    id: 'main-campus',
    name: 'Secure Campus & Administrative Centre',
    category: 'Academics & STEM',
    description: 'Purpose-built international school grounds in Kololo, Juba, featuring secure perimeter, spacious ventilated classrooms, modern administrative reception, and welcoming landscaped courtyard.',
    image: schoolImages.heroCampus,
    features: ['24/7 Security Gate & Monitored Perimeter', 'Bright natural daylight classrooms', 'Administration & Admissions Welcome Centre', 'Landscaped grounds & central assembly courtyard'],
    capacity: 'Full campus capacity',
    highlights: 'Located conveniently off Airport Road next to Regency Hotel, Juba',
  },
];

export const admissionsSteps: AdmissionsStep[] = [
  {
    step: 1,
    title: 'Enquire & Connect',
    subtitle: 'Submit an online enquiry or download our prospectus',
    description:
      'Begin your journey by requesting school information or submitting an online enquiry. Our Admissions team will reach out to address your family’s questions.',
    timeline: 'Day 1',
    requirements: ['Parent contact information', 'Child’s name and date of birth', 'Intended entry class (Creche – Year 3)'],
  },
  {
    step: 2,
    title: 'Visit Our Campus',
    subtitle: 'Book a personalized private tour or visit our Kololo campus',
    description:
      'Experience our vibrant school grounds in person. Tour our Dell ICT lab, covered artificial turf play park, and child-centered classrooms.',
    timeline: 'Week 1 – 2',
    requirements: ['Choice of weekday morning tour', 'Student attendance warmly welcomed'],
  },
  {
    step: 3,
    title: 'Submit Application',
    subtitle: 'Complete the digital application or visit the admissions office',
    description:
      'Submit the application form along with past reports (if transferring), birth certificate or passport copy, and vaccination record.',
    timeline: 'Week 2 – 3',
    requirements: ['Previous school report (if applicable)', 'Copy of child’s birth certificate or passport', 'Completed admission application form'],
  },
  {
    step: 4,
    title: 'Readiness Observation & Family Welcome',
    subtitle: 'Age-appropriate readiness evaluation & teacher meeting',
    description:
      'Early Years children participate in a friendly, gentle play-based observation. Cambridge Primary candidates (Year 1, 2, 3) complete a brief reading and numeracy readiness check.',
    timeline: 'Week 3 – 4',
    requirements: ['Play-based observation (Creche – Top Class)', 'Reading & math readiness check (Year 1–3)', 'Friendly meeting with class teacher'],
  },
  {
    step: 5,
    title: 'Enrollment Confirmation & Welcome',
    subtitle: 'Formal welcome pack and school uniform fitting',
    description:
      'Successful applicants receive their official welcome letter and enrollment package, including school calendar, uniform guidance, and orientation day details.',
    timeline: 'Within 3–5 business days',
    requirements: ['Signed enrollment agreement', 'Student medical and immunization records', 'Uniform and book collection details'],
  },
];

export const newsArticles: NewsArticle[] = [
  {
    id: 'admissions-2026-open',
    title: 'Admissions & Registrations Open on 13th July 2026 for Academic Year 2026–2027',
    category: 'Admissions Announcement',
    date: 'February 20, 2026',
    readTime: '3 min read',
    author: 'Admissions & Administration Office',
    summary: 'Radiant International School announces that admissions and registrations for Creche to Top Class and Cambridge Primary Year 1, 2, and 3 open on 13th July 2026.',
    image: '/images/FB_IMG_1788363414924.jpg',
    featured: true,
    fullContent: `Radiant International School is delighted to welcome prospective families for the 2026–2027 academic year. 

Admissions & registrations officially open on 13th July 2026. We follow the world-renowned Cambridge International Curriculum from Year 1, Year 2, and Year 3, providing a world-class foundation for lifelong learning.

Parents are warmly invited to visit our administration office in Kololo (off Airport Road, next to Regency Hotel) Monday to Friday from 9:00 AM to 4:00 PM to submit enrollment forms and tour our facilities.`,
  },
  {
    id: 'ict-lab-success',
    title: 'Pupils Flourish in the Modern Dell ICT Computer Lab with Digital Typing & Logic',
    category: 'Digital Literacy',
    date: 'January 28, 2026',
    readTime: '3 min read',
    author: 'Computer & ICT Department',
    summary: 'Year 1, 2, and 3 pupils showcase impressive progress in mouse mastery, keyboard typing, and educational software in our dedicated Dell computer lab.',
    image: '/images/FB_IMG_1788363411839.jpg',
    featured: false,
    fullContent: `At Radiant International School, digital confidence begins early. Pupils in Cambridge Primary Year 1, 2, and 3 participate in weekly practical sessions in our air-conditioned computer laboratory equipped with individual Dell desktop workstations.

Pupils learn touch typing, geometric shape drawing (stars, rectangles, circles), and basic problem solving, giving them the technological confidence required for 21st-century learning.`,
  },
  {
    id: 'turf-pitch-recreation',
    title: 'Covered Artificial Turf Play Park Enhances Daily Physical Health & Play',
    category: 'Campus Life',
    date: 'January 15, 2026',
    readTime: '2 min read',
    author: 'Physical Education & Wellbeing',
    summary: 'Our custom covered artificial turf playground gives children a safe, cushioned environment for athletic drills, slides, and joyful play in any weather.',
    image: '/images/FB_IMG_1788363448679.jpg',
    featured: false,
    fullContent: `Physical activity and play are essential for healthy cognitive and emotional development. 

Our covered artificial turf pitch provides a soft, clean surface shielded from intense sun and rain. From early childhood tricycle riders to Year 1-3 football agility drills, students enjoy daily active recreation under caring teacher supervision.`,
  },
  {
    id: 'reading-milestone',
    title: 'Cambridge Primary Learners Reach Key Reading & Literacy Milestones',
    category: 'Academic Achievement',
    date: 'December 18, 2025',
    readTime: '3 min read',
    author: 'Primary Academic Coordinator',
    summary: 'Year 1, 2, and 3 pupils celebrate outstanding progress in expressive reading, spelling, and sentence construction using official Cambridge learning texts.',
    image: '/images/Screenshot_20260902_173445_Facebook.jpg',
    featured: false,
    fullContent: `Our young scholars in Cambridge Primary Year 1, 2, and 3 have completed an inspiring term of reading comprehension, phonemic mastery, and creative storytelling.

Guided by passionate educators and Cambridge curriculum texts, pupils demonstrate remarkable fluency and enthusiasm for discovery.`,
  },
];

export const schoolEvents: SchoolEvent[] = [
  {
    id: 'event-1',
    title: 'Admissions Open Day & Campus Guided Tour',
    category: 'Open Day',
    date: 'March 14, 2026',
    time: '9:00 AM – 1:00 PM',
    location: 'Radiant Campus, Kololo Area (Next to Regency Hotel)',
    description: 'Prospective parents are invited to explore our Cambridge classrooms, Dell ICT lab, and covered turf play park, and meet our teachers.',
    targetAudience: 'Prospective Families (Creche to Top Class & Year 1, 2, 3)',
  },
  {
    id: 'event-2',
    title: 'Early Years Sensory Discovery & Play Morning',
    category: 'Academic',
    date: 'March 21, 2026',
    time: '9:30 AM – 11:30 AM',
    location: 'Early Childhood Discovery Rooms',
    description: 'A welcoming morning for toddlers and little ones (Ages 18 months to 5 years) to experience our plush carpeted learning centers, toys, and phonics songs.',
    targetAudience: 'Parents of Children Ages 18 Months – 5 Years',
  },
  {
    id: 'event-3',
    title: 'Cambridge Primary Sports & Fun Day on the Turf Pitch',
    category: 'Sports',
    date: 'April 4, 2026',
    time: '8:30 AM – 12:30 PM',
    location: 'Covered Artificial Turf Play Park',
    description: 'A vibrant morning of relay races, obstacle courses, tug-of-war, and teamwork games on our covered artificial turf pitch.',
    targetAudience: 'All School Pupils & Families',
  },
  {
    id: 'event-4',
    title: 'Cambridge Primary Literacy & Dell ICT Showcase',
    category: 'Academic',
    date: 'April 18, 2026',
    time: '10:00 AM – 1:00 PM',
    location: 'ICT Computer Lab & Primary Classrooms',
    description: 'Year 1, 2, and 3 pupils present their reading fluency, mathematics problem solving, and digital typing work to parents.',
    targetAudience: 'Cambridge Primary Families (Year 1, 2, 3)',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Dr. Helen & Mark Deng',
    role: 'Parents of Top Class & Year 2 Students',
    subRole: 'Enrolled since 2023',
    quote:
      'Choosing Radiant International School has been wonderful for our children. The teachers are so loving and attentive. Our son in Year 2 is thriving in the Cambridge curriculum and loves working on the Dell computers, while our daughter in Top Class has gained incredible confidence in phonics and reading.',
    avatar: '/radiant-crest.svg',
    yearJoined: '2 Years at Radiant',
    isPlaceholderNote: false,
  },
  {
    id: 't-2',
    name: 'Kavita & Rajesh Patel',
    role: 'Parents of Baby Class & Year 1 Learners',
    subRole: 'Enrolled since 2024',
    quote:
      'The warmth, safety, and care at Radiant are palpable the moment you walk through the gates in Kololo. The covered turf play park is so safe for recess, and the small class sizes allow each teacher to know our children personally.',
    avatar: '/radiant-crest.svg',
    yearJoined: 'Enrolled at Radiant',
    isPlaceholderNote: false,
  },
  {
    id: 't-3',
    name: 'Emmanuel & Grace Lado',
    role: 'Parents of Year 3 Student',
    subRole: 'Enrolled since 2022',
    quote:
      'Our son has been with Radiant since the early classes and is now in Year 3. His mathematics, English spelling, and computer typing skills have exceeded all our expectations. Radiant provides a solid foundation for lifelong learning.',
    avatar: '/radiant-crest.svg',
    yearJoined: 'Year 3 Parent',
    isPlaceholderNote: false,
  },
  {
    id: 't-4',
    name: 'Sarah & John Akot',
    role: 'Parents of Creche & Middle Class Learners',
    subRole: 'Enrolled since 2024',
    quote:
      'The plush carpeted classrooms, clean play areas, and patient caregivers make Radiant the ideal environment for young children. As working parents, we have complete peace of mind knowing our kids are safe, loved, and learning every day.',
    avatar: '/radiant-crest.svg',
    yearJoined: 'Early Childhood Parent',
    isPlaceholderNote: false,
  },
];

export const parentResources: ParentResource[] = [
  {
    title: 'Academic Calendar & Term Dates',
    category: 'Essential Info',
    description: '2026–2027 term schedules, registration start (13th July 2026), national holidays, and parent-teacher conference dates.',
    actionText: 'View Calendar',
    icon: 'Calendar',
    badge: 'Updated 2026/27',
  },
  {
    title: 'School Uniform & Dress Code',
    category: 'Campus Standards',
    description: 'Guidelines for Radiant school uniform (white shirt, navy tie/bow, embroidered crest), PE sports kit, and dress code.',
    actionText: 'Uniform Guide',
    icon: 'Shirt',
  },
  {
    title: 'Campus Hours & Office Visits',
    category: 'Logistics & Safety',
    description: 'School hours: Monday–Friday 8:00 AM – 4:00 PM. Admissions & Administration Office visits: 9:00 AM – 4:00 PM.',
    actionText: 'View Visiting Hours',
    icon: 'Clock',
    badge: '9 AM – 4 PM',
  },
  {
    title: 'Safe Campus Environment & Security',
    category: 'Health & Nutrition',
    description: 'Gated 24/7 security, controlled entry in Kololo Area next to Regency Hotel, child-safe playground, and hygiene standards.',
    actionText: 'Campus Safety',
    icon: 'Shield',
  },
  {
    title: 'Dell ICT Lab & Digital Readiness',
    category: 'Digital Services',
    description: 'Interactive educational software, typing fundamentals, and computer literacy guidelines for Cambridge Primary learners.',
    actionText: 'Learn About ICT',
    icon: 'Monitor',
    badge: 'Dell Workstations',
  },
  {
    title: 'Admissions Flyers & Contacts',
    category: 'Governance',
    description: 'Download admissions notice, view phone contacts (+211 923 040 040 / +211 983 040 040), and enrollment requirements.',
    actionText: 'View Flyers',
    icon: 'FileText',
  },
];

export const faqs = [
  {
    q: 'What classes and grades does Radiant International School offer?',
    a: 'Radiant International School offers Early Childhood Education consisting of Creche Class (18 months – 2 years), Baby Class (3 – 4 years), Middle Class (4 – 5 years), and Top Class (5 – 6 years), followed by the Cambridge International Primary Curriculum for Year 1, Year 2, and Year 3. The school focuses exclusively on these foundational early years and primary levels.',
  },
  {
    q: 'When do admissions and registrations open for the 2026–2027 academic year?',
    a: 'Official admissions and registrations open on 13th July 2026. Parents are encouraged to visit the school administration office located in Kololo Area, off Airport Road (next to Regency Hotel) between 9:00 AM and 4:00 PM, Monday through Friday.',
  },
  {
    q: 'What curriculum does Radiant International School follow?',
    a: 'We follow the world-renowned Cambridge International Curriculum for Year 1, Year 2, and Year 3, paired with a robust Early Childhood Development framework for Creche to Top Class. Pupils study English, Mathematics, Science, and practical ICT computer literacy on individual Dell workstations.',
  },
  {
    q: 'Where is the school located and how can parents reach the admissions office?',
    a: 'Radiant International School is conveniently situated in the Kololo Area, off Airport Road, next to the Regency Hotel in Juba, South Sudan. You can call our admissions lines directly at +211 (0) 923 040 040 or +211 (0) 983 040 040, or email radiantinternationalschool2@gmail.com.',
  },
  {
    q: 'What facilities are available for students at Radiant?',
    a: 'Our modern campus features a dedicated Dell ICT Computer Laboratory with 1-to-1 pupil workstations, bright collaborative classrooms with official Cambridge textbooks, plush carpeted Early Years discovery rooms, and a custom covered artificial turf play park equipped with slides and rocking horse riders for safe all-weather recreation.',
  },
  {
    q: 'What are the school and administrative office hours?',
    a: 'School operations run Monday through Friday from 8:00 AM to 4:00 PM. The Admissions and Administration Office welcomes visiting parents between 9:00 AM and 4:00 PM.',
  },
];
