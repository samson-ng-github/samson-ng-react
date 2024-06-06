import React from 'react';
import { Link } from 'react-router-dom';

// This is the component for each project thumbnail on main page
// On hover, it will show the project name and project type
export function ProjectThumbnail(props) {
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
