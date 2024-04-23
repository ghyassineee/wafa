import React, { useState } from "react";
import "../assets/css/auth.css";
import axios from "axios";

const QuestionsForgot = ({ emailForgot, changeView }) => {
  const [answers, setAnswers] = useState([]);

  const handleChange = (e, question) => {
    const { value } = e.target;
    const updatedAnswers = [...answers];
    const existingAnswerIndex = updatedAnswers.findIndex(
      (ans) => ans.question === question
    );

    if (existingAnswerIndex !== -1) {
      if (value) {
        updatedAnswers[existingAnswerIndex].response = value;
      } else {
        updatedAnswers.splice(existingAnswerIndex, 1);
      }
    } else {
      updatedAnswers.push({ question, response: value });
    }

    setAnswers(updatedAnswers);
  };

  const answerForQuest = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:1129/api/patient/forgetPassword",
        {
          email: emailForgot,
          code: "",
          questionsAndAnswers: answers,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("You can change your password");
        changeView("changeForgotPassword");
      } else if (response.status === 403) {
        alert("You should have min 3 success questions");
        changeView("login");
      } else if (response.status === 404) {
        alert(`User with email "${emailForgot}" not found.`);
        changeView("login");
        // setEmailForgot("")
      } else if (response.status === 422) {
        alert("Incorrect code or expired. Please try again.");
      } else if (response.status === 500) {
        alert("Internal server error. Please try again later.");
      } else {
        alert("An unexpected error occurred. Please try again later.");
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        alert("You should have min 3 success questions");
        changeView("login");
      } else {
        console.error("Error during password reset:", error);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answers);
    answerForQuest();
  };

  return (
    <div className="lowin-box lowin-register">
      <div className="lowin-box-inner">
        <form onSubmit={handleSubmit}>
          <p>Answer security questions to reset your password</p>
          <div className="lowin-group">
            <label htmlFor="cityOfBirth">
              Dans quelle ville êtes-vous né(e) ?
            </label>
            <input
              type="text"
              name="cityOfBirth"
              id="cityOfBirth"
              autoComplete="cityOfBirth"
              className="lowin-input"
              value={
                answers.find(
                  (ans) =>
                    ans.question === "Dans quelle ville êtes-vous né(e) ?"
                )?.response || ""
              }
              onChange={(e) =>
                handleChange(e, "Dans quelle ville êtes-vous né(e) ?")
              }
            />
          </div>
          <div className="lowin-group">
            <label htmlFor="mothersMaidenName">
              Quel est le nom de jeune fille de votre mère ?
            </label>
            <input
              type="text"
              name="mothersMaidenName"
              id="mothersMaidenName"
              autoComplete="mothersMaidenName"
              className="lowin-input"
              value={
                answers.find(
                  (ans) =>
                    ans.question ===
                    "Quel est le nom de jeune fille de votre mère ?"
                )?.response || ""
              }
              onChange={(e) =>
                handleChange(
                  e,
                  "Quel est le nom de jeune fille de votre mère ?"
                )
              }
            />
          </div>
          <div className="lowin-group">
            <label htmlFor="petName">
              Quel est le nom de votre animal de compagnie ?
            </label>
            <input
              type="text"
              name="petName"
              id="petName"
              autoComplete="petName"
              className="lowin-input"
              value={
                answers.find(
                  (ans) =>
                    ans.question ===
                    "Quel est le nom de votre animal de compagnie ?"
                )?.response || ""
              }
              onChange={(e) =>
                handleChange(
                  e,
                  "Quel est le nom de votre animal de compagnie ?"
                )
              }
            />
          </div>
          <div className="lowin-group">
            <label htmlFor="favoriteColor">
              Quelle est votre couleur préférée ?
            </label>
            <input
              type="text"
              name="favoriteColor"
              id="favoriteColor"
              autoComplete="favoriteColor"
              className="lowin-input"
              value={
                answers.find(
                  (ans) =>
                    ans.question === "Quelle est votre couleur préférée ?"
                )?.response || ""
              }
              onChange={(e) =>
                handleChange(e, "Quelle est votre couleur préférée ?")
              }
            />
          </div>
          <div className="lowin-group">
            <label htmlFor="childhoodFriend">
              Quel est le nom de votre meilleur(e) ami(e) d'enfance ?
            </label>
            <input
              type="text"
              name="childhoodFriend"
              id="childhoodFriend"
              autoComplete="childhoodFriend"
              className="lowin-input"
              value={
                answers.find(
                  (ans) =>
                    ans.question ===
                    "Quel est le nom de votre meilleur(e) ami(e) d'enfance ?"
                )?.response || ""
              }
              onChange={(e) =>
                handleChange(
                  e,
                  "Quel est le nom de votre meilleur(e) ami(e) d'enfance ?"
                )
              }
            />
          </div>
          <button className="lowin-btn" type="submit">
            Submit
          </button>
          <div className="text-foot">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => changeView("login")}
              className="login-link"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionsForgot;
