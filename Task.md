    # MASTER PROMPT — Glowing Sun Kids School Website

## ROLE

You are a senior frontend engineer and UI/UX designer.

Build a production-quality, responsive school website in React based on the reference screenshots I have provided in this project.

The screenshots are reference material for:
- Layout
- Visual hierarchy
- Section ordering
- Spacing
- Typography scale
- Card design
- Navigation
- Hero composition
- Image treatment
- Buttons
- Decorative elements
- Responsive behavior
- Overall visual feel

DO NOT copy the original school's:
- Name
- Logo
- Text
- Images
- Contact details
- Brand identity
- Exact illustrations
- Copyrighted assets

The final website must be an ORIGINAL website for:

# GLOWING SUN KIDS SCHOOL

The reference screenshots are from another preschool website. Use them only as a design reference.

---

# 1. PRIMARY OBJECTIVE

Create a polished, modern, trustworthy and warm preschool website that would realistically be used by an Indian school to attract parents and generate admission enquiries.

The website should communicate:

- Safety
- Trust
- Child-friendly learning
- Professional teachers
- Fun
- Creativity
- Activity-based learning
- School facilities
- Strong parent communication

The site should feel like a real business website, NOT a generic AI-generated template.

Prioritize:
1. Visual quality
2. Mobile responsiveness
3. Fast loading
4. Clear information architecture
5. Admission conversion
6. Reusable React components
7. Maintainable code

---

# 2. TECH STACK

Use:

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React icons

Do NOT introduce unnecessary libraries.

Use clean, modular React components.

Avoid over-engineering.

---

# 3. DESIGN DIRECTION

The visual language should be:

- Warm
- Playful
- Premium
- Modern
- Friendly
- Child-oriented without looking childish
- Professional enough to give parents confidence

Use a soft preschool-inspired color palette.

Suggested base palette:

Primary:
#F4A261

Secondary:
#2A9D8F

Accent:
#E9C46A

Warm:
#FDF6EC

Dark text:
#263238

Muted text:
#667085

White:
#FFFFFF

You may slightly adjust these colors if doing so creates a closer visual relationship with the reference screenshots.

Do not make the site excessively colorful.

Use color strategically for:
- CTA buttons
- section accents
- icons
- decorative shapes
- cards

---

# 4. TYPOGRAPHY

Use a modern rounded font combination suitable for a preschool.

Prefer Google Fonts such as:

- Poppins
- Nunito
- Quicksand

Recommended:

Headings:
Nunito / Quicksand

Body:
Poppins

Use a clear hierarchy.

Example:

Hero heading:
clamp(2.5rem, 6vw, 5rem)

Section heading:
clamp(2rem, 4vw, 3.5rem)

Body:
16–18px

Do not make paragraphs unnecessarily large.

---

# 5. WEBSITE STRUCTURE

Create the following pages:

1. Home
2. About Us
3. Programs
4. Contact / Admissions

Also create reusable sections that can be reused across pages.

Navigation:

Home
About
Programs
Facilities
Gallery
Admissions
Contact

Primary CTA:

"Enquire Now"

On mobile:
Use a hamburger menu.

Navbar should become sticky after scrolling.

---

# 6. HOME PAGE

The homepage is the most important page.

Follow the visual structure and rhythm of the reference screenshots while making the design original.

## SECTION 1 — HERO

Create a large, visually impressive hero.

Content:

Small eyebrow:

"Welcome to Glowing Sun Kids School"

Main heading:

"Where Little Minds Shine Bright"

Supporting text:

"A joyful and nurturing environment where children learn, explore, create and grow with confidence."

CTA buttons:

"Explore Our School"

"Enquire for Admission"

Hero should contain a large school/children image.

Use:
- rounded image container
- decorative organic shapes
- subtle floating elements
- soft shadows

Do not overuse animations.

Hero should immediately communicate that this is a preschool/kids school.

---

# 7. TRUST / HIGHLIGHT STRIP

Immediately below hero create a horizontal trust section.

Example:

10+
Years of Learning

100+
Happy Families

10+
Learning Activities

Safe
Child-Friendly Environment

If actual numbers are unknown, DO NOT invent factual claims.

Instead use non-numeric statements such as:

Play-Based Learning
Experienced Educators
Safe Environment
Creative Activities

