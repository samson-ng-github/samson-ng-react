import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';

//The two main parts of the website
import Aside from './Aside';
import ThumbnailPage from './thumbnail-page/ThumbnailPage';

//Json that stores data for all projects
import { webProjects, bannerProjects, billboardProjects } from './data/data';

//Template pages for each project
import AboutMe from './pages/AboutMe';
import Meta2 from './pages/Meta2';
import Facebook from './pages/Facebook';
import Fifa from './pages/Fifa';
import FitbitTemplate from './templates/FitbitTemplate';
import Mpu4xTemplate from './templates/Mpu4xTemplate';
import BroadsheetTemplate from './templates/BroadsheetTemplate';
import Oracle from './pages/Oracle';
import Philadelphia from './pages/Philadelphia';
import Dooh6xTemplate from './templates/Dooh6xTemplate';
import Sky from './pages/Sky';
import Meta1 from './pages/Meta1';
import VanGoghPrintshop from './pages/VanGoghPrintshop';
import NCNews from './pages/NCNews';
import PhantomFootball from './pages/PhantomFootball';
import EvilGenius from './pages/EvilGenius';
import ReadySalted from './pages/ReadySalted';

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
  const findWebData = (name) => {
    const data = webProjects.find((project) => project.name === name);
    return data;
  };

  const findBannerData = (name) => {
    const data = bannerProjects.find((project) => project.name === name);
    return data;
  };

  const findBillboardData = (name) => {
    const data = billboardProjects.find((project) => project.name === name);
    return data;
  };

  return (
    <div className="App">
      {/*Context Provider*/}
      <ProjectContext.Provider
        value={{
          webProjects,
          bannerProjects,
          billboardProjects,
          isWebSectionOn,
          isBannerSectionOn,
          isBillboardSectionOn,
          setWebSection,
          setBannerSection,
          setBillboardSectionOn,
          showWebSection,
          showBannerSection,
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

            <Route path="/ready_salted" element={<ReadySalted />} />
            <Route
              path="/van_gogh_printshop"
              element={
                <VanGoghPrintshop props={findWebData('Van Gogh Printshop')} />
              }
            />
            <Route
              path="/nc_news"
              element={<NCNews props={findWebData('NC News')} />}
            />
            <Route
              path="/credit_card_validator"
              element={
                <BroadsheetTemplate
                  props={findWebData('Credit Card Validator')}
                />
              }
            />
            <Route path="/evil-genius" element={<EvilGenius />} />
            <Route
              path="/meta3"
              element={
                <Dooh6xTemplate props={findBillboardData('Metaverse 3')} />
              }
            />
            <Route
              path="/meta4"
              element={
                <Dooh6xTemplate props={findBillboardData('Metaverse 4')} />
              }
            />
            <Route
              path="/meta1"
              element={<Meta1 props={findBannerData('Metaverse 1')} />}
            />
            <Route
              path="/meta2"
              element={<Meta2 props={findBannerData('Metaverse 2')} />}
            />
            <Route
              path="/meta_eu"
              element={
                <Dooh6xTemplate props={findBillboardData('Meta: Europe')} />
              }
            />
            <Route
              path="/ig_ywb"
              element={<Mpu4xTemplate props={findBannerData('Instagram')} />}
            />
            <Route
              path="/fitbit_seasonal"
              element={
                <FitbitTemplate props={findBannerData('Fitbit: Seasonal')} />
              }
            />
            <Route
              path="/fitbit_sense"
              element={
                <FitbitTemplate props={findBannerData('Fitbit: Sense')} />
              }
            />
            <Route
              path="/fitbit_backtoschool"
              element={
                <FitbitTemplate
                  props={findBannerData('Fitbit: Back to School')}
                />
              }
            />
            <Route
              path="/oracle"
              element={<Oracle props={findBannerData('Oracle')} />}
            />
            <Route
              path="/facebook"
              element={<Facebook props={findBannerData('Facebook')} />}
            />
            <Route
              path="/fifa"
              element={<Fifa props={findBannerData('Fifa: Champion Rise')} />}
            />
            <Route
              path="/ee"
              element={<Mpu4xTemplate props={findBannerData('EE')} />}
            />
            <Route
              path="/btb"
              element={<Mpu4xTemplate props={findBannerData('BT Business')} />}
            />
            <Route
              path="/sky"
              element={<Sky props={findBannerData('Sky Box Sets')} />}
            />
            <Route
              path="/british_gas"
              element={
                <BroadsheetTemplate props={findBannerData('British Gas')} />
              }
            />
            <Route
              path="/tusker"
              element={<BroadsheetTemplate props={findWebData('Tusker')} />}
            />
            <Route
              path="/organix"
              element={<BroadsheetTemplate props={findWebData('Organix')} />}
            />
            <Route
              path="/phantom_football"
              element={
                <PhantomFootball props={findWebData('Phantom Football')} />
              }
            />
            <Route
              path="/spotlight_casino_3d"
              element={
                <BroadsheetTemplate
                  props={findWebData('Spotlight Casino 3D')}
                />
              }
            />
            <Route
              path="/snowfall_3d"
              element={
                <BroadsheetTemplate props={findWebData('Snowfall 3D')} />
              }
            />
          </Routes>
        </Router>
      </ProjectContext.Provider>
    </div>
  );
}

export default App;
