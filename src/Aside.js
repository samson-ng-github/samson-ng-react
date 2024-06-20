import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProjectContext } from './App';

// This is the component for each list item in the nav bar
function AsideNavItem(props) {
  const { name, slug, color, external } = props;
  const [hoverColor, setHoverColor] = useState('black');

  // On hover, the text changed to the colour specify in data sheet.
  const hoverStyle = {
    color: hoverColor,
  };

  return (
    <li>
      <Link
        to={'/' + slug}
        style={hoverStyle}
        onMouseOver={() => setHoverColor(color)}
        onMouseOut={() => setHoverColor('black')}
      >
        {name}
      </Link>
    </li>
  );
}

export default function Aside() {
  // Recieves project data, the sorting function and reset funtion from main App component
  const {
    webProjects,
    bannerProjects,
    billboardProjects,
    showWebSection,
    showBannerSection,
    showBillboardSection,
    resetProjects,
  } = useContext(ProjectContext);

  //Turning project data into a list of AsideNavItem components
  const webProjectList = webProjects.map((project, index) => (
    <AsideNavItem key={index} {...project} />
  ));

  const bannerProjectList = bannerProjects.map((project, index) => (
    <AsideNavItem key={index} {...project} />
  ));

  const billboardProjectList = billboardProjects.map((project, index) => (
    <AsideNavItem key={index} {...project} />
  ));

  return (
    <aside>
      {/*Website logo*/}
      <Link to="/" onClick={resetProjects}>
        <img
          className="aside-logo"
          alt="aside-logo"
          src="./assets/samson_ng_logo.png"
        ></img>
      </Link>

      <nav>
        {/*About me page*/}
        <Link id="about-me" to="/about_me">
          About me
        </Link>

        {/*Project list*/}
        <Link className="nav-section-header" to="/" onClick={showWebSection}>
          Web applications
        </Link>
        <ul className="project-ul">{webProjectList}</ul>

        <Link className="nav-section-header" to="/" onClick={showBannerSection}>
          JavaScript banners
        </Link>
        <ul className="project-ul">{bannerProjectList}</ul>

        <Link
          className="nav-section-header"
          to="/"
          onClick={showBillboardSection}
        >
          Digital billboards
        </Link>
        <ul className="project-ul">{billboardProjectList}</ul>

        {/*CV button*/}
        <div className="cv">
          <a
            href="/docs/samson-ng-cv-2024.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button>Download CV</button>
          </a>
        </div>

        {/*Social media buttons*/}
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/samson-ng-5b63a293/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="social-media-icon"
              alt="Linkedin"
              src="./assets/social_media_icons/linkedin.svg"
            ></img>
          </a>
          <a
            href="https://github.com/samson-ng-github"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="social-media-icon"
              alt="GitHub"
              src="./assets/social_media_icons/github.svg"
            ></img>
          </a>
          <a
            href="https://www.instagram.com/samson.ng.travels/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="social-media-icon"
              alt="Instagram"
              src="./assets/social_media_icons/instagram.svg"
            ></img>
          </a>
          <a
            href="https://www.facebook.com/seul.le.samson.ng/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="social-media-icon"
              alt="Facebook"
              src="./assets/social_media_icons/facebook.svg"
            ></img>
          </a>
          <a href="mailto:info@samson-ng.com" target="_blank" rel="noreferrer">
            <img
              className="social-media-icon"
              alt="Email"
              src="./assets/social_media_icons/email.svg"
            ></img>
          </a>
        </div>
      </nav>
    </aside>
  );
}
