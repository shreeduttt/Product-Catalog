const Settings = ({PersonalInfo, setPersonalInfo}) =>{

return (<div>
   <h3>Choose Theme</h3>
   <label>
    <input type="radio" name="theme" 
    checked={!PersonalInfo.dark_theme} 
    onChange={() => setPersonalInfo(prev => ({...prev, dark_theme: false}))}
    />
    Light Theme
   </label>
   <label>
    <input type="radio" name="theme" 
    checked={PersonalInfo.dark_theme} 
    onChange={() => setPersonalInfo(prev => ({...prev, dark_theme: true}))}
    />
    Dark Theme
   </label>
</div>)
}

export default Settings;