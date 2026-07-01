import Image from "next/image";
import resume from './data/data.json'
import Header from './components/header'
import About from './components/about'
import Toggle from "./components/toggle";
import Drawer from "./components/drawer";
import WhatIDo from "./components/whatIDo";
import Experience from "./components/experience";
import Skill from "./components/skills";
import Certifications from "./components/certifications";
import Repos from "./components/repos";
import Footer from "./components/footer"

export default function Home() {
  const about = resume.about;
  return (
    <div className="main-wrapper">
      <div className="bg-struct bg-img">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      <div className="mdl-js-layout mdl-layout--fixed-header">
        <Header name={about.name} />
        <Drawer name={about.name} avatar={about.avatar} social={about.social} />

        <main className="main-content relative">
          <div className="container">
            <About />
            <WhatIDo attributes={resume.whatIDo} />
            <Experience experiences={resume.experience} />
            <Skill skills={resume.skills} />
            <Certifications certifications={resume.certifications} />
            <Repos repos={resume.repos} />
            <Footer name={about.name} />
          </div>
        </main>
      </div>
    </div>
  )
}