Make this section visually attractive.

---

# 8. ABOUT PREVIEW

Create a two-column section.

Left:
Large school image.

Right:

"About Glowing Sun Kids School"

Short description.

Example copy:

"At Glowing Sun Kids School, we believe every child deserves a joyful beginning. Our learning environment encourages curiosity, creativity and confidence through meaningful activities and caring guidance."

CTA:

"Know More About Us"

Use a small decorative label above the heading.

---

# 9. PROGRAMS SECTION

Create a visually strong Programs section.

Cards:

Play Group
Nursery
LKG
UKG

Each card should include:

- Icon/image
- Program name
- Short description
- Age/level if provided
- Learn More

Do not invent age ranges unless supplied by the school.

Cards should have:
- rounded corners
- subtle shadows
- hover animation
- image/icon area
- clear typography

---

# 10. WHY CHOOSE US

Create a visually engaging section.

Title:

"Why Parents Choose Glowing Sun"

Possible feature cards:

Play-Based Learning
Caring Educators
Creative Activities
Safe & Welcoming Environment
Individual Attention
Learning Through Exploration

Each feature:

- icon
- heading
- short explanation

Use a mixture of cards and whitespace rather than a repetitive grid if it looks better.

---

# 11. FACILITIES

Create a facilities section.

Possible items:

Smart Classrooms
Activity Areas
Play Area
Creative Learning Spaces
Safe Environment
School Transportation

IMPORTANT:

Only display facilities that are confirmed by the school.

For now structure the data so the owner can easily edit/remove facilities.

Create reusable:

FacilityCard

component.

---

# 12. SCHOOL LIFE / GALLERY

Create a visually attractive gallery.

Use a masonry-like or asymmetric grid.

Categories:

All
Classroom
Activities
Events
Celebrations
Campus

Use real school images when available.

For placeholder images during development, use high-quality placeholder images but structure the code so they can easily be replaced.

Do not use random unrelated stock images in the final production website.

Gallery interactions:

- hover effect
- image zoom
- optional lightbox
- keyboard accessible

---

# 13. ACTIVITIES SECTION

Create a section highlighting children's activities.

Examples:

Art & Craft
Storytelling
Music
Dance
Outdoor Play
Celebrations
Creative Activities

Use playful but subtle visuals.

---

# 14. PARENT CTA SECTION

Create a large conversion-focused section.

Heading:

"Give Your Child a Bright Beginning"

Text:

"Come visit Glowing Sun Kids School and discover a joyful environment where your child can learn, explore and grow."

Buttons:

"Book a School Visit"

"Enquire Now"

This should visually stand out.

---

# 15. TESTIMONIALS

Create a testimonials section.

IMPORTANT:

Do NOT fabricate real testimonials.

For development, use clearly marked placeholder content or structure the section using data that can later be replaced with genuine parent reviews.

Example:

"Parent testimonial will appear here."

Build the component so testimonials can easily be added later.

---

# 16. CONTACT SECTION

Include:

School name
Phone
WhatsApp
Email
Address
School timings
Google Maps

Create a clean contact layout.

Buttons:

Call Now
WhatsApp
Get Directions

WhatsApp button should use the school's actual number once provided.

Do not hardcode fake contact information.

---

# 17. FOOTER

Footer should contain:

Logo
Short school description

Quick Links:
Home
About
Programs
Gallery
Admissions
Contact

Contact:
Phone
Email
Address

Social:
Instagram
Facebook
YouTube

Only show social links when actual URLs are provided.

Add:

© 2026 Glowing Sun Kids School. All rights reserved.

---

# 18. ABOUT PAGE

Create a complete About page.

Sections:

Hero
Our Story
Our Philosophy
Mission
Vision
Learning Approach
Teachers/Educators
Facilities
Gallery
CTA

The page should feel visually consistent with the homepage.

Avoid excessive text.

Use images and visual storytelling.

---

# 19. PROGRAMS PAGE

Create a dedicated Programs page.

Each program should have:

- Hero image
- Program name
- Description
- Learning objectives
- Activities
- Suitable age/level if confirmed
- CTA

Structure content as reusable data.

Example:

const programs = [
  {
    title: "Play Group",
    description: "...",
    image: "...",
  }
]

