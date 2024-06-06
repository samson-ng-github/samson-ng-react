import { useContext } from 'react';
import { ProjectContext } from './App';
import { Section } from './Section';

export default function ThumbnailPage() {
  const { webProjects, bannerProjects, billboardProjects } =
    useContext(ProjectContext);
  return (
    <div id="thumbnail-page">
      <Section
        header="Web applications"
        color="#131a3f"
        projects={webProjects}
      />
      <Section
        header="JavaScript banners"
        color="#60134d"
        projects={bannerProjects}
      />
      <Section
        header="Digital billboard"
        color="#2c0144"
        projects={billboardProjects}
      />
    </div>
  );
}
