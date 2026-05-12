import './InterestTabs.css';
import Profile from './Profile';
import Settings from './Settings';
import Interests from './Interests';
import { Component, useState } from 'react';
import Header from '../Header/Header';

const TabsComponent = () => {
const [PersonalInfo, setPersonalInfo] = useState({
    name: "",
    age: "",
    mobile: "",
    interests: [
        {   id: "01",
            label: "Coding",
            interested: false
        },
        {
            id: "02",
            label: "Music",
            interested: false
        },
        {
            id: "03",
            label: "Travelling",
            interested: false
        }
    ],
    dark_theme: true 
});
const [selectedTab, setSelectedTab] = useState(0);

const tabs = [
    {
        id: 0,
        title: "Profile",
        component: <Profile 
            PersonalInfo={PersonalInfo} 
            setPersonalInfo={setPersonalInfo}
            setSelectedTab={setSelectedTab}/>
    },
    {
        id: 1,
        title: "Interests",
        component: <Interests 
            PersonalInfo={PersonalInfo} 
            setPersonalInfo={setPersonalInfo}/>
    },
    {
        id: 2,
        title: "Settings",
        component: <Settings 
            PersonalInfo={PersonalInfo} 
            setPersonalInfo={setPersonalInfo}/>
    }
]    

function handleOnPrev() {
    setSelectedTab(selectedTab-1);
}
function handleOnNext() {
    setSelectedTab(selectedTab+1);
}
function handleOnSubmit() {
    console.log(PersonalInfo);
}
return (
    <div className='tabs-container'>
        <Header title="Person's Interest Tabs"/>
        <div className='tab-header'>
            {tabs.map((value) => (
                <button 
                className={selectedTab === value.id ?"tab-item-selected":  "tab-item"} 
                key={value.id} 
                onClick={() => setSelectedTab(value.id)}>
                    {value.title}
                </button>
            ))}
        </div>
        <div className='component-container'>
        {tabs[selectedTab].component}
        </div>
        <div className='footer-container'>{selectedTab !== 0 && <button onClick={handleOnPrev}>Prev</button> }{selectedTab === 2 ? <button onClick={handleOnSubmit}>Submit</button> : <button onClick={handleOnNext}>Next</button>}</div>
    </div>
)
}

export default TabsComponent;