This allows the owner to easily update the content later.

---

# 20. ADMISSIONS PAGE

This page should be conversion-focused.

Hero:

"Admissions Open"

Do not state a specific academic year unless confirmed.

Sections:

Admission Process

1. Enquire
2. Visit the School
3. Discuss the Program
4. Complete Admission

Admission enquiry form:

Parent Name
Child Name
Phone Number
Email
Program
Message

CTA:

"Submit Enquiry"

Since there is no backend initially, create a frontend form with validation and a clear success state.

Structure the code so it can later connect to an API.

---

# 21. CONTACT PAGE

Create:

Contact hero

Contact information

Map

Contact form

WhatsApp CTA

School address

School timings

FAQ

Example FAQs:

How can I enquire about admission?

Can I visit the school?

Which programs are available?

What are the school timings?

IMPORTANT:

Don't invent answers if the school hasn't provided them.

Use editable placeholder data.

---

# 22. GOOGLE MAPS

The school already has a Google Maps listing.

Create a reusable MapSection component.

Use:

- iframe/embed placeholder OR configurable map URL
- Get Directions CTA

Keep the location configurable from a single data/config file.

Example:

schoolConfig.location

Do NOT hardcode coordinates throughout the application.

---

# 23. WHATSAPP

Create a floating WhatsApp button.

Position:

bottom-right.

Desktop:
24px from edges.

Mobile:
16px from edges.

Use an accessible tooltip:

"Chat with us on WhatsApp"

The WhatsApp number must come from:

schoolConfig.contact.whatsapp

---

# 24. CONTENT CONFIGURATION

Create:

src/config/school.ts

Store all editable school information there.

Example:

export const schoolConfig = {
  name: "Glowing Sun Kids School",

  contact: {
    phone: "",
    whatsapp: "",
    email: "",
  },

  address: "",

  timings: "",

  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },

  location: {
    mapUrl: "",
  }
};

The website should consume this configuration rather than scattering school information throughout components.

---

# 25. COMPONENT ARCHITECTURE

Use a clean structure similar to:

src/

components/

  layout/
    Navbar.tsx
    Footer.tsx
    MobileMenu.tsx

  common/
    Button.tsx
    SectionHeading.tsx
    Container.tsx
    Image.tsx
    WhatsAppButton.tsx

  home/
    Hero.tsx
    TrustSection.tsx
    AboutPreview.tsx
    ProgramsPreview.tsx
    WhyChooseUs.tsx
    Facilities.tsx
    GalleryPreview.tsx
    Activities.tsx
    Testimonials.tsx
    AdmissionCTA.tsx

  programs/
    ProgramCard.tsx
    ProgramGrid.tsx

  gallery/
    GalleryGrid.tsx
    Lightbox.tsx

  contact/
    ContactForm.tsx
    MapSection.tsx

pages/

  Home.tsx
  About.tsx
  Programs.tsx
  Admissions.tsx
  Contact.tsx

config/

  school.ts
  navigation.ts

data/

  programs.ts
  facilities.ts
  gallery.ts
  activities.ts

---

# 26. RESPONSIVE DESIGN

This is extremely important.

The website must look excellent at:

320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px

Do not simply shrink the desktop design.

Design mobile layouts intentionally.

Mobile requirements:

- Hamburger navigation
- Large readable headings
- Touch-friendly buttons
- No horizontal overflow
- Proper image cropping
- Stacked sections
- Proper spacing
- Floating WhatsApp button
- Forms optimized for mobile

---

# 27. ANIMATIONS

Use subtle animations.

Preferred:

- fade-up on scroll
- image reveal
- card hover
- button hover
- gentle floating decorative shapes
- smooth page transitions

Avoid:

- excessive bouncing
- aggressive parallax
- constant movement
- distracting animations

Animations should support the design, not dominate it.

Use CSS/Tailwind animations where possible.

If using a library is genuinely useful, use Framer Motion, but don't introduce it just for trivial animations.

---

# 28. IMAGES

Images are extremely important.

The visual quality of this website depends heavily on photography.

Use image placeholders during development with clear comments indicating where actual school photos should be inserted.

Create a simple image data structure:

{
  src: "/images/gallery/classroom-1.webp",
  alt: "Children learning in classroom"
}

