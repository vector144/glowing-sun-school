import type { Program } from '../types';

export const programsData: Program[] = [
  {
    id: "play-group",
    title: "Play Group",
    badge: "Sun Sprouts",
    ageGroup: "1.5 – 2.5 Years",
    timings: "9:00 AM – 11:30 AM",
    themeColor: "#FFB703",
    accentBg: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-800",
    buttonClass: "bg-amber-500 hover:bg-amber-600 text-white",
    shortDesc: "Gentle, joyful introduction to school through sensory play, music, and nurturing social routines.",
    fullDesc: "Our Sun Sprouts Play Group is designed to make separation from parents effortless and joyful. Toddlers explore sensory bins, interactive music circles, rhymes, and foundational motor development in an affectionate, home-like setting.",
    image: "/images/real/ptm-toddler-booth.png",
    skills: ["Sensory Development", "Language & Babbles", "Social Interaction", "Gross Motor Skills"],
    activities: ["Finger Painting", "Sand & Water Play", "Nursery Rhymes & Puppets", "Soft Block Building"],
    keyHighlights: [
      "1:6 Teacher-Student Ratio for individual affection",
      "Diaper-friendly and patient potty-training support",
      "Soft-padded indoor play haven",
      "Daily parent photo & milestone updates"
    ]
  },
  {
    id: "nursery",
    title: "Nursery",
    badge: "Sun Rays",
    ageGroup: "2.5 – 3.5 Years",
    timings: "8:30 AM – 12:00 PM",
    themeColor: "#F4A261",
    accentBg: "bg-orange-50",
    borderColor: "border-orange-200",
    textColor: "text-orange-800",
    buttonClass: "bg-orange-500 hover:bg-orange-600 text-white",
    shortDesc: "Igniting curiosity through phonics, storytelling, number discovery, and joyful peer activities.",
    fullDesc: "In our Sun Rays Nursery program, children transition into active inquiry. They develop phonemic awareness, vocabulary, counting habits, and fine motor coordination through collaborative role-play, craft projects, and joyful discoveries.",
    image: "/images/real/student-artwork-reception.jpg",
    skills: ["Phonics & Vocabulary", "Number Readiness", "Creative Expression", "Emotional Self-Regulation"],
    activities: ["Clay Modeling & Craft", "Theme Story Circles", "Nature Walks in Campus Garden", "Rhythm & Percussion"],
    keyHighlights: [
      "Montessori-inspired hands-on math & language kits",
      "Confidence building through Show & Tell",
      "Healthy snack time & self-help hygiene routines",
      "Celebration of cultural festivals and color days"
    ]
  },
  {
    id: "junior-kg",
    title: "Junior KG (LKG)",
    badge: "Sunbeams",
    ageGroup: "3.5 – 4.5 Years",
    timings: "8:30 AM – 12:30 PM",
    themeColor: "#2A9D8F",
    accentBg: "bg-teal-50",
    borderColor: "border-teal-200",
    textColor: "text-teal-800",
    buttonClass: "bg-teal-600 hover:bg-teal-700 text-white",
    shortDesc: "Foundational reading, writing, mathematical concepts, and environmental awareness with deep curiosity.",
    fullDesc: "Sunbeams step into structured learning without losing the element of fun. We introduce blended phonics, early sentence construction, spatial reasoning, patterns, and interactive STEM exploration designed for eager young minds.",
    image: "/images/real/classroom-learning-chart.jpg",
    skills: ["Reading & Sight Words", "Number Patterns & Logic", "Scientific Curiosity", "Critical Thinking"],
    activities: ["Mini Science Experiments", "Early Cursive Pre-Writing", "Board Games & Puzzles", "Dramatics & Public Speaking"],
    keyHighlights: [
      "Structured Jolly Phonics reading pathway",
      "Interactive smart-board visual learning modules",
      "Team sports, balance beam, and yoga for kids",
      "Quarterly parent-teacher comprehensive reviews"
    ]
  },
  {
    id: "senior-kg",
    title: "Senior KG (UKG)",
    badge: "Rising Stars",
    ageGroup: "4.5 – 5.5 Years",
    timings: "8:30 AM – 1:00 PM",
    themeColor: "#E76F51",
    accentBg: "bg-rose-50",
    borderColor: "border-rose-200",
    textColor: "text-rose-800",
    buttonClass: "bg-rose-500 hover:bg-rose-600 text-white",
    shortDesc: "Comprehensive primary school readiness ensuring confident reading, arithmetic, and problem solving.",
    fullDesc: "Our Rising Stars program builds the bridge to primary school success. Graduating students achieve fluent independent reading, mental addition/subtraction, writing expression, logical deductions, and strong social leadership.",
    image: "/images/real/graduation-cap-ceremony.jpg",
    skills: ["Fluent Reading & Writing", "Basic Arithmetic & Word Math", "Leadership & Teamwork", "School Readiness"],
    activities: ["Junior Coding & Sequencing", "Creative Story Writing", "Science Lab Discovery", "Graduation Cap Project"],
    keyHighlights: [
      "Smooth admission readiness for top primary schools",
      "Confidence-focused stage performances & debates",
      "Inquiry-based Environmental Studies projects",
      "Formal Graduation Day with personalized portfolio"
    ]
  },
  {
    id: "daycare",
    title: "Daycare & After School",
    badge: "Sun Care",
    ageGroup: "1.5 – 8 Years",
    timings: "8:00 AM – 6:30 PM",
    themeColor: "#3A86FF",
    accentBg: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-800",
    buttonClass: "bg-blue-600 hover:bg-blue-700 text-white",
    shortDesc: "Safe, nurturing extended care with warm nutritious meals, supervised nap times, and enrichment activities.",
    fullDesc: "Designed specifically for working parents who need absolute peace of mind. Our extended Daycare offers warm home-style meals, hygienic sleeping cots, homework assistance for older children, and delightful hobbies like dance, robotics, and drawing.",
    image: "/images/real/first-day-welcome-parents.jpg",
    skills: ["Emotional Security", "Self-Reliance", "Social Bonding", "Enrichment Hobbies"],
    activities: ["Story Nook Reading", "Board Games & Legos", "Free Movement & Dance", "Guided Evening Homework"],
    keyHighlights: [
      "Freshly prepared hot vegetarian meals & healthy snacks",
      "Clean, sanitized nap room with individual bedding",
      "Full live CCTV parent check-in access upon request",
      "Flexible hourly, half-day, and full-day packages"
    ]
  }
];
