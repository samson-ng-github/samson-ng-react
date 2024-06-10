import { useContext } from 'react';
import { ProjectContext } from '../App';
import { Section } from './Section';

export default function ThumbnailPage() {
  const {
    webProjects,
    bannerProjects,
    billboardProjects,
    isWebSectionOn,
    isBannerSectionOn,
    isBillboardSectionOn,
  } = useContext(ProjectContext);
  return (
    <div className="page">
      <div className="main">
        {isWebSectionOn ? (
          <Section
            header="Web applications"
            color="#131a3f"
            projects={webProjects}
          />
        ) : (
          ''
        )}
        {isBannerSectionOn ? (
          <Section
            header="JavaScript banners"
            color="#60134d"
            projects={bannerProjects}
          />
        ) : (
          ''
        )}
        {isBillboardSectionOn ? (
          <Section
            header="Digital billboards"
            color="#0f3b00"
            projects={billboardProjects}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
