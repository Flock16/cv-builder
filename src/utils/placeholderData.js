import { v4 as uuidv4 } from "uuid";

export const generalInfoPlaceholder = {
  fullName: "Full Name",
  email: "Email Address",
  phone: "Phone Number",
  location: "Location",
};

export const experienceInfoPlaceholder = [
  {
    id: uuidv4(),
    companyName: "Google",
    positionTitle: "Staff Engineer",
    responsibilities: [
      "Re-engineered googles search algorithm using R in 1 commit and deployed straight into production",
      "Made impovments to Google Maps algoirthm which saw a 50% reduction in travel distance and a 200% increase in fatality rate",
    ],
    startDate: "2018-07-22",
    isCurrent: true,
    endDate: "2018-07-22",
    isActive: true,
  },
  {
    id: uuidv4(),
    companyName: "Apple",
    positionTitle: "Intern",
    responsibilities: [
      "Re-engineered googles search algorithm using R in 1 commit and deployed straight into production",
      "Made impovments to Google Maps algoirthm which saw a 50% reduction in travel distance and a 200% increase in fatality rate",
    ],
    startDate: "2018-07-22",
    isCurrent: false,
    endDate: "2018-07-22",
    isActive: false,
  },
];

export const educationInfoPlaceholder = [
  {
    id: uuidv4(),
    university: "University of Sydney",
    major: "Information Technology",
    minor: "Computer Science",
    startDate: "2018-07-22",
    isCurrent: true,
    endDate: "2018-07-22",
    isActive: false,
    location: "Sydney",
  },
];
