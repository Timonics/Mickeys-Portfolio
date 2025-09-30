import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeLayout from "../layouts/home";
import ProjectsLayout from "../layouts/projects";
import Project from "../pages/projects";
import HireMeLayout from "../layouts/hire-me";
import HireMe from "../pages/hire-me";
import ContactMeLayout from "../layouts/contact-me";
import ContactPage from "../pages/contact";
import AboutMeLayout from "../layouts/about-me";
import AboutMe from "../pages/about";
import MyHubLayout from "../layouts/my-hub";
import MyHub from "../pages/my-hub";
import CaseStudy from "../pages/projects/case-study";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="projects" element={<ProjectsLayout />}>
        <Route index element={<Project />} />
        <Route path=":project/case-study" element={<CaseStudy />} />
      </Route>
      <Route path="hire-me" element={<HireMeLayout />}>
        <Route index element={<HireMe />} />
      </Route>
      <Route path="contact-me" element={<ContactMeLayout />}>
        <Route index element={<ContactPage />} />
      </Route>
      <Route path="about-me" element={<AboutMeLayout />}>
        <Route index element={<AboutMe />} />
      </Route>
      <Route path="my-hub" element={<MyHubLayout />}>
        <Route index element={<MyHub />} />
      </Route>
    </Routes>
  );
};

export default App;
