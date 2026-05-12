const Interests = ({PersonalInfo, setPersonalInfo}) =>{

    function handleOnChange(value, id) {
        console.log(value)
  setPersonalInfo(prev => ({
    ...prev,
    interests: prev.interests.map(interest =>
      interest.id === id 
        ? { ...interest, interested: value }
        : interest
    )
  }));    }

return (<div>
{PersonalInfo.interests.map((interest) => (
<div key={interest.id}>
  <input
    id={`interest-${interest.id}`}
    type="checkbox"
    checked={interest.interested}
    onChange={(e) => handleOnChange(e.target.checked, interest.id)}
  />
  
  <label htmlFor={`interest-${interest.id}`}>
    {interest.label}
  </label>
</div>
))
}
</div>)
}

export default Interests;