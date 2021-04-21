import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProjectContext } from "./App";

// This is the component for each project thumbnail on main page
// On hover, it will show the project name and project type
function MainProjectItem(props) {
  const { type, name, slug, thumb, color } = props;
  const thumbPath = "./assets/" + thumb;

  return (
    <li>
      <Link to={"/" + slug}>
        <div className="Rollover" style={{ backgroundColor: color }}>
          {type}
          <br />
          {name}
        </div>
        <img alt={name} src={thumbPath} />
      </Link>
    </li>
  );
}

export default function Main() {
  // Recieves data from main App component
  const { projectData } = useContext(ProjectContext);

  //Turning project data into a list of MainProjectItem components
  const MainProjectList = projectData.map((project) => {
    return <MainProjectItem key={project.id} {...project} />;
  });

  return (
    <main>
      <ul>{MainProjectList}</ul>
    </main>
  );
}
