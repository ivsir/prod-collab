import React from "react";
import {ProfileContainer} from "./Common.js"
import { QUERY_USER, QUERY_PROJECTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import AuthService from "../../utils/auth";
import { Link } from "react-router-dom";

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
