import React from 'react';
import './App.css';
import SectionHeader from './SectionHeader/SectionHeader'
import Banner from './Banner/Banner'
import Profile from './Profile/Profile'
import Professional from './Professional/Professional'
import Experience from './Experience/Experience'
import Contact from "./Contact/Contact"

function App() {
  return (
    <div className="App">
      <Banner />

      <SectionHeader name="A little about me" desc="Live simply. Dream big. Be grateful. Give love. Laugh lots."/>
      <Profile />

      <SectionHeader name="Professional" desc="My knowledge level in software."/>
      <Professional/>

      <SectionHeader name="Experience" desc="Here's what I've done so far..."/>
      <Experience/>

      <SectionHeader name="Contact" desc="I am available for freelance projects and full-time employment"/>
      <Contact/>
    </div>
  );
}

export default App;
