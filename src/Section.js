import { ProjectThumbnail } from './ProjectThumbnail';

export const Section = ({ header, color, projects }) => {
  const ThumbnalList = projects.map((project, index) => {
    return <ProjectThumbnail key={index} {...project} />;
  });
  return (
    <div className="section">
      <header>{header}</header>
      <ul>{ThumbnalList}</ul>
    </div>
  );
};
