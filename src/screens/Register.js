import React, {useState} from 'react';
import {Link} from 'react-router-dom'
// import { useForm } from "react-hook-form";

import Axios from "axios";
import Message from '../components/Message';

// import { useForm } from "react-hook-form";

const initialValues = {
	username: "",
	email: "",
	password: "",
	phonenumber: "",
  };

export default function Register() {
	// const { register, handleSubmit, formState: { errors } } = useForm();
	const [values, setValues] = useState(initialValues);
  	const [error, setError] = useState("");
  	const [isLoading, setIsLoading] = useState(false);
	const [msg, setMsg] = useState()
	// const [isChecked, setIsChecked] = useState(false)
	// const navigate = useNavigate();
	// const { register, handleSubmit } = useForm();

	// const handleCheckChange = () => {
	// 	setIsChecked(!isChecked) //like this
	// }



  	const handleInputChange = (e) => {
    const { name, value } = e.target; 
    setValues({
      ...values,
      [name]: value,
    });
  };

  const clearError = () => {
    setError(undefined);
  };
  const clearMsg = () => {
    setMsg(undefined);
  };


  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const regResponse = await Axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/users/register`,
        values
      );
	  setIsLoading(false)
      setMsg(regResponse.data.message)
    } catch (error) {
      setIsLoading(false);
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      setError(message);
    }
	
  };

  let word;
  if (isLoading) {
    word = "Registering...";
  } else {
    word = "Register";
  }

  return <div>
    <header className="header-login top-page">
      <div className="container">
	   <div className="content">
	    <div className="row">
	     <h1 className="revealOnScroll" data-animation="fadeInDown"> Ozen</h1>
        </div>
       </div>
	  </div>
     </header>

	 <section className="banner-login">
	  <div className="container">
	  		  	
	   <div className="row">
	   
	    <div className="main main-signup col-lg-12">
	     <div className="col-lg-6 col-lg-offset-3 text-center">
				
		  <div className="form-sign">
		   <form onSubmit={onSubmit}>  
		    <div className="form-head">
			 <h3>Register</h3>
			</div>
			{error && <Message message={error} clearError={clearError} /> }
			{msg && <Message success={msg} clearMsg={clearMsg} /> }
            <div className="form-body">            	
            	
			
             <div className="form-row">
			  <div className="form-controls">
			   <input 
			   type="text" 
			   name="username" 
			   className="field" 
			   placeholder="Username" 
               onChange={handleInputChange}
               value={values.username} 
			   required
			//    {...register("username", { required: true, maxLength: 12 })}
			   />
			  </div>
			  {/* {errors.userName && <p>Max length is 10</p>} */}
             </div>		
             
             <div className="form-row">
			  <div className="form-controls">
			   <input 
			   type="email" 
			   name="email" 
			   className="field" 
			   placeholder="abc@gmail.com"
			   onChange={handleInputChange}
			   required
               value={values.email}
			   
			//    {...register("email",
			// 		{
			// 			required: true,
			// 			pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			// 		})}
			   />
			  </div>
			  {/* {errors.email && <p>Must be a valid email</p>} */}
             </div>
             
			 
             <div className="form-row">
			  <div className="form-controls">
			   <input 
			   type="password" 
			   name="password" 
			   className="field" 
			   placeholder="Password" 
			   onChange={handleInputChange}
               value={values.password}
			   required
			   />
			  </div>
             </div>

			 <div className="form-row">
			  <div className="form-controls">
			   <input 
			   type="number" 
			   name="phonenumber" 
			   className="field" 
			   placeholder="Enter your phone contact e.g +2348124354657" 
			   onChange={handleInputChange}
               value={values.phonenumber}
			   required
			   />
			  </div>
             </div>
			 {/* <div className="checkbox"> 
			  <label> <input onChange={handleCheckChange} checked={isChecked} type="checkbox" /> Agree to the terms and policy </label> 
			 </div> */}
		   
			 </div>
			 <p style={{color: "white"}}>Already have an Account ? <Link to='/login'>Login</Link></p>
			 
	
			 <div className="form-foot">
			  <div className="form-actions">
               <input type="hidden" name="token" value="<?php echo Token::generate(); ?>" />
			   <input type="submit" disabled={!values.username || !values.email || !values.password || !values.phonenumber} name="register" value={word} className="kafe-btn kafe-btn-default full-width" />
			  </div>
			 </div>
		   </form>
		   
		  </div>
	     </div>
        </div>
		
	   </div>
	  </div>
     </section>	
  </div>;
}
