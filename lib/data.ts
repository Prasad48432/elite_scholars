// Country data
export interface CountryData {
  id: string;
  name: string;
  flag: string;
  description: string;
  bachelorPrograms: ProgramInfo[];
  masterPrograms: ProgramInfo[];
  topColleges: College[];
  visaProcess: VisaInfo;
  tuitionFees: TuitionInfo;
  costOfLiving: CostOfLivingInfo;
}

export interface ProgramInfo {
  title: string;
  description: string;
  duration: string;
  averageFees: string;
  popularFields: string[];
  requirements: string[];
}

export interface College {
  name: string;
  location: string;
  ranking: string;
  website: string;
  image: string;
  description: string;
  popularPrograms: string[];
}

export interface VisaInfo {
  type: string;
  processingTime: string;
  requirements: string[];
  applicationProcess: string[];
  fees: string;
  workPermit: string;
}

export interface TuitionInfo {
  undergraduate: string;
  postgraduate: string;
  phd: string;
  scholarships: Scholarship[];
}

export interface Scholarship {
  name: string;
  amount: string;
  eligibility: string;
  website: string;
}

export interface CostOfLivingInfo {
  accommodation: string;
  food: string;
  transportation: string;
  utilities: string;
  entertainment: string;
  total: string;
  additionalNotes: string;
}

// Exam data
export interface ExamData {
  id: string;
  name: string;
  fullName: string;
  icon: string;
  description: string;
  sections: ExamSection[];
  scoring: string;
  duration: string;
  fee: string;
  validityPeriod: string;
  acceptedCountries: string[];
  preparationTips: string[];
  studyResources: StudyResource[];
}

export interface ExamSection {
  name: string;
  description: string;
  questionTypes: string[];
  tips: string[];
}

export interface StudyResource {
  type: string;
  name: string;
  description: string;
  link?: string;
}

