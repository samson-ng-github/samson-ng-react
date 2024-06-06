import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProjectContext } from './App';

// This is the component for each project thumbnail on main page
// On hover, it will show the project name and project type
function ProjectThumbnail(props) {
  const { type, name, slug, color } = props;
  const thumbPath = './assets/thumbnails/' + slug + '.jpg';

  return (
    <li>
      <Link to={'/' + slug}>
        <div>
          <div className="Rollover" style={{ backgroundColor: color }}>
            {type}
            <br />
            {name}
          </div>
          <img alt={name} src={thumbPath} />
        </div>
      </Link>
    </li>
  );
}

export default function ThumbnailPage() {
  // Recieves data from main App component
  const { projectData } = useContext(ProjectContext);

  //Turning project data into a list of ProjectThumbnail components
  const ThumbnalList = projectData.map((project, index) => {
    return <ProjectThumbnail key={index} {...project} />;
  });

  return (
    <div id="main">
      <p>Web applications</p>
      <ul>{ThumbnalList}</ul>
    </div>
  );
}
