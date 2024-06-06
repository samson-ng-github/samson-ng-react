import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import './css/Templates.css';

//The two main parts of the website
import Aside from './Aside';
import ThumbnailPage from './ThumbnailPage';

//Json that stores data for all projects
import { webProjects, bannerProjects, billboardProjects } from './data/data';

//Template pages for each project
import AboutMe from './pages/AboutMe';
import Meta4 from './pages/Meta4';
import Facebook from './pages/Facebook';
import Fifa from './pages/Fifa';
import FitbitTemplate from './pages/templates/FitbitTemplate';
import Mpu4xTemplate from './pages/templates/Mpu4xTemplate';
import FullPageTemplate from './pages/templates/FullPageTemplate';
import Oracle from './pages/Oracle';
import Philadelphia from './pages/Philadelphia';
import Dooh6xTemplate from './pages/templates/Dooh6xTemplate';
import Sky from './pages/Sky';
import Meta3 from './pages/Meta3';
import VideoTemplate from './pages/templates/VideoTemplate';

//Context for passing data between components
export const ProjectContext = createContext();

function App() {
  // projectData stores current project list on the main page.
  const [isWebSectionOn, setWebSection] = useState(true);
  const [isBannerSectionOn, setBannerSection] = useState(true);
  const [isBillboardSectionOn, setBillboardSectionOn] = useState(true);

  const resetProjects = () => {
    setWebSection(true);
    setBannerSection(true);
    setBillboardSectionOn(true);
  };

  const showWebSection = () => {
    setWebSection(true);
    setBannerSection(false);
    setBillboardSectionOn(false);
  };

  const showBannerSection = () => {
    setWebSection(false);
    setBannerSection(true);
    setBillboardSectionOn(false);
  };

  const showBillboardSection = () => {
    setWebSection(false);
    setBannerSection(false);
    setBillboardSectionOn(true);
  };

  // This is to find the project data by project name
  // The data is passed into the relavent page template to create the page in the router.
  const findData = (name) => {
    const data = webProjects.find((project) => project.name === name);
    return data;
  };

  return (
    <div className="App">
      {/*Context Provider*/}
      <ProjectContext.Provider
        value={{
          webProjects,
          isWebSectionOn,
          setWebSection,
          showWebSection,
          bannerProjects,
          isBannerSectionOn,
          setBannerSection,
          showBannerSection,
          billboardProjects,
          isBillboardSectionOn,
          setBillboardSectionOn,
          showBillboardSection,
          resetProjects,
        }}
      >
        <Router>
          {/*Nav bar*/}
          <Aside />

          <Routes>
            {/*Thumbnail page*/}
            <Route path="/*" element={<ThumbnailPage />} />

            {/*About me page*/}
            <Route path="/about_me" element={<AboutMe />} />

            {/*Individual project pages*/}
            <Route
              path="/meta3"
              element={<Dooh6xTemplate props={findData('Metaverse 3')} />}
            />
            <Route
              path="/meta4"
              element={<Dooh6xTemplate props={findData('Metaverse 4')} />}
            />
            <Route
              path="/meta1"
              element={<Meta3 props={findData('Metaverse 1')} />}
            />
            <Route
              path="/meta2"
              element={<Meta4 props={findData('Metaverse 2')} />}
            />
            <Route
              path="/meta_eu"
              element={<Dooh6xTemplate props={findData('Meta: Europe')} />}
            />
            <Route
              path="/ig_ywb"
              element={<Mpu4xTemplate props={findData('Instagram')} />}
            />
            <Route
              path="/fitbit_seasonal"
              element={<FitbitTemplate props={findData('Fitbit: Seasonal')} />}
            />
            <Route
              path="/fitbit_sense"
              element={<FitbitTemplate props={findData('Fitbit: Sense')} />}
            />
            <Route
              path="/fitbit_backtoschool"
              element={
                <FitbitTemplate props={findData('Fitbit: Back to School')} />
              }
            />
            <Route
              path="/oracle"
              element={<Oracle props={findData('Oracle')} />}
            />
            <Route
              path="/facebook"
              element={<Facebook props={findData('Facebook')} />}
            />
            <Route
              path="/fifa"
              element={<Fifa props={findData('Fifa: Champion Rise')} />}
            />
            <Route
              path="/ee"
              element={<Mpu4xTemplate props={findData('EE')} />}
            />
            <Route
              path="/btb"
              element={<Mpu4xTemplate props={findData('BT Business')} />}
            />
            <Route
              path="/sky"
              element={<Sky props={findData('Sky Box Sets')} />}
            />
            <Route
              path="/british_gas"
              element={<FullPageTemplate props={findData('British Gas')} />}
            />
            <Route
              path="/tusker"
              element={<FullPageTemplate props={findData('Tusker')} />}
            />
            <Route
              path="/organix"
              element={<FullPageTemplate props={findData('Organix')} />}
            />
            <Route
              path="/phantom_football"
              element={
                <FullPageTemplate props={findData('Phantom Football')} />
              }
            />
            <Route
              path="/spotlight_casino_3d"
              element={
                <FullPageTemplate props={findData('Spotlight Casino 3D')} />
              }
            />
            <Route
              path="/snowfall_3d"
              element={<FullPageTemplate props={findData('Snowfall 3D')} />}
            />
            <Route
              path="/a_touch_of_me"
              element={<VideoTemplate props={findData('A Touch of Me')} />}
            />
            <Route
              path="/heartbeat_in_a_bottle"
              element={
                <VideoTemplate props={findData('Heartbeat in a Bottle')} />
              }
            />
            <Route
              path="/philadelphia"
              element={<Philadelphia props={findData('Philadelphia')} />}
            />
          </Routes>
        </Router>
      </ProjectContext.Provider>
    </div>
  );
}

export default App;
