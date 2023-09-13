import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_PROJECT } from "../../utils/mutations";
import { FormContainer } from "./Common";
import Auth from "../../utils/auth";

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
        {/* <Slide className="slide-text"> */}
          <h1>What do you want to create?</h1>
        {/* </Slide> */}

        {/* <Fade className="fade-text" delay={1e3} cascade damping={1e-1}> */}
          .........Create a new project and it share with the community
        {/* </Fade> */}

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
