import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_PROJECT } from "../../utils/mutations";
import { QUERY_PROJECTS, QUERY_ME } from "../../utils/queries";
import styled from "styled-components";
import { Fade, Slide } from "react-awesome-reveal";
import { animated, useSpring } from "@react-spring/web";

import Auth from "../../utils/auth";

const FormContainer = styled.div`
  color: #ffc442;
  font-family: "Courier Prime", monospace;
  font-size: 1rem;

  .form-input {
    font-family: "Courier Prime", monospace;
    font-size: 0.9rem;
    color: #175d8f;
    border: 1px solid #d1d5db;
    border-radius: 1rem;
    height: 25vh;
    width: 70%;
    padding: 0.5rem;
  }

  .first-textarea {
    font-family: "Courier Prime", monospace;
    width: 70%;
    font-size: 0.9rem;
    color: #175d8f;
    border: 1px solid #d1d5db;
    border-radius: 1rem;
    height: 20%;
    padding: 0.5rem;
  }

  .form-input:focus {
    outline: 3px solid #4dc4d2;
    border-color: #4dc4d2;
    color: #175d8f;
  }

  .first-textarea:focus {
    outline: 3px solid #4dc4d2;
    border-color: #4dc4d2;
    boarder-radius: 5px;
    color: #175d8f;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  .spring-box {
    width: 200px;
    height: 40px;
    background-color: #175d8f;
    border-radius: 8px;
    font-family: "Courier Prime", monospace;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: yellow;
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Courier Prime", monospace;
    color: #4dc4d2;
    width: 160px;
    color: #175d8f;
    font-size: 18px;
    padding: 10px;
    padding-top: 7px;
    transition: 0.5s;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background: #ffc442;
    margin-top: 20px;
    margin-bottom: 25px;
    box-shadow: 0px 7px 0px 0px #cf920d;
  }

  button:hover {
    box-shadow: none;
    transform: translateY(5px);
    transition: all 0.1s linear;
  }

  button:focus {
    outline: none;
  }

  .textarea-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #175d8f;
    margin: 0 auto;
    margin-left: 10rem;
    margin-right: 10rem;
  }

  textarea {
    height: 100px;
    width: 50%;
    margin: 0.5rem 0;
    align-items: center;
    justify-content: center;
    background-color: lightgrey;
  }

  h1 {
    margin-top: 10rem;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;
  }

  .error-message {
    border: 1px dotted #1b6ce7;

    color: red;
    font-size: 0.8rem;
    margin: 0.5rem 0;
    margin-left: 1rem;
    margin-right: 1rem;

    padding: 2rem;
  }

  .top-container {
  }
  .slide-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .fade-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: "Courier Prime", monospace;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;

    padding-left: 2rem;
  }
  .error-login {
    color: #ffc442;
    font-size: 1rem;
    margin: 0.5rem 0;
  }
`;

const ProjectForm = () => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const [addProject, { error }] = useMutation(ADD_PROJECT, {
    update(cache, { data: { addProject } }) {
      try {
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addProject({
        variables: {
          projectTitle,
          projectDescription,
          projectAuthor: Auth.getProfile().data.username,
        },
      });
      setProjectTitle("");
      setProjectDescription("");
      window.location.assign("/profile");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "projectTitle" && value.length <= 280) {
      setProjectTitle(value);
      // setCharacterCount(value.length);
    }
    if (name === "projectDescription" && value.length <= 2000) {
      setProjectDescription(value);
      //   setCharacterCount2(value.length);
      // }
    }
  };

  return (
    <FormContainer>
      <div className="top-container">
        <Slide className="slide-text">
          <h1>What do you want to create?</h1>
        </Slide>

        <Fade className="fade-text" delay={1e3} cascade damping={1e-1}>
          .........Create a new project and it share with the community
        </Fade>

        {Auth.loggedIn() ? (
          <>
            <form
              className="flex-row justify-center justify-space-between-md align-center box"
              onSubmit={handleFormSubmit}
            >
              <div className=" col-lg-9 textarea-div">
                <textarea
                  className="first-textarea"
                  name="projectTitle"
                  placeholder="Project Title..."
                  value={projectTitle}
                  style={{ lineHeight: "1.5", resize: "vertical" }}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="col-12 col-lg-9 textarea-div">
                <textarea
                  name="projectDescription"
                  placeholder="Project Description..."
                  value={projectDescription}
                  className="form-input w-100"
                  style={{ lineHeight: "1.5", resize: "vertical" }}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="col-12 col-lg-3 button-container">
                <button
                  className="btn btn-primary btn-block py-3"
                  type="submit"
                >
                  Add Project
                </button>
              </div>
              {error && (
                <div className="col-12 my-3 bg-danger text-white p-3 error-message">
                  {error.message}
                </div>
              )}
            </form>
          </>
        ) : (
          <p className="error-message">
            You need to be logged in to create a project. Please{" "}
            <Link className="error-login" to="/">
              login
            </Link>
            .
          </p>
        )}
      </div>
    </FormContainer>
  );
};

export default ProjectForm;
