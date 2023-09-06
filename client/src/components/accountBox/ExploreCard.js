import { QUERY_PROJECTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { ExploreContainer, ExplorerCard, ExploreCardAuthor, ProjectAuthor, PostTime, CardTitle, ProjectTitle, CardImage} from "./Common.js";
import { Link } from "react-router-dom";
import Earth from "../../assets/earth.png";

function ExploreCard(props) {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];

  console.log(data);

  return (
    <ExploreContainer>
      {projects.map((projects) => (
        <ExplorerCard key={projects._id}>
          <ExploreCardAuthor>
            <ProjectAuthor>@{projects.projectAuthor}</ProjectAuthor>
            <PostTime>{projects.createdAt}</PostTime>
          </ExploreCardAuthor>
          <CardTitle>
            <CardImage src={Earth} />
            <ProjectTitle>
              <Link to={`/projects/${projects._id}`}>
                {projects.projectTitle}
              </Link>
            </ProjectTitle>
          </CardTitle>
        </ExplorerCard>
      ))}
    </ExploreContainer>
  );
}

export default ExploreCard;
