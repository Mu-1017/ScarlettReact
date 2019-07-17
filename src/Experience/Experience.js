import React from 'react';
import './Experience.css';

const careers = [
    {
        company: "122",
        duration: "123",
        title: "test",
        desc: "kjsafhskjglou akhgkj dfkj giokfg slfg kgjlag o",
        location: "China"
    },
    {
        company: "321",
        duration: "222",
        title: "saf",
        desc: "kjsafhskjglou akhgkj dfkj giokfg slfg kgjlag o",
        location: "China"
    }];

    const educations = [
        {
            company: "Nanyang Technological University",
            duration: "123",
            title: "MSc in Digital Media Technology",
            location: "Singapore"
        },
        {
            company: "Chang'an University",
            duration: "222",
            title: "MSc in Digital Media Technology",
            location: "China"
        }];

    const HistoryRow = (props)=>
        <div className="container-fluid">
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