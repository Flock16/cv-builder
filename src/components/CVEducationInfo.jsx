import classes from "../styles/cvEducationInfo.module.css";
// import { v4 as uuidv4 } from "uuid";
import { formatDate } from "../utils/dateFormatFunction";

const CVEducationInfo = ({ educationInfo }) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.header}>Education</h2>
      <div className={classes.seperatorLine}></div>
      {educationInfo.map((education) => {
        return (
          <div className={classes.experienceContainer} key={education.id}>
            <div className={classes.jobHeader}>
              <div className={classes.company_title}>
                <h3>{education.university}</h3>
              </div>
              <div>
                <h4 className={classes.position_date}>
                  {formatDate(education.startDate)} -{" "}
                  {education.isCurrent
                    ? "Current"
                    : formatDate(education.endDate)}
                </h4>
              </div>
            </div>
            <div className={classes.educationHeader}>
              <h4 className={classes.position_date}>
                <b>{education.major}</b> - {education.minor}
              </h4>
              <h4 className={classes.position_date}>{education.location}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CVEducationInfo;
