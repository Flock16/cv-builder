import { v4 as uuidv4 } from "uuid";

export const createDefaultEducationObject = () => {
  return {
    id: uuidv4(),
    university: "University of Sydney",
    major: "Information Technology",
    minor: "Computer Science",
    startDate: "2018-07-22",
    isCurrent: true,
    endDate: "2018-07-22",
    isActive: false,
    location: "Sydney",
  };
};

export const createDefaultExperienceObject = () => {
  return {
    id: uuidv4(),
    companyName: "Apple",
    positionTitle: "Intern",
    resonsibilityInput: "",
    responsibilities: [
      {
        id: uuidv4(),
        responsibility:
          "Re-engineered googles search algorithm using R in 1 commit and deployed straight into production",
      },
      {
        id: uuidv4(),
        responsibility:
          "Made impovments to Google Maps algoirthm which saw a 50% reduction in travel distance and a 200% increase in fatality rate",
      },
    ],
    startDate: "2018-07-22",
    isCurrent: false,
    endDate: "2018-07-22",
    isActive: false,
  };
};

export const createResponsibility = (experience) => {
  const newReponsibility = {
    id: uuidv4(),
    responsibility: experience.resonsibilityInput,
  };
  const newResponsibilitiesArray = experience.responsibilities;
  newResponsibilitiesArray.push(newReponsibility);

  return { ...experience, responsibilities: newResponsibilitiesArray };
};

export const deleteResponsibility = (experience, responsibilityID) => {
  console.log(experience);
  const newResponsibilitiesArray = experience.responsibilities.filter(
    (responsibility) => {
      return responsibility.id !== responsibilityID;
    }
  );

  return { ...experience, responsibilities: newResponsibilitiesArray };
};
