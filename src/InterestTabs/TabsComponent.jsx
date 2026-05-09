import './InterestTabs.css';
import Profile from './Profile';
import Settings from './Settings';
import Interests from './Interests';
import { Component, useState } from 'react';
import Header from '../Header/Header';

const TabsComponent = () => {
const [PersonalInfo, setPersonalInfo] = useState({});
const [selectedTab, setSelectedTab] = useState(0);

const tabs = [
    {
        id: 0,
        title: "Profile",
        component: <Profile 
            PersonalInfo={PersonalInfo} 
            setPersonalInfo={setPersonalInfo}/>
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
    </div>
)
}

export default TabsComponent;