// Country data instances
export const countries: CountryData[] = [
  {
    id: "us",
    name: "United States",
    flag: "🇺🇸",
    description: "The United States offers a world-renowned education system with diverse programs and opportunities for international students.",
    bachelorPrograms: [
      {
        title: "Bachelor's Degree Programs",
        description: "Bachelor's degrees in the US typically take 4 years to complete and offer a wide range of majors and specializations.",
        duration: "4 years",
        averageFees: "$20,000 - $45,000 per year",
        popularFields: ["Business", "Computer Science", "Engineering", "Health Sciences", "Social Sciences"],
        requirements: [
          "High school diploma or equivalent",
          "SAT or ACT scores",
          "English proficiency (TOEFL or IELTS)",
          "Letters of recommendation",
          "Statement of purpose"
        ]
      }
    ],
    masterPrograms: [
      {
        title: "Master's Degree Programs",
        description: "Master's programs in the US typically take 1-2 years and offer specialized knowledge in various fields.",
        duration: "1-2 years",
        averageFees: "$25,000 - $60,000 per year",
        popularFields: ["MBA", "Computer Science", "Engineering", "Data Science", "Public Health"],
        requirements: [
          "Bachelor's degree",
          "GRE or GMAT scores",
          "English proficiency (TOEFL or IELTS)",
          "Letters of recommendation",
          "Statement of purpose",
          "Resume/CV"
        ]
      }
    ],
    topColleges: [
      {
        name: "Harvard University",
        location: "Cambridge, Massachusetts",
        ranking: "#2 QS World University Rankings",
        website: "https://www.harvard.edu/",
        image: "https://images.pexels.com/photos/2350924/pexels-photo-2350924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Founded in 1636, Harvard is one of the most prestigious universities in the world, known for excellence in research and teaching.",
        popularPrograms: ["Business", "Law", "Medicine", "Computer Science", "Economics"]
      },
      {
        name: "Stanford University",
        location: "Stanford, California",
        ranking: "#3 QS World University Rankings",
        website: "https://www.stanford.edu/",
        image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Known for its entrepreneurial spirit and proximity to Silicon Valley, Stanford excels in technology, engineering, and business.",
        popularPrograms: ["Computer Science", "Engineering", "Business", "Environmental Sciences", "Psychology"]
      },
      {
        name: "MIT",
        location: "Cambridge, Massachusetts",
        ranking: "#1 QS World University Rankings",
        website: "https://www.mit.edu/",
        image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "MIT is a world-leading institution focused on science and technology education and research.",
        popularPrograms: ["Computer Science", "Engineering", "Physics", "Data Science", "Economics"]
      }
    ],
    visaProcess: {
      type: "F-1 Student Visa",
      processingTime: "2-3 months",
      requirements: [
        "Form I-20 from your university",
        "Proof of financial support",
        "Valid passport",
        "Visa application fee payment",
        "SEVIS fee payment",
        "Non-immigrant intent proof"
      ],
      applicationProcess: [
        "Obtain I-20 from your university",
        "Pay SEVIS fee",
        "Complete DS-160 form",
        "Schedule visa interview",
        "Attend visa interview",
        "Receive visa decision"
      ],
      fees: "Application fee: $160, SEVIS fee: $350",
      workPermit: "On-campus: 20 hours/week during semester, 40 hours/week during breaks. OPT: 12 months post-graduation"
    },
    tuitionFees: {
      undergraduate: "$20,000 - $45,000 per year",
      postgraduate: "$25,000 - $60,000 per year",
      phd: "Often fully funded with stipend",
      scholarships: [
        {
          name: "Fulbright Foreign Student Program",
          amount: "Full tuition and living expenses",
          eligibility: "Outstanding academic achievement and leadership potential",
          website: "https://foreign.fulbrightonline.org/"
        },
        {
          name: "Hubert Humphrey Fellowship Program",
          amount: "Full funding for one year",
          eligibility: "Young and mid-career professionals",
          website: "https://www.humphreyfellowship.org/"
        }
      ]
    },
    costOfLiving: {
      accommodation: "$600 - $1,500 per month",
      food: "$300 - $600 per month",
      transportation: "$50 - $100 per month",
      utilities: "$100 - $200 per month",
      entertainment: "$150 - $300 per month",
      total: "$1,200 - $2,700 per month",
      additionalNotes: "Costs vary significantly based on location. Cities like New York, San Francisco, and Boston are more expensive than smaller towns."
    }
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    description: "The UK offers prestigious educational institutions with shorter program durations compared to many other countries.",
    bachelorPrograms: [
      {
        title: "Bachelor's Degree Programs",
        description: "UK bachelor's degrees typically take 3 years to complete (4 years in Scotland) and focus on specialized study from the beginning.",
        duration: "3 years (4 in Scotland)",
        averageFees: "£10,000 - £25,000 per year",
        popularFields: ["Business", "Law", "Engineering", "Medicine", "Arts and Humanities"],
        requirements: [
          "A-levels or equivalent",
          "English proficiency (IELTS or equivalent)",
          "Personal statement",
          "Reference letters"
        ]
      }
    ],
    masterPrograms: [
      {
        title: "Master's Degree Programs",
        description: "UK master's programs are typically one year in duration and offer intensive specialized study.",
        duration: "1 year",
        averageFees: "£15,000 - £35,000 per year",
        popularFields: ["Business", "Finance", "International Relations", "Computer Science", "Engineering"],
        requirements: [
          "Bachelor's degree (typically 2:1 or higher)",
          "English proficiency (IELTS or equivalent)",
          "Personal statement",
          "Reference letters",
          "CV/Resume"
        ]
      }
    ],
    topColleges: [
      {
        name: "University of Oxford",
        location: "Oxford, England",
        ranking: "#4 QS World University Rankings",
        website: "https://www.ox.ac.uk/",
        image: "https://images.pexels.com/photos/28448938/pexels-photo-28448938/free-photo-of-historic-oxford-college-building-with-garden-path.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Founded in 1096, Oxford is the oldest university in the English-speaking world with a rich history of academic excellence.",
        popularPrograms: ["Philosophy, Politics and Economics", "Law", "Medicine", "English Literature", "Physics"]
      },
      {
        name: "University of Cambridge",
        location: "Cambridge, England",
        ranking: "#3 QS World University Rankings",
        website: "https://www.cam.ac.uk/",
        image: "https://images.pexels.com/photos/31771446/pexels-photo-31771446/free-photo-of-historic-college-building-in-cambridge-uk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Founded in 1209, Cambridge is renowned for its excellence in research and teaching across a wide range of disciplines.",
        popularPrograms: ["Mathematics", "Natural Sciences", "Engineering", "Computer Science", "Economics"]
      },
      {
        name: "Imperial College London",
        location: "London, England",
        ranking: "#6 QS World University Rankings",
        website: "https://www.imperial.ac.uk/",
        image: "https://images.pexels.com/photos/460680/pexels-photo-460680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Specializing in science, engineering, medicine, and business, Imperial College is known for its innovation and research impact.",
        popularPrograms: ["Engineering", "Medicine", "Computing", "Business", "Natural Sciences"]
      }
    ],
    visaProcess: {
      type: "Student Visa (Tier 4)",
      processingTime: "3-4 weeks",
      requirements: [
        "Confirmation of Acceptance for Studies (CAS) from your university",
        "Proof of financial support",
        "Valid passport",
        "Tuberculosis test (for some countries)",
        "Immigration Health Surcharge payment"
      ],
      applicationProcess: [
        "Obtain CAS from your university",
        "Complete online application",
        "Pay visa fee and Immigration Health Surcharge",
        "Book and attend biometric appointment",
        "Submit supporting documents",
        "Receive visa decision"
      ],
      fees: "Application fee: £348, Immigration Health Surcharge: £470 per year",
      workPermit: "20 hours/week during term time, full-time during holidays. Post-Study Work Visa: 2 years after graduation"
    },
    tuitionFees: {
      undergraduate: "£10,000 - £25,000 per year",
      postgraduate: "£15,000 - £35,000 per year",
      phd: "£15,000 - £30,000 per year (often with funding opportunities)",
      scholarships: [
        {
          name: "Chevening Scholarships",
          amount: "Full tuition, living expenses, and flights",
          eligibility: "Outstanding academic achievement and leadership potential",
          website: "https://www.chevening.org/"
        },
        {
          name: "Commonwealth Scholarships",
          amount: "Full tuition, living expenses, and travel",
          eligibility: "Citizens of Commonwealth countries with strong academic background",
          website: "https://cscuk.fcdo.gov.uk/scholarships/"
        }
      ]
    },
    costOfLiving: {
      accommodation: "£400 - £1,500 per month",
      food: "£200 - £400 per month",
      transportation: "£50 - £150 per month",
      utilities: "£90 - £200 per month",
      entertainment: "£100 - £250 per month",
      total: "£840 - £2,500 per month",
      additionalNotes: "London is significantly more expensive than other UK cities. Student accommodation is generally more affordable than private rentals."
    }
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    description: "Canada offers high-quality education with affordable tuition fees compared to the US and UK, along with excellent post-graduate work opportunities.",
    bachelorPrograms: [
      {
        title: "Bachelor's Degree Programs",
        description: "Canadian bachelor's degrees typically take 3-4 years to complete and offer a balance between specialized study and general education.",
        duration: "3-4 years",
        averageFees: "CAD 20,000 - CAD 30,000 per year",
        popularFields: ["Business", "Engineering", "Computer Science", "Environmental Studies", "Health Sciences"],
        requirements: [
          "High school diploma or equivalent",
          "English/French proficiency (IELTS, TOEFL, DALF, etc.)",
          "Letters of recommendation",
          "Statement of purpose"
        ]
      }
    ],
    masterPrograms: [
      {
        title: "Master's Degree Programs",
        description: "Canadian master's programs typically take 1-2 years and offer research and professional development opportunities.",
        duration: "1-2 years",
        averageFees: "CAD 15,000 - CAD 35,000 per year",
        popularFields: ["Business Administration", "Engineering", "Computer Science", "Environmental Sciences", "Public Health"],
        requirements: [
          "Bachelor's degree",
          "English/French proficiency (IELTS, TOEFL, DALF, etc.)",
          "GRE/GMAT (for some programs)",
          "Letters of recommendation",
          "Statement of purpose",
          "CV/Resume"
        ]
      }
    ],
    topColleges: [
      {
        name: "University of Toronto",
        location: "Toronto, Ontario",
        ranking: "#34 QS World University Rankings",
        website: "https://www.utoronto.ca/",
        image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Founded in 1827, the University of Toronto is known for its innovation, research impact, and diverse student body.",
        popularPrograms: ["Commerce", "Computer Science", "Engineering", "Life Sciences", "Arts and Humanities"]
      },
      {
        name: "McGill University",
        location: "Montreal, Quebec",
        ranking: "#31 QS World University Rankings",
        website: "https://www.mcgill.ca/",
        image: "https://images.pexels.com/photos/5538835/pexels-photo-5538835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "McGill University is one of Canada's oldest institutions, known for its medical school and research in various fields.",
        popularPrograms: ["Medicine", "Law", "Management", "Engineering", "Arts"]
      },
      {
        name: "University of British Columbia",
        location: "Vancouver, British Columbia",
        ranking: "#47 QS World University Rankings",
        website: "https://www.ubc.ca/",
        image: "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "UBC is a global center for research and teaching with a strong focus on sustainability and innovation.",
        popularPrograms: ["Business", "Environmental Sciences", "Computer Science", "Life Sciences", "Engineering"]
      }
    ],
    visaProcess: {
      type: "Study Permit",
      processingTime: "4-12 weeks",
      requirements: [
        "Letter of Acceptance from a Designated Learning Institution (DLI)",
        "Proof of financial support",
        "Valid passport",
        "Statement of purpose",
        "Biometrics"
      ],
      applicationProcess: [
        "Obtain acceptance letter from a DLI",
        "Create an online account",
        "Complete application",
        "Pay application and biometric fees",
        "Submit biometrics if required",
        "Submit supporting documents",
        "Receive visa decision"
      ],
      fees: "Application fee: CAD 150, Biometrics: CAD 85",
      workPermit: "20 hours/week during semester, full-time during breaks. Post-Graduation Work Permit: up to 3 years after graduation"
    },
    tuitionFees: {
      undergraduate: "CAD 20,000 - CAD 30,000 per year",
      postgraduate: "CAD 15,000 - CAD 35,000 per year",
      phd: "CAD 10,000 - CAD 20,000 per year (often with funding)",
      scholarships: [
        {
          name: "Vanier Canada Graduate Scholarships",
          amount: "CAD 50,000 per year for three years",
          eligibility: "Outstanding doctoral students with leadership skills",
          website: "https://vanier.gc.ca/"
        },
        {
          name: "Trudeau Foundation Scholarships",
          amount: "Up to CAD 60,000 per year",
          eligibility: "Doctoral students in humanities and social sciences",
          website: "https://www.trudeaufoundation.ca/"
        }
      ]
    },
    costOfLiving: {
      accommodation: "CAD 600 - CAD 1,500 per month",
      food: "CAD 300 - CAD 500 per month",
      transportation: "CAD 80 - CAD 150 per month",
      utilities: "CAD 100 - CAD 200 per month",
      entertainment: "CAD 100 - CAD 250 per month",
      total: "CAD 1,200 - CAD 2,600 per month",
      additionalNotes: "Vancouver and Toronto are the most expensive cities, while cities in provinces like Manitoba and Quebec tend to be more affordable."
    }
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    description: "Australia provides a high standard of living, quality education, and generous post-study work opportunities for international students.",
    bachelorPrograms: [
      {
        title: "Bachelor's Degree Programs",
        description: "Australian bachelor's degrees typically take 3 years to complete, with some professional programs taking longer.",
        duration: "3-4 years",
        averageFees: "AUD 20,000 - AUD 45,000 per year",
        popularFields: ["Business", "Engineering", "Health Sciences", "Information Technology", "Environmental Sciences"],
        requirements: [
          "High school certificate or equivalent",
          "English proficiency (IELTS, TOEFL, etc.)",
          "Statement of purpose",
          "Academic transcripts"
        ]
      }
    ],
    masterPrograms: [
      {
        title: "Master's Degree Programs",
        description: "Australian master's programs typically take 1-2 years and offer specialized professional training or research opportunities.",
        duration: "1-2 years",
        averageFees: "AUD 22,000 - AUD 50,000 per year",
        popularFields: ["Business Administration", "Engineering", "Information Technology", "Education", "Health Sciences"],
        requirements: [
          "Bachelor's degree",
          "English proficiency (IELTS, TOEFL, etc.)",
          "Statement of purpose",
          "CV/Resume",
          "Letters of recommendation"
        ]
      }
    ],
    topColleges: [
      {
        name: "University of Melbourne",
        location: "Melbourne, Victoria",
        ranking: "#33 QS World University Rankings",
        website: "https://www.unimelb.edu.au/",
        image: "https://images.pexels.com/photos/1167021/pexels-photo-1167021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Founded in 1853, the University of Melbourne is Australia's second-oldest university and a leading research institution.",
        popularPrograms: ["Medicine", "Law", "Engineering", "Business", "Arts"]
      },
      {
        name: "Australian National University",
        location: "Canberra, Australian Capital Territory",
        ranking: "#30 QS World University Rankings",
        website: "https://www.anu.edu.au/",
        image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "ANU is Australia's only national university, with a strong focus on research and policy engagement.",
        popularPrograms: ["Politics & International Relations", "Science", "Law", "Computing", "Business"]
      },
      {
        name: "University of Sydney",
        location: "Sydney, New South Wales",
        ranking: "#38 QS World University Rankings",
        website: "https://www.sydney.edu.au/",
        image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Australia's first university, founded in 1850, with a reputation for excellence across a broad range of disciplines.",
        popularPrograms: ["Medicine", "Engineering", "Business", "Law", "Arts and Social Sciences"]
      }
    ],
    visaProcess: {
      type: "Student Visa (Subclass 500)",
      processingTime: "4-6 weeks",
      requirements: [
        "Confirmation of Enrollment (CoE) from your institution",
        "Genuine Temporary Entrant (GTE) statement",
        "Proof of financial capacity",
        "English proficiency proof",
        "Health insurance (OSHC)",
        "Health examination"
      ],
      applicationProcess: [
        "Obtain CoE from your institution",
        "Create ImmiAccount and complete application",
        "Pay visa fee",
        "Submit supporting documents",
        "Undergo health examination if required",
        "Receive visa decision"
      ],
      fees: "Base application fee: AUD 620",
      workPermit: "40 hours per fortnight during session, unlimited during breaks. Post-Study Work Visa: 2-4 years depending on qualification level"
    },
    tuitionFees: {
      undergraduate: "AUD 20,000 - AUD 45,000 per year",
      postgraduate: "AUD 22,000 - AUD 50,000 per year",
      phd: "AUD 20,000 - AUD 45,000 per year (often with scholarships)",
      scholarships: [
        {
          name: "Australia Awards",
          amount: "Full tuition, living expenses, and travel",
          eligibility: "International students from developing countries",
          website: "https://www.dfat.gov.au/people-to-people/australia-awards/Pages/australia-awards-scholarships"
        },
        {
          name: "Endeavour Scholarships",
          amount: "Tuition, living stipend, travel and health insurance",
          eligibility: "High-achieving international students",
          website: "https://www.education.gov.au/endeavour-leadership-program"
        }
      ]
    },
    costOfLiving: {
      accommodation: "AUD 400 - AUD 1,800 per month",
      food: "AUD 400 - AUD 600 per month",
      transportation: "AUD 80 - AUD 150 per month",
      utilities: "AUD 100 - AUD 200 per month",
      entertainment: "AUD 100 - AUD 300 per month",
      total: "AUD 1,100 - AUD 3,050 per month",
      additionalNotes: "Sydney and Melbourne are the most expensive cities in Australia. Regional areas tend to be more affordable and may offer additional migration benefits."
    }
  },
  {
    id: "ireland",
    name: "Ireland",
    flag: "🇮🇪",
    description: "Ireland offers high-quality education with an English-speaking environment and post-study work opportunities in an EU country.",
    bachelorPrograms: [
      {
        title: "Bachelor's Degree Programs",
        description: "Irish bachelor's degrees typically take 3-4 years to complete, depending on the field of study.",
        duration: "3-4 years",
        averageFees: "€10,000 - €25,000 per year",
        popularFields: ["Business", "Information Technology", "Engineering", "Medicine", "Humanities"],
        requirements: [
          "High school certificate or equivalent",
          "English proficiency (IELTS, TOEFL, etc.)",
          "Application essay",
          "Academic transcripts"
        ]
      }
    ],
    masterPrograms: [
      {
        title: "Master's Degree Programs",
        description: "Irish master's programs typically take 1-2 years and offer specialized training in various fields.",
        duration: "1-2 years",
        averageFees: "€10,000 - €30,000 per year",
        popularFields: ["Business", "Data Science", "Computer Science", "Arts and Humanities", "Health Sciences"],
        requirements: [
          "Bachelor's degree",
          "English proficiency (IELTS, TOEFL, etc.)",
          "Statement of purpose",
          "CV/Resume",
          "Letters of recommendation"
        ]
      }
    ],
    topColleges: [
      {
        name: "Trinity College Dublin",
        location: "Dublin",
        ranking: "#98 QS World University Rankings",
        website: "https://www.tcd.ie/",
        image: "https://images.pexels.com/photos/1167021/pexels-photo-1167021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Founded in 1592, Trinity is Ireland's oldest university and has a rich tradition of academic excellence.",
        popularPrograms: ["Business", "Computer Science", "Literature", "Medicine", "Law"]
      },
      {
        name: "University College Dublin",
        location: "Dublin",
        ranking: "#173 QS World University Rankings",
        website: "https://www.ucd.ie/",
        image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Ireland's largest university, known for its research output and international focus.",
        popularPrograms: ["Business", "Engineering", "Computer Science", "Medicine", "Agriculture"]
      },
      {
        name: "National University of Ireland, Galway",
        location: "Galway",
        ranking: "#258 QS World University Rankings",
        website: "https://www.nuigalway.ie/",
        image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "A research-intensive university known for its medicine, engineering, and humanities programs.",
        popularPrograms: ["Medicine", "Engineering", "Law", "Business", "Arts"]
      }
    ],
    visaProcess: {
      type: "Study Visa",
      processingTime: "4-8 weeks",
      requirements: [
        "Acceptance letter from an Irish institution",
        "Proof of payment of tuition fees",
        "Proof of financial support (€7,000 minimum)",
        "Private health insurance",
        "Valid passport"
      ],
      applicationProcess: [
        "Obtain acceptance letter",
        "Apply at the Irish embassy or consulate in your country",
        "Submit supporting documents",
        "Pay visa fee",
        "Attend interview if required",
        "Receive visa decision"
      ],
      fees: "Application fee: €60-€100 depending on nationality",
      workPermit: "20 hours/week during term time, 40 hours/week during holidays. Third Level Graduate Scheme: up to 24 months stay after graduation to seek employment"
    },
    tuitionFees: {
      undergraduate: "€10,000 - €25,000 per year",
      postgraduate: "€10,000 - €30,000 per year",
      phd: "€10,000 - €20,000 per year (often with funding)",
      scholarships: [
        {
          name: "Government of Ireland International Education Scholarships",
          amount: "€10,000 for one year",
          eligibility: "High-achieving international students",
          website: "https://www.education.ie/en/learners/services/scholarships/"
        },
        {
          name: "Walsh Fellowships",
          amount: "Full tuition and stipend",
          eligibility: "PhD and MSc students in agriculture and food research",
          website: "https://www.teagasc.ie/about/research--innovation/walsh-scholarships/"
        }
      ]
    },
    costOfLiving: {
      accommodation: "€400 - €1,200 per month",
      food: "€200 - €400 per month",
      transportation: "€50 - €120 per month",
      utilities: "€80 - €150 per month",
      entertainment: "€100 - €200 per month",
      total: "€830 - €2,070 per month",
      additionalNotes: "Dublin is significantly more expensive than other Irish cities. University accommodation is generally more affordable than private rentals."
    }
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    description: "Germany offers tuition-free or low-tuition education at public universities, with many programs taught in English.",
    bachelorPrograms: [
      {
        title: "Bachelor's Degree Programs",
        description: "German bachelor's degrees typically take 3-4 years to complete, with a strong focus on theoretical knowledge and practical application.",
        duration: "3-4 years",
        averageFees: "€0 - €1,500 per semester (administrative fees at public universities), €10,000 - €20,000 per year (private universities)",
        popularFields: ["Engineering", "Computer Science", "Business", "Natural Sciences", "Arts and Humanities"],
        requirements: [
          "Higher education entrance qualification (Hochschulzugangsberechtigung)",
          "German proficiency (for German-taught programs)",
          "English proficiency (for English-taught programs)",
          "TestAS (for some programs)",
          "Application documents"
        ]
      }
    ],
    masterPrograms: [
      {
        title: "Master's Degree Programs",
        description: "German master's programs typically take 1-2 years and offer specialized study in various fields, with many taught in English.",
        duration: "1-2 years",
        averageFees: "€0 - €1,500 per semester (administrative fees at public universities), €10,000 - €30,000 per year (private universities)",
        popularFields: ["Engineering", "Computer Science", "Business", "Natural Sciences", "Environmental Sciences"],
        requirements: [
          "Bachelor's degree in a related field",
          "German proficiency (for German-taught programs)",
          "English proficiency (for English-taught programs)",
          "Letters of recommendation",
          "Statement of purpose",
          "CV/Resume"
        ]
      }
    ],
    topColleges: [
      {
        name: "Technical University of Munich",
        location: "Munich, Bavaria",
        ranking: "#49 QS World University Rankings",
        website: "https://www.tum.de/en/",
        image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "TUM is one of Europe's top universities for engineering and natural sciences, with strong industry connections.",
        popularPrograms: ["Engineering", "Computer Science", "Natural Sciences", "Medicine", "Business"]
      },
      {
        name: "Ludwig Maximilian University of Munich",
        location: "Munich, Bavaria",
        ranking: "#59 QS World University Rankings",
        website: "https://www.lmu.de/en/",
        image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "LMU is one of Germany's oldest and most prestigious universities, with strengths across a wide range of disciplines.",
        popularPrograms: ["Medicine", "Law", "Natural Sciences", "Humanities", "Social Sciences"]
      },
      {
        name: "Heidelberg University",
        location: "Heidelberg, Baden-Württemberg",
        ranking: "#65 QS World University Rankings",
        website: "https://www.uni-heidelberg.de/en",
        image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Founded in 1386, Heidelberg is Germany's oldest university and a leading institution for research and education.",
        popularPrograms: ["Medicine", "Natural Sciences", "Humanities", "Law", "Social Sciences"]
      }
    ],
    visaProcess: {
      type: "Student Visa/Residence Permit",
      processingTime: "4-8 weeks",
      requirements: [
        "Acceptance letter from a German university",
        "Proof of financial resources (approximately €10,332 per year)",
        "Health insurance",
        "Valid passport",
        "Biometric photos"
      ],
      applicationProcess: [
        "Obtain acceptance letter",
        "Apply at the German embassy or consulate in your country",
        "Submit supporting documents",
        "Pay visa fee",
        "Attend interview if required",
        "Receive visa decision",
        "Register with local authorities upon arrival in Germany"
      ],
      fees: "Application fee: €75",
      workPermit: "120 full days or 240 half days per year during studies. Post-Study: 18 months to find a job related to your qualification"
    },
    tuitionFees: {
      undergraduate: "€0 - €1,500 per semester (administrative fees at public universities), €10,000 - €20,000 per year (private universities)",
      postgraduate: "€0 - €1,500 per semester (administrative fees at public universities), €10,000 - €30,000 per year (private universities)",
      phd: "Generally free at public universities (only administrative fees)",
      scholarships: [
        {
          name: "DAAD Scholarships",
          amount: "€850 - €1,200 per month plus additional benefits",
          eligibility: "International students with excellent academic records",
          website: "https://www.daad.de/en/"
        },
        {
          name: "Erasmus+ Program",
          amount: "Varies by country and program",
          eligibility: "EU students and international students from partner countries",
          website: "https://ec.europa.eu/programmes/erasmus-plus/"
        }
      ]
    },
    costOfLiving: {
      accommodation: "€300 - €800 per month",
      food: "€200 - €300 per month",
      transportation: "€80 - €100 per month (often included in semester fees)",
      utilities: "€80 - €200 per month",
      entertainment: "€50 - €150 per month",
      total: "€710 - €1,550 per month",
      additionalNotes: "Munich, Frankfurt, and Hamburg are the most expensive cities. Cities in eastern Germany tend to be more affordable."
    }
  },
  {
    id: "france",
    name: "France",
    flag: "🇫🇷",
    description: "France offers high-quality education with low tuition fees and a rich cultural experience in one of Europe's most diverse countries.",
    bachelorPrograms: [
      {
        title: "Bachelor's Degree Programs (Licence)",
        description: "French bachelor's degrees typically take 3 years to complete and provide a broad foundation in the chosen field.",
        duration: "3 years",
        averageFees: "€170 - €3,770 per year (public universities), €5,000 - €20,000 per year (private institutions)",
        popularFields: ["Business", "Engineering", "Humanities", "Sciences", "Art and Design"],
        requirements: [
          "Baccalauréat or equivalent",
          "French proficiency (for French-taught programs)",
          "English proficiency (for English-taught programs)",
          "Application documents",
          "Campus France approval (for some countries)"
        ]
      }
    ],
    masterPrograms: [
      {
        title: "Master's Degree Programs",
        description: "French master's programs typically take 2 years and offer specialized study with research opportunities.",
        duration: "2 years",
        averageFees: "€243 - €3,770 per year (public universities), €5,000 - €30,000 per year (private institutions and Grandes Écoles)",
        popularFields: ["Business", "Engineering", "International Relations", "Sciences", "Arts"],
        requirements: [
          "Bachelor's degree in a related field",
          "French proficiency (for French-taught programs)",
          "English proficiency (for English-taught programs)",
          "Letters of recommendation",
          "Statement of purpose",
          "CV/Resume"
        ]
      }
    ],
    topColleges: [
      {
        name: "Université PSL (Paris Sciences et Lettres)",
        location: "Paris",
        ranking: "#40 QS World University Rankings",
        website: "https://www.psl.eu/en",
        image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "PSL brings together several prestigious French institutions, including École Normale Supérieure and MINES ParisTech.",
        popularPrograms: ["Sciences", "Engineering", "Economics", "Humanities", "Arts"]
      },
      {
        name: "Sorbonne University",
        location: "Paris",
        ranking: "#83 QS World University Rankings",
        website: "https://www.sorbonne-universite.fr/en",
        image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Formed from the merger of Paris-Sorbonne University and Pierre and Marie Curie University, Sorbonne is one of France's most historic institutions.",
        popularPrograms: ["Medicine", "Sciences", "Humanities", "Law", "Business"]
      },
      {
        name: "École Polytechnique",
        location: "Palaiseau",
        ranking: "#61 QS World University Rankings",
        website: "https://www.polytechnique.edu/en",
        image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "A leading engineering Grande École known for its rigorous selection process and excellence in science and technology.",
        popularPrograms: ["Engineering", "Computer Science", "Mathematics", "Physics", "Economics"]
      }
    ],
    visaProcess: {
      type: "Long-Stay Student Visa (VLS-TS)",
      processingTime: "2-3 weeks",
      requirements: [
        "Acceptance letter from a French institution",
        "Proof of financial resources (approximately €615 per month)",
        "Accommodation proof",
        "Health insurance",
        "Valid passport",
        "Campus France validation (for some countries)"
      ],
      applicationProcess: [
        "Create an account on Campus France (for some countries)",
        "Obtain acceptance letter",
        "Complete online visa application",
        "Schedule appointment at the French consulate",
        "Submit supporting documents",
        "Pay visa fee",
        "Attend interview",
        "Receive visa decision",
        "Validate visa upon arrival in France"
      ],
      fees: "Application fee: €50 - €99 depending on nationality",
      workPermit: "964 hours per year (approximately 20 hours per week) during studies. Post-Study: 12 months to seek employment with Autorisation Provisoire de Séjour (APS)"
    },
    tuitionFees: {
      undergraduate: "€170 - €3,770 per year (public universities), €5,000 - €20,000 per year (private institutions)",
      postgraduate: "€243 - €3,770 per year (public universities), €5,000 - €30,000 per year (private institutions and Grandes Écoles)",
      phd: "€380 per year (public universities), higher for private institutions",
      scholarships: [
        {
          name: "Eiffel Excellence Scholarship Program",
          amount: "€1,181 per month plus additional benefits",
          eligibility: "International students with excellent academic records",
          website: "https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence"
        },
        {
          name: "French Government Scholarships (BGF)",
          amount: "Varies by program",
          eligibility: "International students selected by the French Embassy in their country",
          website: "https://www.campusfrance.org/en/french-government-scholarships"
        }
      ]
    },
    costOfLiving: {
      accommodation: "€250 - €1,000 per month",
      food: "€200 - €300 per month",
      transportation: "€30 - €75 per month",
      utilities: "€60 - €150 per month",
      entertainment: "€50 - €150 per month",
      total: "€590 - €1,675 per month",
      additionalNotes: "Paris is significantly more expensive than other French cities. Students can benefit from various discounts, including reduced-price meals at university restaurants (CROUS)."
    }
  },
  {
    id: "italy",
    name: "Italy",
    flag: "🇮🇹",
    description: "Italy offers affordable education with a rich cultural heritage and growing number of English-taught programs.",
    bachelorPrograms: [
      {
        title: "Bachelor's Degree Programs (Laurea)",
        description: "Italian bachelor's degrees typically take 3 years to complete and provide a strong foundation in the chosen field.",
        duration: "3 years",
        averageFees: "€900 - €4,000 per year (public universities), €6,000 - €20,000 per year (private universities)",
        popularFields: ["Arts and Design", "Architecture", "Engineering", "Business", "Humanities"],
        requirements: [
          "High school diploma or equivalent",
          "Italian proficiency (for Italian-taught programs)",
          "English proficiency (for English-taught programs)",
          "Entry examination (for some programs)",
          "Application documents"
        ]
      }
    ],
    masterPrograms: [
      {
        title: "Master's Degree Programs (Laurea Magistrale)",
        description: "Italian master's programs typically take 2 years and offer specialized study in various fields.",
        duration: "2 years",
        averageFees: "€900 - €4,000 per year (public universities), €6,000 - €25,000 per year (private universities)",
        popularFields: ["Design", "Architecture", "Engineering", "Business", "Fashion"],
        requirements: [
          "Bachelor's degree in a related field",
          "Italian proficiency (for Italian-taught programs)",
          "English proficiency (for English-taught programs)",
          "Portfolio (for design and arts programs)",
          "Statement of purpose",
          "CV/Resume"
        ]
      }
    ],
    topColleges: [
      {
        name: "Politecnico di Milano",
        location: "Milan",
        ranking: "#123 QS World University Rankings",
        website: "https://www.polimi.it/en/",
        image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Italy's largest technical university, known for its architecture, design, and engineering programs.",
        popularPrograms: ["Architecture", "Design", "Engineering", "Urban Planning", "Computer Science"]
      },
      {
        name: "University of Bologna",
        location: "Bologna",
        ranking: "#166 QS World University Rankings",
        website: "https://www.unibo.it/en/",
        image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Founded in 1088, the University of Bologna is the oldest university in continuous operation in the world.",
        popularPrograms: ["Law", "Economics", "Medicine", "Arts and Humanities", "Engineering"]
      },
      {
        name: "Sapienza University of Rome",
        location: "Rome",
        ranking: "#171 QS World University Rankings",
        website: "https://www.uniroma1.it/en/",
        image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "One of the oldest universities in the world, known for its humanities, engineering, and medical programs.",
        popularPrograms: ["Medicine", "Engineering", "Architecture", "Humanities", "Mathematics"]
      }
    ],
    visaProcess: {
      type: "Type D Study Visa",
      processingTime: "1-3 weeks",
      requirements: [
        "Acceptance letter from an Italian institution",
        "Proof of financial resources (approximately €460 per month)",
        "Accommodation proof",
        "Health insurance",
        "Valid passport"
      ],
      applicationProcess: [
        "Obtain acceptance letter",
        "Pre-enroll through the Italian consulate (for some countries)",
        "Apply for visa at the Italian consulate in your country",
        "Submit supporting documents",
        "Pay visa fee",
        "Attend interview if required",
        "Receive visa decision",
        "Apply for residence permit (Permesso di Soggiorno) within 8 days of arrival in Italy"
      ],
      fees: "Application fee: €50",
      workPermit: "20 hours per week during studies. Post-Study: possibility to convert to a work permit if you find employment within 12 months of graduation"
    },
    tuitionFees: {
      undergraduate: "€900 - €4,000 per year (public universities), €6,000 - €20,000 per year (private universities)",
      postgraduate: "€900 - €4,000 per year (public universities), €6,000 - €25,000 per year (private universities)",
      phd: "€900 - €1,500 per year (often with scholarships)",
      scholarships: [
        {
          name: "Italian Government Scholarships for Foreign Students",
          amount: "€900 per month plus tuition waiver",
          eligibility: "International students with excellent academic records",
          website: "https://studyinitaly.esteri.it/en/call-for-procedure"
        },
        {
          name: "Regional Scholarships (Diritto allo Studio Universitario)",
          amount: "Varies by region, includes tuition waiver and monthly stipend",
          eligibility: "Based on financial need and academic merit",
          website: "Varies by region and university"
        }
      ]
    },
    costOfLiving: {
      accommodation: "€300 - €700 per month",
      food: "€200 - €300 per month",
      transportation: "€30 - €60 per month",
      utilities: "€80 - €150 per month",
      entertainment: "€50 - €150 per month",
      total: "€660 - €1,360 per month",
      additionalNotes: "Milan and Rome are the most expensive cities. Northern Italy is generally more expensive than Southern Italy. Many universities offer affordable student housing options."
    }
  },
  {
    id: "newzealand",
    name: "New Zealand",
    flag: "🇳🇿",
    description: "New Zealand offers high-quality education in a safe, welcoming environment with stunning natural landscapes and post-study work opportunities.",
    bachelorPrograms: [
      {
        title: "Bachelor's Degree Programs",
        description: "New Zealand bachelor's degrees typically take 3-4 years to complete, depending on the field of study.",
        duration: "3-4 years",
        averageFees: "NZD 22,000 - NZD 32,000 per year",
        popularFields: ["Business", "Engineering", "Health Sciences", "Information Technology", "Tourism and Hospitality"],
        requirements: [
          "High school certificate or equivalent",
          "English proficiency (IELTS, TOEFL, etc.)",
          "Statement of purpose",
          "Academic transcripts"
        ]
      }
    ],
    masterPrograms: [
      {
        title: "Master's Degree Programs",
        description: "New Zealand master's programs typically take 1-2 years and offer specialized study with research components.",
        duration: "1-2 years",
        averageFees: "NZD 26,000 - NZD 37,000 per year",
        popularFields: ["Business", "Engineering", "Environmental Sciences", "Health Sciences", "Information Technology"],
        requirements: [
          "Bachelor's degree in a related field",
          "English proficiency (IELTS, TOEFL, etc.)",
          "Statement of purpose",
          "CV/Resume",
          "Letters of recommendation"
        ]
      }
    ],
    topColleges: [
      {
        name: "University of Auckland",
        location: "Auckland",
        ranking: "#87 QS World University Rankings",
        website: "https://www.auckland.ac.nz/",
        image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "New Zealand's largest and highest-ranked university, known for its research excellence across multiple disciplines.",
        popularPrograms: ["Business", "Engineering", "Medicine", "Arts", "Sciences"]
      },
      {
        name: "University of Otago",
        location: "Dunedin",
        ranking: "#194 QS World University Rankings",
        website: "https://www.otago.ac.nz/",
        image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "New Zealand's first university, founded in 1869, known for its health sciences and humanities programs.",
        popularPrograms: ["Medicine", "Dentistry", "Health Sciences", "Business", "Arts"]
      },
      {
        name: "Victoria University of Wellington",
        location: "Wellington",
        ranking: "#236 QS World University Rankings",
        website: "https://www.wgtn.ac.nz/",
        image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Located in New Zealand's capital city, known for its law, humanities, and science programs.",
        popularPrograms: ["Law", "Design", "Film", "Business", "Science"]
      }
    ],
    visaProcess: {
      type: "Student Visa",
      processingTime: "4-8 weeks",
      requirements: [
        "Offer of place from a New Zealand institution",
        "Evidence of sufficient funds (NZD 15,000 per year)",
        "Return air ticket or additional funds to purchase one",
        "Health insurance",
        "Valid passport",
        "Proof of accommodation"
      ],
      applicationProcess: [
        "Obtain offer of place from a New Zealand institution",
        "Create an online account with Immigration New Zealand",
        "Complete online application",
        "Pay visa fee",
        "Submit supporting documents",
        "Undergo medical examination if required",
        "Receive visa decision"
      ],
      fees: "Application fee: NZD 330 (online)",
      workPermit: "20 hours per week during term, full-time during scheduled breaks. Post-Study Work Visa: 1-3 years depending on the level of qualification"
    },
    tuitionFees: {
      undergraduate: "NZD 22,000 - NZD 32,000 per year",
      postgraduate: "NZD 26,000 - NZD 37,000 per year",
      phd: "NZD 6,500 - NZD 9,000 per year (same as domestic students)",
      scholarships: [
        {
          name: "New Zealand International Doctoral Research Scholarships",
          amount: "Full tuition plus living stipend",
          eligibility: "International PhD students with excellent academic records",
          website: "https://www.education.govt.nz/our-work/publications/scholarships/"
        },
        {
          name: "University of Auckland International Student Scholarships",
          amount: "NZD 10,000 - NZD 20,000",
          eligibility: "International students with excellent academic records",
          website: "https://www.auckland.ac.nz/en/study/scholarships-and-awards.html"
        }
      ]
    },
    costOfLiving: {
      accommodation: "NZD 500 - NZD 1,200 per month",
      food: "NZD 400 - NZD 600 per month",
      transportation: "NZD 100 - NZD 150 per month",
      utilities: "NZD 150 - NZD 200 per month",
      entertainment: "NZD 100 - NZD 200 per month",
      total: "NZD 1,250 - NZD 2,350 per month",
      additionalNotes: "Auckland is the most expensive city, while smaller cities and towns are more affordable. Many universities offer on-campus accommodation options for international students."
    }
  },
  {
    id: "uae",
    name: "United Arab Emirates",
    flag: "🇦🇪",
    description: "The UAE offers modern education facilities, international faculty, and multicultural exposure in a safe, tax-free environment.",
    bachelorPrograms: [
      {
        title: "Bachelor's Degree Programs",
        description: "UAE bachelor's degrees typically take 3-4 years to complete, with a mix of local and international curricula.",
        duration: "3-4 years",
        averageFees: "AED 35,000 - AED 75,000 per year",
        popularFields: ["Business", "Engineering", "Information Technology", "Tourism and Hospitality", "Media and Communication"],
        requirements: [
          "High school certificate with minimum 70-80% average",
          "English proficiency (IELTS, TOEFL, etc.)",
          "Statement of purpose",
          "Academic transcripts",
          "Entrance examination (for some programs)"
        ]
      }
    ],
    masterPrograms: [
      {
        title: "Master's Degree Programs",
        description: "UAE master's programs typically take 1-2 years and focus on professional development with strong industry connections.",
        duration: "1-2 years",
        averageFees: "AED 55,000 - AED 120,000 per year",
        popularFields: ["Business Administration", "Engineering", "Information Technology", "Education", "Health Sciences"],
        requirements: [
          "Bachelor's degree with good GPA (typically 3.0 or above)",
          "English proficiency (IELTS, TOEFL, etc.)",
          "GMAT/GRE (for some programs)",
          "Work experience (for some programs)",
          "Statement of purpose",
          "CV/Resume"
        ]
      }
    ],
    topColleges: [
      {
        name: "Khalifa University",
        location: "Abu Dhabi",
        ranking: "#181 QS World University Rankings",
        website: "https://www.ku.ac.ae/",
        image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "A research-focused university specializing in science, engineering, and technology.",
        popularPrograms: ["Engineering", "Computer Science", "Aerospace Engineering", "Nuclear Engineering", "Petroleum Engineering"]
      },
      {
        name: "United Arab Emirates University",
        location: "Al Ain",
        ranking: "#284 QS World University Rankings",
        website: "https://www.uaeu.ac.ae/en/",
        image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "The UAE's first and foremost comprehensive national university, established in 1976.",
        popularPrograms: ["Business", "Engineering", "Medicine", "Education", "Information Technology"]
      },
      {
        name: "American University of Sharjah",
        location: "Sharjah",
        ranking: "#383 QS World University Rankings",
        website: "https://www.aus.edu/",
        image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "A leading university in the Gulf region based on the American model of higher education.",
        popularPrograms: ["Business", "Architecture", "Engineering", "Design", "Media"]
      }
    ],
    visaProcess: {
      type: "Student Visa",
      processingTime: "2-3 weeks",
      requirements: [
        "Acceptance letter from a UAE institution",
        "Valid passport with at least 6 months validity",
        "Medical fitness certificate",
        "Passport-sized photographs",
        "Attested academic certificates"
      ],
      applicationProcess: [
        "Obtain acceptance letter",
        "University processes visa application (sponsored by the university)",
        "Complete medical testing upon arrival",
        "Receive Emirates ID",
        "Renew visa annually through the university"
      ],
      fees: "Application fee: AED 3,000 - AED 6,000 (often included in university fees)",
      workPermit: "Limited options during studies. Post-Study: graduates can apply for a 1-3 year residence visa to seek employment"
    },
    tuitionFees: {
      undergraduate: "AED 35,000 - AED 75,000 per year",
      postgraduate: "AED 55,000 - AED 120,000 per year",
      phd: "AED 75,000 - AED 150,000 per year",
      scholarships: [
        {
          name: "Sheikh Mohamed bin Zayed Higher Education Grant",
          amount: "Up to 100% tuition coverage",
          eligibility: "Outstanding students with financial need",
          website: "Varies by university"
        },
        {
          name: "University Merit Scholarships",
          amount: "10-50% tuition reduction",
          eligibility: "Based on academic excellence",
          website: "Available through individual universities"
        }
      ]
    },
    costOfLiving: {
      accommodation: "AED 1,500 - AED 4,000 per month",
      food: "AED 1,000 - AED 2,000 per month",
      transportation: "AED 300 - AED 500 per month",
      utilities: "AED 400 - AED 800 per month",
      entertainment: "AED 500 - AED 1,000 per month",
      total: "AED 3,700 - AED 8,300 per month",
      additionalNotes: "Dubai and Abu Dhabi are the most expensive cities. Many universities offer on-campus accommodation at more reasonable rates. The UAE is a tax-free country, which can help offset the high cost of living."
    }
  }
];

