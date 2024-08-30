import { useState } from "react";
import classes from "../styles/inputs.module.css";

const PersonalDetails = ({
  educationInfo,
  handleEducationChange,
  handleEducationIsActiveChange,
  handleEducationIsCurrentChange,
  handleAddEducation,
  handleDeleteEducation,
}) => {
  const [dropDown, setDropDown] = useState(false);
  let firstItem = true;
  return (
    <div className={classes.personalDetails}>
      <h1 className={classes.heading} onClick={() => setDropDown(!dropDown)}>
        Education {dropDown ? "⮝" : "⮟"}
      </h1>

      {dropDown &&
        educationInfo.map((education) => {
          return (
            <div
              className={
                firstItem
                  ? classes.experienceFirstSeperator
                  : classes.experienceSeperator
              }
              key={education.id}
            >
              {(firstItem = false)}
              <div className={classes.companyHeader}>
                <div
                  className={classes.universityDropDowns}
                  onClick={() => {
                    handleEducationIsActiveChange(education.id);
                  }}
                >
                  <p>University</p>
                </div>
                <div className={classes.deleteButtonDiv}>
                  <button
                    className={classes.deleteButton}
                    onClick={() => {
                      handleDeleteEducation(education.id);
                    }}
                  >
                    &#x78;
                  </button>
                </div>
              </div>
              <input
                className={classes.mainInputs}
                placeholder={education.university}
                onChange={(event) => {
                  handleEducationChange(
                    education.id,
                    "university",
                    event.target.value
                  );
                }}
              />
              {education.isActive && (
                <div>
                  <p>Degree (Major)</p>
                  <input
                    placeholder={education.major}
                    className={classes.mainInputs}
                    onChange={(event) => {
                      handleEducationChange(
                        education.id,
                        "major",
                        event.target.value
                      );
                    }}
                  />
                  <p>Degree (Minor)</p>
                  <input
                    placeholder={education.minor}
                    className={classes.mainInputs}
                    onChange={(event) => {
                      handleEducationChange(
                        education.id,
                        "minor",
                        event.target.value
                      );
                    }}
                  />
                  <p>Location</p>
                  <input
                    placeholder={education.location}
                    className={classes.mainInputs}
                    onChange={(event) => {
                      handleEducationChange(
                        education.id,
                        "location",
                        event.target.value
                      );
                    }}
                  />
                  <div className={classes.activeDate}>
                    <p>Start Date</p>
                    <div>
                      <p className={classes.current}>
                        Current&nbsp;
                        <input
                          // className={classes.mainInputs}
                          type="checkbox"
                          checked={education.isCurrent}
                          onChange={() =>
                            handleEducationIsCurrentChange(education.id)
                          }
                        ></input>
                      </p>
                    </div>
                  </div>
                  <input
                    className={classes.mainInputs}
                    type="date"
                    onChange={(event) => {
                      handleEducationChange(
                        education.id,
                        "startDate",
                        event.target.value
                      );
                    }}
                  />
                  {!education.isCurrent && (
                    <div>
                      <p>End Date</p>
                      <input
                        className={classes.mainInputs}
                        type="date"
                        onChange={(event) => {
                          handleEducationChange(
                            education.id,
                            "endDate",
                            event.target.value
                          );
                        }}
                      />
                    </div>
                  )}
                </div>
              )}
              <div className={classes.dropDownButtonDiv}>
                <button
                  className={classes.dropDownButton}
                  onClick={() => {
                    handleEducationIsActiveChange(education.id);
                  }}
                >
                  {education.isActive ? "⮝" : "⮟"}
                </button>
              </div>
            </div>
          );
        })}
      {dropDown && (
        <div className={classes.addButtonDiv}>
          <button
            className={classes.addButton}
            onClick={() => {
              handleAddEducation();
            }}
          >
            &#x2b;
          </button>
        </div>
      )}
    </div>
  );
};
// Uni - Date
// Major, Minor - Locations

export default PersonalDetails;
