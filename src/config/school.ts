export interface SchoolConfig {
  name: string;
  tagline: string;
  subTagline: string;
  establishedYear: string;
  contact: {
    phone: string;
    displayPhone: string;
    whatsapp: string;
    displayWhatsapp: string;
    email: string;
    admissionsEmail: string;
  };
  address: {
    street: string;
    area: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  timings: {
    schoolHours: string;
    officeHours: string;
    daycareHours: string;
    closedOn: string;
  };
  social: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
  location: {
    embedMapUrl: string;
    directionsUrl: string;
    landmarkNote: string;
  };
  stats: {
    yearsNurturing: string;
    happyFamilies: string;
    uniquePrograms: string;
    rating: string;
    reviewCount: string;
  };
  features: {
    safetyFirst: string[];
  };
}

export const schoolConfig: SchoolConfig = {
  name: "Glowing Sun Kids School",
  tagline: "Where Little Minds Shine Bright",
  subTagline: "A joyful and nurturing environment where children learn, explore, create, and grow with confidence.",
  establishedYear: "2018",
  contact: {
    phone: "+919876543210",
    displayPhone: "+91 98765 43210",
    whatsapp: "+919876543210",
    displayWhatsapp: "+91 98765 43210",
    email: "admissions@glowingsunschool.com",
    admissionsEmail: "enquiry@glowingsunschool.com",
  },
  address: {
    street: "Near Military Station, Main Shikargarh Road",
    area: "Shikargarh",
    landmark: "Opposite Army Area Road, Shikargarh",
    city: "Jodhpur",
    state: "Rajasthan",
    pincode: "342015",
    full: "Near Military Station, Main Shikargarh Road, Shikargarh, Jodhpur, Rajasthan 342015",
  },
  timings: {
    schoolHours: "Monday – Saturday: 8:30 AM – 1:30 PM",
    officeHours: "Monday – Saturday: 8:00 AM – 4:30 PM",
    daycareHours: "Monday – Saturday: 8:00 AM – 6:30 PM",
    closedOn: "Sundays & Public Holidays",
  },
  social: {
    instagram: "https://instagram.com/glowingsunschool",
    facebook: "https://facebook.com/glowingsunschool",
    youtube: "https://youtube.com/@glowingsunschool",
  },
  location: {
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114488.58309530467!2d72.95111978252277!3d26.270477174620577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c4eaa06cc37%3A0xa275b28d68019a71!2sJodhpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?q=Jodhpur+Rajasthan",
    landmarkNote: "Centrally located with easy road access, ample parent parking, and secure gated perimeter.",
  },
  stats: {
    yearsNurturing: "7+",
    happyFamilies: "500+",
    uniquePrograms: "5",
    rating: "4.9",
    reviewCount: "120+",
  },
  features: {
    safetyFirst: [
      "24/7 HD CCTV Surveillance across classrooms & play zones",
      "Child-proof rounded corner furniture & soft play flooring",
      "Full background-verified teachers & caregiving staff",
      "Certified First-Aid trained emergency responders",
      "Touchless temperature & sanitization checkpoints",
      "GPS-tracked school van transportation option",
    ],
  },
};
