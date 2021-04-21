import React, { useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/App.css";
import "./css/Templates.css";

//The two main parts of the website
import Aside from "./Aside";
import Main from "./Main";

//Json that stores data for all projects
import originalProjectData from "./data/data";

//Template pages for each project
import AboutMeTemplate from "./pages/AboutMeTemplate";
import FacebookTemplate from "./pages/FacebookTemplate";
import Fifa19Template from "./pages/Fifa19Template";
import FitbitTemplate from "./pages/FitbitTemplate";
import FourMpuTemplate from "./pages/FourMpuTemplate";
import FullPageTemplate from "./pages/FullPageTemplate";
import OracleTemplate from "./pages/OracleTemplate";
import PencilDrawingTemplate from "./pages/PencilDrawingTemplate";
import PhiladelphiaTemplate from "./pages/PhiladelphiaTemplate";
import SkyTemplate from "./pages/SkyTemplate";
import VideoTemplate from "./pages/VideoTemplate";

//Context for passing data between components
export const ProjectContext = createContext();

function App() {
  // projectData stores the randomised or filtered project list on the main page.
  const [projectData, setProjectData] = React.useState([]);

  useEffect(() => {
    // On load, randomise originalProjectData's project order.
    resetProjects();
  }, []);

  // This function is passed to nav bar through createContext
  // When you click the website logo, the project list resets
  const resetProjects = () => {
    setProjectData([...originalProjectData].sort(() => Math.random() - 0.5));
  };

  // This function is aslo passed to nav bar through createContext
  // When you click the hastags, it filters out the relevant projects
  const sortProjects = (type) => {
    resetProjects();
    setProjectData((projectData) => {
      return projectData.filter((project) => project.type === type);
    });
  };

  // This is to find the project data by project name
  // The data is passed into the relavent page template to create the page in the router.
  const findData = (name) => {
    const data = originalProjectData.find((project) => project.name === name);
    return data;
  };

  return (
    <div className="App">
      {/*Context Provider*/}
      <ProjectContext.Provider
        value={{
          originalProjectData,
          projectData,
          sortProjects,
          resetProjects,
        }}
      >
        <Router>
          {/*Nav bar*/}
          <Aside />

          <Routes>
            {/*Main project list*/}
            <Route path="/*" element={<Main />} />

            {/*About me page*/}
            <Route path="/about_me" element={<AboutMeTemplate />} />

            {/*Individual project pages*/}
            <Route
              path="/fitbit_christmas20"
              element={
                <FitbitTemplate props={findData("Fitbit: Christmas 2020")} />
              }
            />
            <Route
              path="/fitbit_sense"
              element={<FitbitTemplate props={findData("Fitbit: Sense")} />}
            />
            <Route
              path="/fitbit_backtoschool"
              element={
                <FitbitTemplate props={findData("Fitbit: Back to School")} />
              }
            />
            <Route
              path="/oracle"
              element={<OracleTemplate props={findData("Oracle")} />}
            />
            <Route
              path="/facebook"
              element={<FacebookTemplate props={findData("Facebook")} />}
            />
            <Route
              path="/fifa19"
              element={<Fifa19Template props={findData("Fifa19")} />}
            />
            <Route
              path="/ee"
              element={<FourMpuTemplate props={findData("EE")} />}
            />
            <Route
              path="/btb"
              element={<FourMpuTemplate props={findData("BT Business")} />}
            />
            <Route
              path="/sky"
              element={<SkyTemplate props={findData("Sky Box Sets")} />}
            />
            <Route
              path="/british_gas"
              element={<FullPageTemplate props={findData("British Gas")} />}
            />
            <Route
              path="/tusker"
              element={<FullPageTemplate props={findData("Tusker")} />}
            />
            <Route
              path="/organix"
              element={<FullPageTemplate props={findData("Organix")} />}
            />
            <Route
              path="/phantom_football"
              element={
                <FullPageTemplate props={findData("Phantom Football")} />
              }
            />
            <Route
              path="/spotlight_casino"
              element={
                <FullPageTemplate props={findData("Spotlight Casino")} />
              }
            />
            <Route
              path="/snowfall"
              element={<FullPageTemplate props={findData("Snowfall")} />}
            />
            <Route
              path="/adrian"
              element={
                <PencilDrawingTemplate
                  props={findData("Adrian the Bodybuilder")}
                />
              }
            />
            <Route
              path="/ronan"
              element={
                <PencilDrawingTemplate props={findData("Ronan the Groom")} />
              }
            />
            <Route
              path="/a_touch_of_me"
              element={<VideoTemplate props={findData("A Touch of Me")} />}
            />
            <Route
              path="/heartbeat_in_a_bottle"
              element={
                <VideoTemplate props={findData("Heartbeat in a Bottle")} />
              }
            />
            <Route
              path="/philadelphia"
              element={
                <PhiladelphiaTemplate props={findData("Philadelphia")} />
              }
            />
          </Routes>
        </Router>
      </ProjectContext.Provider>
    </div>
  );
}

export default App;
