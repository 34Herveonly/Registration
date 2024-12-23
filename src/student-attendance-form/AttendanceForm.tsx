import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import "./AttendanceForm.css";

const AttendanceForm = () => {
  const [username, setUsername] = useState<string>("");
  const [registrationNumber, setRegistrationNumber] = useState<string>("");
  const [yearOfStudy, setYearOfStudy] = useState<string>("");
  const [course, setCourse] = useState<string>("");
  const [date, setDate] = useState<string>(""); // Use a string for date
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Validation logic
    if (!username) {
      setErrorMessage("Username is required");
      return;
    }

    if (!registrationNumber) {
      setErrorMessage("Registration number is required");
      return;
    } else if (registrationNumber.length > 9) {
      setErrorMessage("Registration number can't exceed 9 characters");
      return;
    }

    if (!yearOfStudy || isNaN(Number(yearOfStudy)) || yearOfStudy.length > 2) {
      setErrorMessage("Year of study must be a valid number and cannot exceed 2 digits");
      return;
    }

    if (!course) {
      setErrorMessage("Course is required");
      return;
    }

    if (!date) {
      setErrorMessage("Date is required");
      return;
    }

    // Simulate successful submission
    setUsername("");
    setRegistrationNumber("");
    setYearOfStudy("");
    setCourse("");
    setDate("");
    alert("Form submitted successfully!");
  };

  return (
    <div className="wrapper">
      <div className="form-box login">
        <form onSubmit={handleSubmit}>
          <h1>ATTENDANCE FORM</h1>

          {/* Username Field */}
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter Fullname"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Registration Number Field */}
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter Registration Number"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
              required
            />
          </div>

          {/* Department Field */}
          <div className="input-box">
            <input
              type="text"
              placeholder="Department"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            />
          </div>

          {/* Year of Study Field */}
          <div className="input-box">
            <input
              type="text"
              placeholder="Year of Study"
              value={yearOfStudy}
              onChange={(e) => setYearOfStudy(e.target.value)}
              required
            />
          </div>

          {/* Date Field */}
          <div className="input-box">
            <input
              type="date"
              placeholder="Choose date"
              value={date}
              onChange={(e) => setDate(e.target.value)} // Corrected to set the date
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit">Submit</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <p>
            <FaInfoCircle /> Make Sure you Provide valid Information
          </p>
        </form>
      </div>
    </div>
  );
};

export default AttendanceForm;
