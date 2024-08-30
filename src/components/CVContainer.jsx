import classes from "../styles/cvContainer.module.css";
import CVEducationInfo from "./CVEducationInfo";
import CVExperienceInfo from "./CVExperienceInfo";
import CVPersonalInfo from "./CVPersonalInfo";

const CVContainer = ({ generalInfo, experienceInfo, educationInfo }) => {
  return (
    <div className={classes.container}>
      <CVPersonalInfo generalInfo={generalInfo} />
      <CVExperienceInfo experienceInfo={experienceInfo} />
      <CVEducationInfo educationInfo={educationInfo} />
    </div>
  );
};

export default CVContainer;
