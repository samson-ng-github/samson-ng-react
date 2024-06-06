import { ProjectThumbnail } from './ProjectThumbnail';

export const Section = ({ header, color, projects }) => {
  const ThumbnalList = projects.map((project, index) => {
    return <ProjectThumbnail key={index} {...project} />;
  });
  return (
    <div className="section">
      <p
        className="section-header"
        style={{ color: color, borderBottom: `1px solid ${color}` }}
      >
        {header}
      </p>
      <ul>{ThumbnalList}</ul>
    </div>
  );
};
