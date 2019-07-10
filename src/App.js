import React from 'react';
import './App.css';
import SectionHeader from './SectionHeader/SectionHeader'
import Banner from './Banner/Banner'
import Profile from './Profile/Profile'
import Professional from './Professional/Professional'
import PlaceHolder from './PlaceHolder'

function App() {
  return (
    <div className="App">
      <Banner />

      <SectionHeader name="A little about me" desc="CAUTION: You might get addicted to me."/>
      <Profile />

      <SectionHeader name="Professional" desc="My knowledge level in software."/>
      <Professional/>

      <SectionHeader name="Experience" desc="Here's what I've done so far..."/>
      <PlaceHolder/>
    </div>
  );
}

export default App;
