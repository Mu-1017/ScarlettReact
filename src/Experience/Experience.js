import React from 'react';
import './Experience.css';

const careers = [
    {
        company: "Sivantos Pte. Ltd.",
        duration: "July 2018 - Current",
        title: "Engineer II",
        desc: "To be updated....",
        location: "Singapore"
    },
    {
        company: "CyberOptics Pte. Ltd",
        duration: "June 2017 - July 2018",
        title: "Software Engineer",
        desc: "To be updated....",
        location: "Singapore"
    },
    {
        company: "ST Electronics",
        duration: "Jan 2013 - June 2017",
        title: "Senior/Software Engineer",
        desc: "To be updated....",
        location: "Singapore"
    },
    {
        company: "ST Electronics",
        duration: "Feb 2012 - May 2012",
        title: "Intern(Software Testing)",
        desc: "To be updated....",
        location: "Singapore"
    },
    {
        company: "Konka Group Co,.Ltd",
        duration: "Feb 2012 - May 2012",
        title: "Intern(Software Developer)",
        desc: "To be updated....",
        location: "Shenzhen, China"
    }];

    const educations = [
        {
            company: "Nanyang Technological University",
            duration: "2011 - 2012",
            title: "MSc in Digital Media Technology",
            location: "Singapore"
        },
        {
            company: "Chang'an University",
            duration: "2007 - 2011",
            title: "B.Eng in Industrial Automation",
            location: "Xi'an, China"
        }];

    const HistoryRow = (props)=>
        <div className="row d-flex justify-content-center">
            <div className="col-sm-4 col-md-6 text-left">
                <h3>{props.company}</h3>
                <p>{props.duration}</p>
            </div>
            <div className="col-sm-8 col-md-6 text-left">
                <h4>{props.title}</h4>
                <p>{props.desc}</p>
                <p><i className="map-icon fas fa-map-marker-alt fa-lg"></i>{props.location}</p>
            </div>
        </div>


function Experience() {
    return (
        <div id="main-div" className="container">
            <div>
                {
                    careers.map(item=>
                    <HistoryRow company={item.company} duration={item.duration} 
                    title={item.title}
                    desc={item.desc} 
                    location={item.location}/>
                )}
            </div>
                 
            <hr id="linebreak"/>

            <div>
                {
                    educations.map(item=>
                    <HistoryRow company={item.company} duration={item.duration} 
                    title={item.title}
                    desc={item.desc} 
                    location={item.location}/>
                )}
            </div>
        </div>
    );
}
export default Experience;