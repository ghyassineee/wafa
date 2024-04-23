import React, { useState } from "react";
import "../assets/css/auth.css";
import axios from "axios";

const RegisterQuestions = ({ formRegisterData, changeView,handleFormRegister }) => {
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
  console.log(answers, formRegisterData, "WWWWWWW");
  const postQA = async (question, answer) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:1129/api/patient/postQA",
        {
          email: formRegisterData.email,
          quest: question,
          answ: answer,
        }
      );
      console.log("Question posted successfully:", response.data);
    } catch (error) {
      console.error("Error posting question-answer pair:", error);
      throw error;
    }
  };

  // const registerPatient = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:1128/api/patient/register",
  //       {
  //         nom: formRegisterData.name,
  //         prenom: formRegisterData.lastName,
  //         email: formRegisterData.email,
  //         phoneNumber: formRegisterData.phoneNumber,
  //         address: formRegisterData.address,
  //         password: formRegisterData.password,
  //         confirmPassword: formRegisterData.repeatPassword,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     if (response.status === 201) {
  //       alert("Registration Successfully done 😃!");
  //       setAnswers([])
  //       changeView("login")
  //       handleFormRegister()
  //     }
  //   } catch (error) {
  //     if (error.response && error.response.status === 422) {
  //       alert("Email is already registered. Please use a different email.");
  //     } else {
  //       console.error("Error registering user:", error);
  //     }
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (answers.length !== 5) {
      alert("Please answer all security questions.");
      return;
    }

    try {
      // await registerPatient();
      for (const { question, response } of answers) {
        await postQA(question, response);
        console.log(
          `Posted question "${question}" with response "${response}"`
        );
      }
      alert("Your security questions are successfully registered")
      changeView("login");
      console.log("Questions registered successfully");
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration. Please try again later.");
    }
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

export default RegisterQuestions;
