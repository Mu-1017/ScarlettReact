import React from 'react';
import './Experience.css';

const careers = [
    {
        company: "WS Audiology",
        overview: "Medical Device",
        location: "Singapore",
        logo: "WSA.png",
        duration: "October 2019 - Present",
        title: "Senior Engineer",
        desc: "Working as a scrum team architect, responsible for designing architecture/workflow for new features, monitoring code quality, collaborating with other teams for any technical issue, as well as normal development task.",
        desc2:"Improved performance for multiple features by code refactoring or workflow redesigning, one of which achieved 30~50 percent performance increase."
    },
    {
        duration: "July 2018 - October 2019",
        title: "Engineer II",
        desc: "Worked as a scrum developer for hearing aid fitting software.",
        desc2:"Besides usual development tasks, I also created an internal training website for new joiners during my probation."
    },
    {
        company: "CyberOptics Pte. Ltd",
        overview: "Electrical & Electronic Manufacturing",
        logo: "cyber.png",
        location: "Singapore",
        duration: "June 2017 - July 2018",
        title: "Software Engineer",
        desc: "Worked as scrum developer, perform research and development tasks.",
        desc2:"Responsible for the quality and on-time delivery of the work-products throughout the software development lifecycle."
    },
    {
        company: "ST Electronics",
        logo: "st.png",
        overview: "Electrical & Electronic Manufacturing",
        location: "Singapore",
        duration: "Jan 2013 - June 2017",
        title: "Senior/Software Engineer",
        desc: "Design and develop embeded windows applications running on Automatic fare collection system(ticket issuing machine, automatic gate, etc).",
        desc2:"Provide customer support and operater training."
    },
    {
        duration: "Feb 2012 - May 2012",
        title: "Intern(Software Testing)",
        desc: "Analyze requirements for validity and feasibility, collaborate closely with other team members, execute system testing."
    },
    {
        company: "Konka Group Co,.Ltd",
        logo: "konka.png",
        overview: "Telecommunications",
        location: "Shenzhen, China",
        duration: "Mar 2011 - Jun 2011",
        title: "Intern(Software Developer)",
        desc: "Developed a bluetooth remote control component for MTK platform mobile phone."
    }];

    const educations = [
        {
            company: "Nanyang Technological University",
            logo: "nanyang.png",
            duration: "2011 - 2012",
            title: "MSc in Digital Media Technology",
            location: "Singapore"
        },
        {
            company: "Chang'an University",
            logo: "changan.jpg",
            duration: "2007 - 2011",
            title: "B.Eng in Industrial Automation",
            location: "Xi'an, China"
        }];

    const HistoryRow = (props)=>
        <div className="container">
            {!!props.company > 0 &&
            <div>
                <hr id="linebreak"/>
                <div className="row d-flex justify-content-left">
                    <img className="float-left logo img-thumbnail" alt="company logo" 
                        src={process.env.PUBLIC_URL + '/photo/'+ props.logo}/>
                    <div className="text-left">
                        <h3>{props.company}</h3>
                        <div className="row d-flex">
                            <p className="light"><i className="map-icon fas fa-map-marker-alt fa-lg"></i>{props.location}</p>
                            <p className="light">{props.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
            }

            <div className="row d-flex justify-content-center">
                <div className="col-sm-4 col-md-6 text-right">
                   {props.duration}
                </div>
                <div className="col-sm-8 col-md-6 text-left">                  
                    <h4>{props.title}</h4>
                    <p>{props.desc}</p>
                    <p>{props.desc2}</p>
                </div>
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
                    desc={item.desc} desc2={item.desc2}
                    location={item.location}
                    overview={item.overview}
                    logo={item.logo}/>
                )}
            </div>

            <div>
                {
                    educations.map(item=>
                    <HistoryRow company={item.company} 
                    logo={item.logo}
                    duration={item.duration} 
                    title={item.title}
                    desc={item.desc} desc2={item.desc2}
                    location={item.location}/>
                )}
            </div>
        </div>
    );
}
export default Experience;