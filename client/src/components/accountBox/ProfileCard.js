import React from "react";
import styled from "styled-components";
import { QUERY_USER, QUERY_PROJECTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import AuthService from "../../utils/auth";
import { Link } from "react-router-dom";

const ProfileContainer = styled.div`
  // .ExploreContainer {
  //   display: grid;
  //   grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  //   justify-content: center;
  // }

  // .explore__card {
  //   position: relative;
  //   background-color: var(--color-dark-blue);
  //   margin: 1rem;
  //   padding: 1rem 2rem;
  //   box-shadow: 0 0 0.5rem var(--color-dark-blue);
  //   border-radius: 1rem;
  //   max-width: 100vw;
  //   min-height: 132px;
  //   max-height: 15vh;
  //   transition: 0.2s ease-in-out;
  // }

  // .explore__card:hover {
  //   box-shadow: 0 0 0.5rem var(--color-light-blue);
  // }

  // h1 {
  //   font-family: montserrat;
  //   font-size: 2rem;
  //   color: var(--color-yellow);
  //   text-shadow: 0.1rem 0.1rem 0.25rem var(--color-bg);
  //   text-align: center;
  //   margin: 1rem;
  // }

  // .project__title {
  //   margin-top: 0.8rem;
  //   color: var(--color-yellow);
  //   text-shadow: 0.1rem 0.1rem 0.25rem var(--color-bg);
  //   font-size: 1.5rem;
  //   font-family: montserrat;
  //   text-decoration: none;
  // }

  // .project__title a {
  //   color: var(--color-yellow);
  //   text-shadow: 0.1rem 0.1rem 0.25rem var(--color-bg);
  //   font-size: 1.5rem;
  //   font-family: montserrat;
  //   text-decoration: none;
  // }

  // .project__title a:hover {
  //   text-shadow: 0.15rem 0.15rem 0.5rem var(--color-black);
  // }

  // .project__author {
  //   padding: 1rem 0 0 0.5rem;
  //   color: var(--color-bg);
  //   font-size: 1.1rem;
  //   font-family: montserrat;
  // }

  // .btn-container a {
  //   display: flex;
  //   justify-content: center;
  //   text-decoration: none;
  // }

  // .profile-button {
  //   align: center;
  //   cursor: pointer;
  //   border-radius: 0.5rem;
  //   border: none;
  //   background: var(--color-yellow);
  //   font-family: montserrat;
  //   box-shadow: 0 0.5rem 0 0 #cf920d;
  //   margin: 1rem 1.4rem;
  //   color: var(--color-dark-blue);
  //   font-weight: 600;
  //   text-decoration: none;
  //   font-size: 1.4rem;
  //   padding: 0.8rem;
  //   transition: 0.5s;
  // }

  // button:hover {
  //   box-shadow: none;
  //   transform: translateY(5px);
  //   transition: all 0.1s linear;
  // }

  // button:focus {
  //   outline: none;
  //   text-decoration: none;
  // }
`;

function ProfileCard(props) {
  // const [projectList, setProjectList] = useState('');
  const { loading, data: userData } = useQuery(QUERY_USER, {
    variables: { username: AuthService.getUsername() },
  });

  const { data: projectData } = useQuery(QUERY_PROJECTS);

  const projects = userData?.user.projects || [];
  // setProjectList(projects);

  if (loading && !userData && userData?.length <= 0 && !projectData) {
    return;
  }

  const findTargetProjects = () => {
    if (!projectData) {
      return;
    }

    const allProjects = projectData.projects;

    const userId = AuthService.getId();

    const final = allProjects
      .filter((project) => {
        const members = project.projectMembers;
        return members.some((member) => member.memberId === userId);
      })
      .map((project, index) => (
        <div key={index} className="explore__card">
          <div className="explore__card__title">
            <h3 className="project__title">
              <Link to={`/projects/${project._id}`}>
                Project Title: {project.projectTitle}
              </Link>
            </h3>
          </div>
          <div className="explore__card__content">
            <h4 className="project__author">
              Project Description: {project.projectDescription}
            </h4>
          </div>
        </div>
      ));
    return final;
  };

  const renderProjects = () => {
    let result = null;

    if (projects) {
      result = projects.map((project, i) => {
        return (
          <div key={i} className="explore__card">
            <div className="explore__card__title">
              <h3 className="project__title">
                {/* <a href="projects/1234asdf">Project TItle: blah</a> */}
                <Link to={`/projects/${project._id}`}>
                  Project Title: {project.projectTitle}
                </Link>
              </h3>
            </div>
            <div className="explore__card__content">
              <h4 className="project__author">
                Project Description: {project.projectDescription}
              </h4>
              {/* <button className="share-button"> share your project</button> */}
            </div>
          </div>
        );
      });
    }
    return result;
  };

  return (
    <ProfileContainer>
      {/* <div className="profile-button"><a href="projectform">Create a Project</a></div> */}
      <Link to="/projectform">
        <h1 className="page__title">My Projects</h1>
        <div className="btn-container">
          <button className="profile-button content">
            Create a new project
          </button>
        </div>
      </Link>
      {renderProjects()}
      {findTargetProjects()}
    </ProfileContainer>
  );
}
export default ProfileCard;
