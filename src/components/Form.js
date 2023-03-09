import React,{useState} from "react";

function Form(props){
    const [name,setName]=useState("Enter your name");
    const [lastName,setLastName]= useState("Enter your last name");
    const [password,setPassword]=useState("Enter your password");
    
    const [nameError,setNameError]=useState("");
    const [lastNameError,setLastNameError]=useState("");
    const [passwordError,setPasswordError]=useState("");

    function handleChangeName(event){
        setName(event.target.value);
        // setNameError(event.target.value ? "" : "Please enter your first name");
        // console.log("it is nameError " + nameError);
    }  
    
    //console.log(nameError,lastNameError,passwordError);

    function handleChangeLastName(event){
        setLastName(event.target.value);
        // setLastNameError(event.target.value ? "" : "Please enter your last name");
        // console.log("it is lastnameError " + lastNameError);
    }

    function handleChangePassword(event){
        setPassword(event.target.value);
        // const pass_reg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        // setPasswordError(event.target.value ? pass_reg.test(event.target.value)
        //      ? "" : "Password must be at least 6 letters" : "Please enter a password");
        // console.log("It is passwordError"+ passwordError);
     }

     function handleSubmit(event){
        event.preventDefault();
        console.log(validate());
        if(validate())
        {
            console.log("Submit");
        }else {
            console.log("No Submit");
        }
        

     function validate(){
        let isValid=true;
        if(!password){
            setPasswordError("Please enter a password");
            isValid= false;
        }else{
            const pass_reg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
            if(!pass_reg.test(password)){
                setPassword("Password must be at least 6 letters");
            } 
            isValid = false;
        }
        //return isValid;
        if(!name){
            setNameError("Please enter your first name");
            isValid=false;

        }
        if(!lastName){
            setLastNameError("Please enter your last name");
            isValid = false;
        }
        return isValid;
       
     }


    /* function handleSubmit(event){
        event.preventDefault();
        console.log("Submit");
    
        if(name.length==0||lastName.length==0||password.length==0){
            setError(true);
          alert('Please insert your Name');
          
        }
        
      } */

    return <form onSubmit="handleSubmit">
                <label htmlFor="fname">First name:</label>
                <br></br>
                
                {/* //to show error message
                // {error? <label htmlFor="fname">First name:</label>: ""} */}
                <input type="text" id="fname" name="fname" value={name} onChange={handleChangeName}></input>
                <br></br>
                <label htmlFor="lname">Last name:</label>
                <br></br>
                <input type="text" id="lname" name="lname" value={lastname} onChange={handleChangeLastName}></input>
                <br></br>
                <label htmlFor="password">Password:</label>
                <br></br>
                <input type="text" id="password" name="password" value={password} onChange={handleChangePassword}></input>
                <br></br>
                <button onClick={props.onSubmit}></button>
           </form>
}

export default Form