// Exam data instances
export const exams: ExamData[] = [
  {
    id: "ielts",
    name: "IELTS",
    fullName: "International English Language Testing System",
    icon: "📝",
    description: "IELTS is one of the most widely accepted English language proficiency tests for higher education and global migration, with over 10,000 organizations in 140 countries recognizing it.",
    sections: [
      {
        name: "Listening",
        description: "30 minutes + 10 minutes transfer time. Four recorded sections of increasing difficulty with 40 questions in total.",
        questionTypes: ["Multiple choice", "Matching", "Plan/map/diagram labeling", "Form completion", "Note completion", "Table completion", "Flow-chart completion", "Summary completion", "Sentence completion", "Short answer questions"],
        tips: ["Practice with a variety of accents (British, Australian, American, etc.)", "Read the questions before listening", "Pay attention to spelling and word limits", "Be aware of synonyms and paraphrasing"]
      },
      {
        name: "Reading",
        description: "60 minutes. Three long texts with 40 questions in total. Academic and General Training tests have different reading materials.",
        questionTypes: ["Multiple choice", "Identifying information", "Identifying writer's views/claims", "Matching information", "Matching headings", "Matching features", "Matching sentence endings", "Sentence completion", "Summary completion", "Note completion", "Table completion", "Flow-chart completion", "Diagram label completion", "Short answer questions"],
        tips: ["Don't spend too long on one question", "Scan for keywords", "Pay attention to qualifiers (some, all, never, etc.)", "Watch your timing - about 20 minutes per passage"]
      },
      {
        name: "Writing",
        description: "60 minutes. Two tasks: Task 1 (150 words, describing visual information) and Task 2 (250 words, essay).",
        questionTypes: ["Describing data (graphs, tables, charts, diagrams)", "Letter writing (General Training only)", "Argumentative essay", "Discussion essay", "Problem-solution essay"],
        tips: ["Plan your answer before writing", "Structure your essays with clear paragraphs", "Use a range of vocabulary and grammatical structures", "Stay on topic and fulfill the requirements of the task"]
      },
      {
        name: "Speaking",
        description: "11-14 minutes. Face-to-face interview with three parts: Introduction, Individual task (long turn), and Discussion.",
        questionTypes: ["Personal questions", "Individual long turn (speaking on a topic)", "Two-way discussion"],
        tips: ["Speak naturally and avoid memorized answers", "Elaborate on your answers", "Use a range of vocabulary and grammatical structures", "Show willingness to communicate even if you make mistakes"]
      }
    ],
    scoring: "Each section is scored on a band of 0-9, and the overall band score is the average of the four sections. Most universities require a band score of 6.0-7.0.",
    duration: "2 hours 45 minutes (excluding Speaking test, which may be on a different day)",
    fee: "$185-$250 USD (varies by country)",
    validityPeriod: "2 years",
    acceptedCountries: ["Australia", "Canada", "New Zealand", "UK", "USA", "Germany", "France", "Netherlands", "Singapore", "Ireland"],
    preparationTips: [
      "Familiarize yourself with the test format and question types",
      "Practice with official IELTS materials and past papers",
      "Improve your general English skills through reading, listening, writing, and speaking in English daily",
      "Take a full-length practice test to get used to the timing",
      "Get feedback on your writing and speaking from a teacher or native speaker",
      "Learn strategies for each section of the test",
      "Build your vocabulary, especially academic vocabulary for the Academic test"
    ],
    studyResources: [
      {
        type: "Books",
        name: "Official IELTS Practice Materials",
        description: "Published by Cambridge, these books contain authentic test papers and sample answers.",
        link: "https://www.cambridgeenglish.org/exams-and-tests/ielts/preparation/"
      },
      {
        type: "Online",
        name: "IELTS.org Free Practice Tests",
        description: "Official website offers free sample tests and resources.",
        link: "https://www.ielts.org/about-the-test/sample-test-questions"
      },
      {
        type: "Course",
        name: "British Council IELTS Preparation Courses",
        description: "Face-to-face and online courses with experienced instructors.",
        link: "https://www.britishcouncil.org/exam/ielts/courses-resources"
      }
    ]
  },
  {
    id: "gmat",
    name: "GMAT",
    fullName: "Graduate Management Admission Test",
    icon: "🧮",
    description: "The GMAT is a computer-adaptive test designed to assess analytical writing, quantitative reasoning, verbal reasoning, and integrated reasoning skills for admission to graduate management programs, such as MBA.",
    sections: [
      {
        name: "Analytical Writing Assessment",
        description: "30 minutes. One essay task: Analysis of an Argument.",
        questionTypes: ["Analysis of an Argument"],
        tips: ["Identify the argument's assumptions and flaws", "Organize your thoughts before writing", "Use specific examples to support your critique", "Proofread your essay for grammatical errors"]
      },
      {
        name: "Integrated Reasoning",
        description: "30 minutes. 12 questions that measure your ability to evaluate information presented in multiple formats.",
        questionTypes: ["Multi-Source Reasoning", "Table Analysis", "Graphics Interpretation", "Two-Part Analysis"],
        tips: ["Practice interpreting data from various sources", "Work on time management - about 2.5 minutes per question", "Take notes during the test", "Read carefully as questions often require multi-step thinking"]
      },
      {
        name: "Quantitative Reasoning",
        description: "62 minutes. 31 questions testing problem-solving and data sufficiency skills.",
        questionTypes: ["Problem Solving", "Data Sufficiency"],
        tips: ["Review basic math concepts (arithmetic, algebra, geometry)", "Learn shortcuts for calculations", "Practice data sufficiency questions extensively", "For DS questions, analyze each statement independently first"]
      },
      {
        name: "Verbal Reasoning",
        description: "65 minutes. 36 questions testing reading comprehension, critical reasoning, and sentence correction skills.",
        questionTypes: ["Reading Comprehension", "Critical Reasoning", "Sentence Correction"],
        tips: ["Improve reading speed and comprehension", "Study grammar rules for sentence correction", "Practice identifying assumptions and inferences in arguments", "Read high-quality publications to improve comprehension"]
      }
    ],
    scoring: "Total score ranges from 200-800, with individual section scores. Most top business schools look for scores above 700.",
    duration: "3 hours 7 minutes (with optional breaks)",
    fee: "$275 USD",
    validityPeriod: "5 years",
    acceptedCountries: ["USA", "Canada", "UK", "Australia", "France", "Germany", "Singapore", "Spain", "Netherlands", "Global Business Schools"],
    preparationTips: [
      "Take a diagnostic test to identify your strengths and weaknesses",
      "Create a study schedule that focuses on your weak areas",
      "Practice with official GMAT questions to get familiar with the format",
      "Learn test-taking strategies specific to each section",
      "Take full-length practice tests to build stamina and time management skills",
      "Join study groups or forums to share strategies and learn from others",
      "Consider a GMAT prep course if you need structured guidance"
    ],
    studyResources: [
      {
        type: "Books",
        name: "GMAT Official Guide",
        description: "Published by GMAC (the makers of the GMAT), contains real questions and explanations.",
        link: "https://www.mba.com/exams/gmat/prepare/gmat-official-guide-series"
      },
      {
        type: "Online",
        name: "GMAT Official Starter Kit",
        description: "Free practice exams and sample questions from the test makers.",
        link: "https://www.mba.com/exams/gmat/prepare/free-gmat-official-starter-kit"
      },
      {
        type: "Course",
        name: "Manhattan Prep GMAT Courses",
        description: "Comprehensive courses with expert instructors and proven strategies.",
        link: "https://www.manhattanprep.com/gmat/"
      }
    ]
  },
  {
    id: "gre",
    name: "GRE",
    fullName: "Graduate Record Examination",
    icon: "📊",
    description: "The GRE is a standardized test that is an admissions requirement for many graduate schools worldwide, measuring verbal reasoning, quantitative reasoning, and analytical writing skills.",
    sections: [
      {
        name: "Analytical Writing",
        description: "60 minutes. Two separately timed tasks: 'Analyze an Issue' and 'Analyze an Argument.'",
        questionTypes: ["Analyze an Issue", "Analyze an Argument"],
        tips: ["Structure your essays with clear introduction, body, and conclusion", "Practice brainstorming ideas quickly", "Support your points with specific examples", "Learn to identify logical flaws in arguments"]
      },
      {
        name: "Verbal Reasoning",
        description: "60 minutes. Two 30-minute sections with 20 questions each, testing reading comprehension, text completion, and sentence equivalence.",
        questionTypes: ["Reading Comprehension", "Text Completion", "Sentence Equivalence"],
        tips: ["Build your vocabulary, especially academic words", "Practice active reading techniques", "Learn to identify contextual clues", "Study word roots, prefixes, and suffixes"]
      },
      {
        name: "Quantitative Reasoning",
        description: "70 minutes. Two 35-minute sections with 20 questions each, testing basic mathematical skills, understanding of elementary mathematical concepts, and ability to reason quantitatively.",
        questionTypes: ["Quantitative Comparison", "Multiple Choice (single answer)", "Multiple Choice (multiple answers)", "Numeric Entry"],
        tips: ["Review basic math concepts (arithmetic, algebra, geometry, data analysis)", "Learn to translate word problems into equations", "Practice mental math to save time", "Memorize common formulas and properties"]
      }
    ],
    scoring: "Verbal and Quantitative sections: 130-170 each (1-point increments). Analytical Writing: 0-6 (half-point increments).",
    duration: "About 3 hours 45 minutes (with short breaks)",
    fee: "$205 USD (varies by country)",
    validityPeriod: "5 years",
    acceptedCountries: ["USA", "Canada", "UK", "Australia", "Germany", "Netherlands", "Singapore", "Global Graduate Programs"],
    preparationTips: [
      "Take a diagnostic test to identify strengths and weaknesses",
      "Create a study schedule focusing on weaker areas",
      "Learn vocabulary in context rather than isolated word lists",
      "Practice with official GRE questions to get familiar with the format",
      "Take full-length practice tests to build stamina and time management skills",
      "Review concepts you haven't studied in a while, especially math",
      "Practice writing timed essays and get feedback"
    ],
    studyResources: [
      {
        type: "Books",
        name: "Official GRE Super Power Pack",
        description: "Published by ETS (the makers of the GRE), contains real questions and practice tests.",
        link: "https://www.ets.org/gre/test-takers/general-test/prepare/materials.html"
      },
      {
        type: "Online",
        name: "GRE POWERPREP Online",
        description: "Free official practice tests that simulate the actual testing experience.",
        link: "https://www.ets.org/gre/test-takers/general-test/prepare/powerprep.html"
      },
      {
        type: "Course",
        name: "Magoosh GRE Prep",
        description: "Online course with video lessons, practice questions, and study schedules.",
        link: "https://gre.magoosh.com/"
      }
    ]
  },
  {
    id: "pte",
    name: "PTE Academic",
    fullName: "Pearson Test of English Academic",
    icon: "🔤",
    description: "PTE Academic is a computer-based English language test for non-native English speakers wanting to study abroad or migrate. It assesses speaking, writing, listening, and reading skills in an academic context.",
    sections: [
      {
        name: "Speaking & Writing",
        description: "77-93 minutes. Integrated tasks that test both speaking and writing abilities.",
        questionTypes: ["Personal Introduction", "Read Aloud", "Repeat Sentence", "Describe Image", "Re-tell Lecture", "Answer Short Question", "Summarize Written Text", "Essay"],
        tips: ["Speak clearly and at a natural pace", "Complete tasks within the time limit", "Practice speaking without long pauses", "Structure your writing with clear paragraphs", "Focus on content rather than accent"]
      },
      {
        name: "Reading",
        description: "32-41 minutes. Tests your reading and understanding of academic texts.",
        questionTypes: ["Multiple Choice (single answer)", "Multiple Choice (multiple answers)", "Re-order Paragraphs", "Fill in the Blanks", "Reading & Writing: Fill in the Blanks"],
        tips: ["Improve your reading speed", "Practice skimming and scanning techniques", "Learn to identify main ideas and supporting details", "Build academic vocabulary", "Practice understanding text structure"]
      },
      {
        name: "Listening",
        description: "45-57 minutes. Tests your ability to understand spoken English in academic settings.",
        questionTypes: ["Summarize Spoken Text", "Multiple Choice (single answer)", "Multiple Choice (multiple answers)", "Fill in the Blanks", "Highlight Correct Summary", "Select Missing Word", "Highlight Incorrect Words", "Write from Dictation"],
        tips: ["Practice note-taking while listening", "Listen for main ideas and specific details", "Become familiar with different accents", "Focus on key words and phrases", "Practice typing accurately and quickly"]
      }
    ],
    scoring: "Overall score range: 10-90. Individual skill scores also provided on the same scale.",
    duration: "About 3 hours (with optional 10-minute break)",
    fee: "$190-$210 USD (varies by country)",
    validityPeriod: "2 years",
    acceptedCountries: ["Australia", "UK", "Canada", "New Zealand", "USA", "Singapore", "Ireland", "Germany"],
    preparationTips: [
      "Familiarize yourself with the test format and question types",
      "Practice using the computer-based test format",
      "Improve your typing speed and accuracy",
      "Record yourself speaking and evaluate your performance",
      "Take full-length practice tests to build stamina",
      "Focus on integrated skills practice (e.g., listening and then writing)",
      "Learn to manage your time effectively for each section"
    ],
    studyResources: [
      {
        type: "Books",
        name: "The Official Guide to PTE Academic",
        description: "Published by Pearson, contains examples, practice questions, and tips.",
        link: "https://pearsonpte.com/preparation/resources/"
      },
      {
        type: "Online",
        name: "PTE Academic Official Practice Tests",
        description: "Timed practice tests that simulate the actual test experience.",
        link: "https://pearsonpte.com/preparation/scored-practice-test/"
      },
      {
        type: "Course",
        name: "E2Language PTE Preparation Courses",
        description: "Online courses with tutorials, practice questions, and live classes.",
        link: "https://www.e2language.com/courses/pte"
      }
    ]
  },
  {
    id: "sat",
    name: "SAT",
    fullName: "Scholastic Assessment Test",
    icon: "📘",
    description: "The SAT is a standardized test widely used for college admissions in the United States, measuring literacy, numeracy, and writing skills.",
    sections: [
      {
        name: "Reading and Writing",
        description: "64 minutes. 52 questions testing comprehension, rhetoric, and English language conventions.",
        questionTypes: ["Vocabulary in Context", "Command of Evidence", "Expression of Ideas", "Standard English Conventions"],
        tips: ["Practice active reading techniques", "Learn to identify main ideas and supporting details", "Study grammar rules and punctuation", "Practice identifying the author's purpose and tone"]
      },
      {
        name: "Math (No Calculator)",
        description: "25 minutes. 20 questions testing algebraic and quantitative reasoning without a calculator.",
        questionTypes: ["Multiple Choice", "Grid-in (student-produced response)"],
        tips: ["Master algebra fundamentals", "Practice mental math", "Learn to solve equations efficiently", "Review properties of functions"]
      },
      {
        name: "Math (Calculator)",
        description: "55 minutes. 38 questions testing problem-solving, data analysis, and advanced math with a calculator.",
        questionTypes: ["Multiple Choice", "Grid-in (student-produced response)"],
        tips: ["Practice with your calculator to become efficient", "Know when using a calculator is helpful and when it's faster to calculate manually", "Learn to interpret data from graphs and tables", "Master algebraic manipulations"]
      }
    ],
    scoring: "Total score range: 400-1600. Evidence-Based Reading and Writing: 200-800, Math: 200-800.",
    duration: "2 hours and 14 minutes (plus breaks)",
    fee: "$55 USD (International: $101-$151)",
    validityPeriod: "Scores do not expire, but most universities prefer recent scores (within 5 years)",
    acceptedCountries: ["USA", "Canada", "UK (some universities)", "Singapore", "Australia (some universities)", "Global American curriculum schools"],
    preparationTips: [
      "Take a diagnostic test to identify strengths and weaknesses",
      "Develop a regular study schedule at least 3-6 months before the test",
      "Use official SAT practice tests and questions",
      "Review core math concepts and formulas",
      "Read widely to improve comprehension and vocabulary",
      "Learn test-taking strategies specific to each section",
      "Practice time management to complete each section within the allocated time"
    ],
    studyResources: [
      {
        type: "Books",
        name: "The Official SAT Study Guide",
        description: "Published by the College Board, contains real practice tests and questions.",
        link: "https://www.collegeboard.org/releases/2023/digital-sat-suite-official-practice-resources"
      },
      {
        type: "Online",
        name: "Khan Academy Official SAT Practice",
        description: "Free personalized practice program in partnership with the College Board.",
        link: "https://www.khanacademy.org/SAT"
      },
      {
        type: "Course",
        name: "Princeton Review SAT Prep",
        description: "Comprehensive courses with expert instructors and proven strategies.",
        link: "https://www.princetonreview.com/college/sat-test-prep"
      }
    ]
  },
  {
    id: "toefl",
    name: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    icon: "🌎",
    description: "The TOEFL iBT (Internet-Based Test) measures your ability to use and understand English at the university level and evaluates how well you combine your listening, reading, speaking, and writing skills.",
    sections: [
      {
        name: "Reading",
        description: "54-72 minutes. 3-4 passages from academic texts with 10 questions each.",
        questionTypes: ["Factual Information", "Negative Factual Information", "Inference", "Rhetorical Purpose", "Vocabulary", "Reference", "Sentence Simplification", "Insert Text", "Prose Summary", "Fill in a Table"],
        tips: ["Practice skimming and scanning techniques", "Learn to identify main ideas and supporting details", "Improve your reading speed", "Build academic vocabulary", "Practice understanding the organization of texts"]
      },
      {
        name: "Listening",
        description: "41-57 minutes. 3-4 lectures and 2-3 conversations with 6 questions per lecture and 5 questions per conversation.",
        questionTypes: ["Main Idea", "Detail", "Function", "Attitude", "Organization", "Inference", "Connecting Information"],
        tips: ["Practice note-taking while listening", "Listen for signal words that indicate important information", "Pay attention to the speaker's tone and attitude", "Practice with different accents", "Focus on understanding the relationships between ideas"]
      },
      {
        name: "Speaking",
        description: "17 minutes. 4 tasks: 1 independent and 3 integrated (combining reading, listening, and speaking).",
        questionTypes: ["Independent Speaking", "Integrated Speaking (Reading, Listening, Speaking)"],
        tips: ["Practice speaking clearly and at a natural pace", "Structure your responses with an introduction, body, and conclusion", "Use specific examples to support your points", "Practice summarizing information from multiple sources", "Record yourself and evaluate your performance"]
      },
      {
        name: "Writing",
        description: "50 minutes. 2 tasks: 1 integrated (reading, listening, writing) and 1 independent essay.",
        questionTypes: ["Integrated Writing", "Independent Writing"],
        tips: ["Practice summarizing and synthesizing information", "Learn to organize your essays clearly", "Develop your ideas with specific details and examples", "Edit your writing for grammar and vocabulary errors", "Practice typing efficiently"]
      }
    ],
    scoring: "Each section is scored on a scale of 0-30, for a total score of 0-120.",
    duration: "About 3 hours (including check-in time and a 10-minute break)",
    fee: "$180-$325 USD (varies by country)",
    validityPeriod: "2 years",
    acceptedCountries: ["USA", "Canada", "Australia", "New Zealand", "UK", "Germany", "France", "Japan", "South Korea", "Global Universities"],
    preparationTips: [
      "Familiarize yourself with the test format and question types",
      "Practice with official TOEFL materials and past papers",
      "Improve your general English skills through reading, listening, writing, and speaking in English daily",
      "Take full-length practice tests to get used to the timing",
      "Get feedback on your writing and speaking from a teacher or native speaker",
      "Learn strategies for each section of the test",
      "Build your academic vocabulary"
    ],
    studyResources: [
      {
        type: "Books",
        name: "Official Guide to the TOEFL iBT Test",
        description: "Published by ETS, contains authentic test questions and practice tests.",
        link: "https://www.ets.org/toefl/test-takers/ibt/prepare/materials.html"
      },
      {
        type: "Online",
        name: "TOEFL iBT Free Practice Test",
        description: "Official practice test from ETS that simulates the test experience.",
        link: "https://www.ets.org/toefl/test-takers/ibt/prepare/free-practice-test.html"
      },
      {
        type: "Course",
        name: "Magoosh TOEFL Preparation",
        description: "Online course with video lessons, practice questions, and study plans.",
        link: "https://toefl.magoosh.com/"
      }
    ]
  }
];