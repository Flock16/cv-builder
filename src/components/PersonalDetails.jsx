import { useState } from "react";
import classes from "../styles/inputs.module.css";

const PersonalDetails = ({ setGeneralInfo, generalInfo }) => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className={classes.personalDetails}>
      <h1 className={classes.heading} onClick={() => setDropDown(!dropDown)}>
        Personal Details {dropDown ? "⮝" : "⮟"}
      </h1>

      {dropDown && (
        <div>
          <p>Full Name</p>
          <input
            className={classes.mainInputs}
            placeholder={generalInfo.fullName}
            onChange={(e) => {
              e.target.value !== ""
                ? setGeneralInfo({ ...generalInfo, fullName: e.target.value })
                : setGeneralInfo({ ...generalInfo, fullName: "Full Name" });
            }}
          />
          <p>Email Address</p>
          <input
            className={classes.mainInputs}
            placeholder={generalInfo.email}
            onChange={(e) => {
              e.target.value !== ""
                ? setGeneralInfo({ ...generalInfo, email: e.target.value })
                : setGeneralInfo({ ...generalInfo, email: "Email Address" });
            }}
          />
          <p>Phone Number</p>
          <input
            className={classes.mainInputs}
            placeholder={generalInfo.phone}
            onChange={(e) => {
              e.target.value !== ""
                ? setGeneralInfo({ ...generalInfo, phone: e.target.value })
                : setGeneralInfo({ ...generalInfo, phone: "Phone Number" });
            }}
          />
          <p>Location</p>
          <input
            className={classes.mainInputs}
            placeholder={generalInfo.location}
            onChange={(e) => {
              e.target.value !== ""
                ? setGeneralInfo({ ...generalInfo, location: e.target.value })
                : setGeneralInfo({ ...generalInfo, location: "Location" });
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PersonalDetails;
