import PersonalDetails from "./PersonalDetails";
import ExperienceDetails from "./ExperienceDetails";
import EducationDetails from "./EducationDetails";
import classes from "../styles/inputContainer.module.css";

const InputContainer = ({
  setGeneralInfo,
  generalInfo,
  experienceInfo,
  handleExperienceChange,
  handleExperienceActiveChange,
  handleExperienceIsCurrentChange,
  handleAddExperience,
  handleDeleteExperience,
  educationInfo,
  handleEducationChange,
  handleEducationIsActiveChange,
  handleEducationIsCurrentChange,
  handleAddEducation,
  handleDeleteEducation,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.inputSectionPadding}>
        <PersonalDetails
          setGeneralInfo={setGeneralInfo}
          generalInfo={generalInfo}
        />
      </div>
      <div className={classes.inputSectionPadding}>
        <ExperienceDetails
          experienceInfo={experienceInfo}
          handleExperienceChange={handleExperienceChange}
          handleExperienceActiveChange={handleExperienceActiveChange}
          handleExperienceIsCurrentChange={handleExperienceIsCurrentChange}
          handleAddExperience={handleAddExperience}
          handleDeleteExperience={handleDeleteExperience}
        />
      </div>
      <div className={classes.inputSectionPadding}>
        <EducationDetails
          educationInfo={educationInfo}
          handleEducationChange={handleEducationChange}
          handleEducationIsActiveChange={handleEducationIsActiveChange}
          handleEducationIsCurrentChange={handleEducationIsCurrentChange}
          handleAddEducation={handleAddEducation}
          handleDeleteEducation={handleDeleteEducation}
        />
      </div>
    </div>
  );
};

export default InputContainer;

{
  /* Personal Details
        Education
        Experinece */
}

{
  /* This can just be an input component */
}
