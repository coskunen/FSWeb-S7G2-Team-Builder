import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import initialMembers from './teamMembers';

const emptyForm = [{
  name: "",
  role:"",
  favoriteTime: "",
}];

function App() {
  const[teamMembers , setTeamMembers] = useState(initialMembers);
  const [ formData , setFormData] = useState(emptyForm);

function changeHandler (event) {
  console.log(formData, event.target.value);
  const stateOnChange ={
    ...formData , [event.target.name] : event.target.value
  };
  setFormData(stateOnChange);
}
function submitHandler (event){
  event.preventDefault();
  setTeamMembers([...teamMembers,formData])
  console.log(teamMembers);
}
  return (
    <div className="App">
     <form onSubmit={(event) => submitHandler}>
      <label for="user">Name</label>
      <input value ={emptyForm.name} 
      onChange={(e) => changeHandler(e)}
      id="user" 
      type="text" 
      placeholder='Name-Surname'/><br/>
      <label for="role"> Role </label>
      <select id="role">
    <option value="">--Please choose an option--</option>
    <option  value="frontend">Frontend</option>
    <option value="backend">Backend</option>
    <option value="desingner">Desingner</option>
    <option value="tester">Tester</option>
</select><br/>
<div>
<legend for="time">Favorite Time </legend>
 <input onChange={changeHandler} id= "gece"
 type="radio" 
 label="gece" 
 value="gece" />
 <label for="gece">Gece</label> 
 <input id= "gunduz"type="radio" label="gunzduz" value="gunduz" />
 <label for="gunduz">Gunduz</label>  <br/>
 </div>
<button >Sumbit</button>
<button>Cancel</button>
     </form>
    </div>
  );
}

export default App;
