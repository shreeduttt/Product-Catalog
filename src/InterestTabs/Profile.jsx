const Profile = ({PersonalInfo, setPersonalInfo}) =>{
    function handleChange(value, target) {
         setPersonalInfo(prev => ({...prev, [target]: value}));
         console.log(PersonalInfo)
    }
return (<div>
<h3>Enter Personal Info:</h3>
<div className="input-container">
<h6>Name: </h6>
<input type="text" value = {PersonalInfo.name} onChange={(e) => handleChange(e.target.value, "name")}/>
</div>
<div className="input-container">
<h6>Age: </h6>
<input type="text" value = {PersonalInfo.age} onChange={(e) => handleChange(e.target.value, "age")}/>
</div>
<div className="input-container">
<h6>Mobile No: </h6>
<input type="text" value = {PersonalInfo.mobile} onChange={(e) => handleChange(e.target.value, "mobile")}/>
</div>
</div>)
}

export default Profile;