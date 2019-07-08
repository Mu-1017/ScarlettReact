import React from 'react';
import './App.css';
import SectionHeader from './SectionHeader/SectionHeader'
import Banner from './Banner/Banner'
import Profile from './Profile/Profile'

function App() {
  return (
    <div className="App">
      <Banner />

      <SectionHeader name="Profile" desc="I am a software developer"/>
      <Profile />

      <SectionHeader name="Experience" desc="Here's what I've done so far"/>
      <Profile />
    </div>
  );
}

export default App;
