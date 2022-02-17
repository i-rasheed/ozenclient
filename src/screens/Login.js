import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Axios from "axios";
import Message from '../components/Message';
import UserContext from "../context/userContext";

const initialValues = {
	email: "",
	password: "",
  };

export default function Login() {
	const [values, setValues] = useState(initialValues);
  	const [error, setError] = useState("");
  	const [isLoading, setIsLoading] = useState(false);

	const { setUserData } = useContext(UserContext);
	
	const navigate = useNavigate()
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

	  const submitHandler = async (e) => {
		e.preventDefault();
		try {
		  setIsLoading(true);
		  const loginRes = await Axios.post(
			`${process.env.REACT_APP_BACKEND_URL}/users/login`,
			values
		  );
		  setIsLoading(false);
		  setUserData({
			token: loginRes.data.token,
			user: loginRes.data.user,
		  });
		  localStorage.setItem("auth-token", loginRes.data.token);
		  localStorage.setItem("user", loginRes.data.user.username);
		  localStorage.setItem("userRole", loginRes.data.user.role);
		  navigate("/postbusiness");
		} catch (error) {
		  setIsLoading(false);
		  const message =
			error.response && error.response.data.msg
			  ? error.response.data.msg
			  : error.message;
		  setError(message);
		}
	  };

	  let word;
  if (isLoading) {
    word = "Please wait...";
  } else {
    word = "Login";
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
		   <form onSubmit={submitHandler}>
		    <div className="form-head">
			 <h3>Login</h3>
			</div>
			{error && <Message message={error} clearError={clearError} /> }
			  <div className="margin-space"></div>
            <div className="form-body">            	
            	
			 <div className="form-row">
			  <div className="form-controls">
			   <input 
			   name="email" 
			   placeholder="abc@gmail.com" 
			   className="field" 
			   type="text"
			   onChange={handleInputChange}
               value={values.email}
			   required
			    />
			  </div>
			 </div>

			 <div className="form-row">
			  <div className="form-controls">
			   <input 
			   name="password" 
			   placeholder="Password" 
			   className="field" 
			   type="password" 
			   onChange={handleInputChange}
               value={values.password}
			   required
			   />
			  </div>
			 </div>
			 
			 
		    </div>

			<div className="form-foot">
			 <div className="form-actions">					
              <input type="hidden" name="token" value="<?php echo Token::generate(); ?>" />
			  <input value={word} disabled={!values.email || !values.password} className=" kafe-btn-default full-width" type="submit" />
			  <div className="margin-space"></div>
			  <Link to='/register'><input value="Register"  className="shadow kafe-btn-danger full-width" type="submit" /></Link>
			 </div>
             <div className="form-head">
			  <a href="#" className="more-link">Forgot Password?</a>
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
