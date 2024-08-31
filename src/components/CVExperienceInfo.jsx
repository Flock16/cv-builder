import classes from "../styles/CVExperienceInfo.module.css";
import { formatDate } from "../utils/dateFormatFunction";
const CVExperienceInfo = ({ experienceInfo }) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.header}>Experience</h2>
      <div className={classes.seperatorLine}></div>
      <div>
        {experienceInfo.map((experience) => {
          return (
            <div className={classes.experienceContainer} key={experience.id}>
              <div className={classes.jobHeader}>
                <div className={classes.company_title}>
                  <h3>{experience.companyName} &ensp;</h3>
                  <h4 className={classes.position_date}>
                    {experience.positionTitle}
                  </h4>
                </div>
                <div>
                  <h4 className={classes.position_date}>
                    {formatDate(experience.startDate)} -{" "}
                    {experience.isCurrent
                      ? "Current"
                      : formatDate(experience.endDate)}
                  </h4>
                </div>
              </div>
              <ul>
                {experience.responsibilities.map((responsibility) => {
                  return (
                    <li key={responsibility.id}>
                      {responsibility.responsibility}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CVExperienceInfo;