Every image must have meaningful alt text.

Use:

object-cover

and consistent aspect ratios.

Avoid distorted images.

---

# 29. SEO

Implement basic SEO.

Every page must have:

- unique title
- meta description
- proper H1
- semantic HTML
- Open Graph metadata
- favicon
- descriptive image alt text

Suggested homepage title:

"Glowing Sun Kids School | A Bright Beginning for Every Child"

Suggested description:

"Discover Glowing Sun Kids School, a nurturing and joyful learning environment focused on helping children learn, explore and grow."

Do not make unsupported claims such as "Best School in Jodhpur."

---

# 30. ACCESSIBILITY

Follow accessibility best practices.

Requirements:

- semantic HTML
- keyboard navigation
- visible focus states
- alt text
- aria-labels where necessary
- sufficient contrast
- accessible forms
- buttons must be actual buttons
- links must be actual links
- mobile menu must be keyboard accessible

---

# 31. PERFORMANCE

Optimize for performance.

Requirements:

- lazy load below-the-fold images
- use WebP/AVIF where appropriate
- avoid huge image files
- minimize unnecessary dependencies
- avoid excessive JavaScript
- use responsive images where practical
- avoid layout shifts
- keep animations lightweight

---

# 32. UX REQUIREMENTS

The primary user is a parent.

Every page should answer:

1. What is this school?
2. Where is it?
3. What does it offer?
4. Why should I consider it?
5. How do I contact them?
6. How do I enquire about admission?
7. Can I visit the school?

The primary conversion action is:

"Admission Enquiry"

Secondary:

"Call"
"WhatsApp"
"Get Directions"

---

# 33. REFERENCE SCREENSHOT ANALYSIS

Before coding:

Analyze all screenshots carefully.

Extract:

- Header height
- Navigation structure
- Hero layout
- Section ordering
- Content width
- Card dimensions
- Border radius
- Image ratios
- Typography hierarchy
- Button styling
- Decorative shapes
- Background transitions
- Spacing system
- Footer structure
- Mobile behavior if mobile screenshots are available

Use these observations to establish the design system.

DO NOT blindly copy the screenshots.

Translate their design principles into an original Glowing Sun Kids School website.

---

# 34. DESIGN QUALITY RULES

Avoid common AI-generated website problems:

DO NOT:

- use random gradients everywhere
- use excessive glassmorphism
- use generic SaaS dashboard styling
- use excessive rounded cards
- use huge unnecessary text
- use random emojis as icons
- use inconsistent spacing
- use unrelated stock imagery
- repeat the same card design everywhere
- create sections just to make the page longer
- add fake statistics
- fabricate testimonials
- fabricate school achievements
- fabricate certifications
- fabricate facilities

The website should look like a professionally designed local school website.

---

# 35. DATA SAFETY

If information is unknown:

DO NOT INVENT IT.

Use:

"Information coming soon"

or leave it configurable.

Especially do not invent:

- school history
- number of students
- years of operation
- teacher qualifications
- awards
- accreditation
- fees
- school timings
- admission dates
- parent testimonials
- facilities

---

# 36. FINAL POLISH

After implementation:

Run the application.

Check every route.

Check:

- desktop
- tablet
- mobile
- navigation
- forms
- buttons
- images
- gallery
- footer
- WhatsApp button
- map
- responsiveness

Fix:

- overflow
- spacing inconsistencies
- broken links
- layout shifts
- typography issues
- mobile menu problems
- image cropping
- accessibility problems

Do not stop after generating the first version.

Perform at least one visual refinement pass.

---

# 37. DELIVERABLE

The final project must be:

- fully runnable
- TypeScript
- componentized
- responsive
- visually polished
- easy to modify
- ready for deployment

Provide:

npm install

npm run dev

npm run build

commands.

The application must build without TypeScript errors.

---

# MOST IMPORTANT INSTRUCTION

The screenshots I supplied are the PRIMARY VISUAL REFERENCE.

Study them carefully before implementation.

Recreate the same level of visual quality, composition, spacing, section rhythm and user experience — but create an ORIGINAL design and content identity for:

# GLOWING SUN KIDS SCHOOL

Do not reproduce BunnyHop branding or copyrighted content.

Build something that looks like a real, premium website that I can present directly to the school owner.