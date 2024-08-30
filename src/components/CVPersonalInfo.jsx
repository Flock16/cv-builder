import classes from "../styles/cvPersonalInfo.module.css";
const CVPersonalInfo = ({ generalInfo }) => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.personalDetails}>
          <h1>{generalInfo.fullName}</h1>
          <p>
            {generalInfo.email} | {generalInfo.phone} | {generalInfo.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CVPersonalInfo;
