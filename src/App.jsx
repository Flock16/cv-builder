import classes from "./styles/App.module.css";
import CVContainer from "./components/CVContainer";
import InputContainer from "./components/InputContainer";
import { useState } from "react";
import {
  generalInfoPlaceholder,
  experienceInfoPlaceholder,
  educationInfoPlaceholder,
} from "./utils/placeholderData";
import {
  createDefaultEducationObject,
  createDefaultExperienceObject,
  createResponsibility,
  deleteResponsibility,
  updateResponsibility,
} from "./utils/createDefaultData.js";

function App() {
  const [generalInfo, setGeneralInfo] = useState(generalInfoPlaceholder);
  const [experienceInfo, setExperienceInfo] = useState(
    experienceInfoPlaceholder
  );
  const [educationInfo, setEducationInfo] = useState(educationInfoPlaceholder);
  // console.log(experienceInfo);

  const handleExperienceChange = (id, field, value) => {
    setExperienceInfo(
      experienceInfo.map((experience) => {
        return experience.id === id
          ? { ...experience, [field]: value }
          : experience;
      })
    );
  };
  const handleExperienceActiveChange = (id) => {
    setExperienceInfo(
      experienceInfo.map((experience) => {
        return experience.id === id
          ? { ...experience, isActive: !experience.isActive }
          : experience;
      })
    );
  };
  const handleExperienceIsCurrentChange = (id) => {
    setExperienceInfo(
      experienceInfo.map((experience) => {
        return experience.id === id
          ? { ...experience, isCurrent: !experience.isCurrent }
          : experience;
      })
    );
  };

  const handleAddExperience = () => {
    setExperienceInfo([...experienceInfo, createDefaultExperienceObject()]);
  };

  const handleDeleteExperience = (id) => {
    setExperienceInfo(
      experienceInfo.filter((experience) => {
        return experience.id !== id;
      })
    );
  };

  const handleUpdateResponsibilityInput = (id, value) => {
    setExperienceInfo(
      experienceInfo.map((experience) => {
        // console.log(experience.resonsibilityInput);
        return experience.id === id
          ? { ...experience, resonsibilityInput: value }
          : experience;
      })
    );
  };

  const handleAddResponsibility = (id) => {
    setExperienceInfo(
      experienceInfo.map((experience) => {
        // console.log(experience.responsibilities);
        if (experience.id === id) {
          return createResponsibility(experience);
        } else return experience;
      })
    );
  };

  const handleUpdateResponsibility = (id, responsibilityID, value) => {
    setExperienceInfo(
      experienceInfo.map((experience) => {
        if (experience.id === id) {
          return updateResponsibility(experience, responsibilityID, value);
        } else return experience;
      })
    );
  };

  const handleDeleteResponsibility = (id, responsibilityID) => {
    setExperienceInfo(
      experienceInfo.map((experience) => {
        if (experience.id === id) {
          return deleteResponsibility(experience, responsibilityID);
        } else return experience;
      })
    );
  };

  const handleEducationChange = (id, field, value) => {
    setEducationInfo(
      educationInfo.map((education) => {
        return education.id === id
          ? { ...education, [field]: value }
          : education;
      })
    );
  };

  const handleEducationIsActiveChange = (id) => {
    setEducationInfo(
      educationInfo.map((education) => {
        return education.id === id
          ? { ...education, isActive: !education.isActive }
          : education;
      })
    );
  };

  const handleEducationIsCurrentChange = (id) => {
    setEducationInfo(
      educationInfo.map((education) => {
        return education.id === id
          ? { ...education, isCurrent: !education.isCurrent }
          : education;
      })
    );
  };

  const handleAddEducation = () => {
    setEducationInfo([...educationInfo, createDefaultEducationObject()]);
  };

  const handleDeleteEducation = (id) => {
    setEducationInfo(
      educationInfo.filter((education) => {
        return education.id !== id;
      })
    );
  };

  return (
    <div className={classes.container}>
      <InputContainer
        setGeneralInfo={setGeneralInfo}
        generalInfo={generalInfo}
        experienceInfo={experienceInfo}
        handleExperienceChange={handleExperienceChange}
        handleExperienceActiveChange={handleExperienceActiveChange}
        handleExperienceIsCurrentChange={handleExperienceIsCurrentChange}
        handleAddExperience={handleAddExperience}
        handleDeleteExperience={handleDeleteExperience}
        handleUpdateResponsibilityInput={handleUpdateResponsibilityInput}
        handleAddResponsibility={handleAddResponsibility}
        handleUpdateResponsibility={handleUpdateResponsibility}
        handleDeleteResponsibility={handleDeleteResponsibility}
        educationInfo={educationInfo}
        handleEducationChange={handleEducationChange}
        handleEducationIsActiveChange={handleEducationIsActiveChange}
        handleEducationIsCurrentChange={handleEducationIsCurrentChange}
        handleAddEducation={handleAddEducation}
        handleDeleteEducation={handleDeleteEducation}
      />
      <CVContainer
        generalInfo={generalInfo}
        experienceInfo={experienceInfo}
        educationInfo={educationInfo}
      />
    </div>
  );
}

export default App;
