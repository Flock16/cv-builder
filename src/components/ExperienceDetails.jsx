import { useState } from "react";
import classes from "../styles/inputs.module.css";
// import { v4 as uuidv4 } from "uuid";

const ExperienceDetails = ({
  experienceInfo,
  handleExperienceChange,
  handleExperienceActiveChange,
  handleExperienceIsCurrentChange,
  handleAddExperience,
  handleDeleteExperience,
  handleUpdateResponsibilityInput,
  handleAddResponsibility,
  handleUpdateResponsibility,
  handleDeleteResponsibility,
}) => {
  const [dropDown, setDropDown] = useState(false);
  // console.log(experienceInfo);
  let firstItem = true;
  return (
    <div className={classes.personalDetails}>
      <h1 className={classes.heading} onClick={() => setDropDown(!dropDown)}>
        Experience {dropDown ? "⮝" : "⮟"}
      </h1>

      {dropDown &&
        experienceInfo.map((experience) => {
          return (
            <div
              className={
                firstItem
                  ? classes.experienceFirstSeperator
                  : classes.experienceSeperator
              }
              key={experience.id}
            >
              {(firstItem = false)}
              <div className={classes.companyHeader}>
                <div className={classes.universityDropDowns}>
                  <p>Company Name</p>
                </div>
                <div className={classes.deleteButtonDiv}>
                  <button
                    className={classes.deleteButton}
                    onClick={() => {
                      handleDeleteExperience(experience.id);
                    }}
                  >
                    x
                  </button>
                </div>
              </div>
              <input
                className={classes.mainInputs}
                placeholder={experience.companyName}
                onChange={(event) => {
                  handleExperienceChange(
                    experience.id,
                    "companyName",
                    event.target.value
                  );
                }}
              />
              {experience.isActive && (
                <div>
                  <p>Position Title</p>
                  <input
                    className={classes.mainInputs}
                    placeholder={experience.positionTitle}
                    onChange={(event) => {
                      handleExperienceChange(
                        experience.id,
                        "positionTitle",
                        event.target.value
                      );
                    }}
                  />
                  <div className={classes.companyHeader}>
                    <p>Responsibilities</p>
                  </div>
                  {experience.responsibilities.map((responsibility) => {
                    return (
                      <div
                        key={responsibility.id}
                        className={classes.responsibilitiesDiv}
                      >
                        <input
                          value={responsibility.responsibility}
                          className={classes.responsibilitiesInput}
                          onChange={(event) => {
                            handleUpdateResponsibility(
                              experience.id,
                              responsibility.id,
                              event.target.value
                            );
                          }}
                        />
                        <button
                          className={classes.deleteButtonResponsibilities}
                          onClick={() => {
                            handleDeleteResponsibility(
                              experience.id,
                              responsibility.id
                            );
                          }}
                        >
                          x
                        </button>
                      </div>
                    );
                  })}
                  <div className={classes.responsibilitiesDiv}>
                    <input
                      value={experience.resonsibilityInput}
                      placeholder="Add New Responsibility"
                      className={classes.responsibilitiesInput}
                      onChange={(event) => {
                        handleUpdateResponsibilityInput(
                          experience.id,
                          event.target.value
                        );
                      }}
                    />
                    <button
                      className={classes.addButtonResponsibilities}
                      onClick={() => {
                        if (experience.resonsibilityInput !== "") {
                          handleAddResponsibility(experience.id);
                          handleUpdateResponsibilityInput(experience.id, "");
                        }
                      }}
                    >
                      &#x2b;
                    </button>
                  </div>

                  <div className={classes.activeDate}>
                    <p>Start Date</p>
                    <div>
                      <p className={classes.current}>
                        Current&nbsp;
                        <input
                          // className={classes.mainInputs}
                          type="checkbox"
                          checked={experience.isCurrent}
                          onChange={() =>
                            handleExperienceIsCurrentChange(experience.id)
                          }
                        ></input>
                      </p>
                    </div>
                  </div>
                  <input
                    className={classes.mainInputs}
                    type="date"
                    onChange={(event) => {
                      handleExperienceChange(
                        experience.id,
                        "startDate",
                        event.target.value
                      );
                    }}
                  />
                  {!experience.isCurrent && (
                    <div>
                      <p>End Date</p>
                      <input
                        className={classes.mainInputs}
                        type="date"
                        onChange={(event) => {
                          handleExperienceChange(
                            experience.id,
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
                    handleExperienceActiveChange(experience.id);
                  }}
                >
                  {experience.isActive ? "⮝" : "⮟"}
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
              handleAddExperience();
            }}
          >
            &#x2b;
          </button>
        </div>
      )}
    </div>
  );
};

export default ExperienceDetails;
