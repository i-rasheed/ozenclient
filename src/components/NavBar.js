import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import UserContext from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
	const { userData, setUserData } = useContext(UserContext);
  	const navigate = useNavigate();

	 const loggedInUser = localStorage.getItem('user')

	  const logout = () => {
		localStorage.setItem("auth-token", "");
		localStorage.setItem("userRole", "");
		setUserData({
		  token: undefined,
		  user: undefined,
		});
		navigate("/");
	  };

	  const loggedInUserRole = localStorage.getItem('userRole')
  return <div>
{loggedInUserRole === 'basic' ? ( <> 
	<header className="tr-header">
      <nav className="navbar navbar-default">
       <div className="container-fluid">
	    <div className="navbar-header">
		 <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
		  <span className="sr-only">Toggle navigation</span>
		  <span className="icon-bar"></span>
		  <span className="icon-bar"></span>
		  <span className="icon-bar"></span>
		 </button>
		 <Link className="navbar-brand" to="/"><img src="temp/assets/img/logo.jpg" alt="Image"/>Ozen</Link>
		</div>
		<div className="navbar-left">
		 <div className="collapse navbar-collapse" id="navbar-collapse">
		  <ul className="nav navbar-nav">
		   <li><Link to='/services'>Business List</Link></li>
		   <li><a href="work.html">Event Planning Checklist</a></li>
		   <li><a href="how.html">How it works</a></li>
		   <li><a href="pricing.html">Contact Us</a></li>
		   
		  </ul>
		 </div>
		</div>
		<div className="navbar-right">                          
		 <ul className="nav navbar-nav">
		  {/* <li><i className="fa fa-user"></i></li>
		  <li><Link to='/register'>Sign In/ Register </Link></li> */}
		  
		 <li className="dropdown mega-avatar">
		  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
		   {/* <span className="avatar w-32"><img src="temp/assets/img/users/2.jpg" className="img-resonsive img-circle" width="25" height="25" alt="..." /></span> */}
		   {/* <span class="avatar w-32">
				  <i class="fa fa-angle-down pull-right"></i>
				</span> */}
		   <span>
			{loggedInUser}
		   </span>
		   
		   
		  </a>
		  <div className="dropdown-menu w dropdown-menu-scale pull-right">
		   <Link to="/mybusiness" className="dropdown-item" href="dashboard.html"><span>View Your Businesses</span></Link> 
		   {/* <a className="dropdown-item" href="profile.html"><span>Edit Profile</span></a>  */}
		   {/* <a className="dropdown-item" href="editprofile.html"><span>Settings</span></a>  */}
		   <button  onClick={logout} className="kafe-btn kafe-btn-mint-small">Sign out</button>
		  </div>
		 </li>
		 
		 
		 </ul>
           
		 <Link to='/postbusiness' className="kafe-btn kafe-btn-mint-small">Post your Business</Link>
		</div>
       </div>
      </nav>
      </header>
</> ) : loggedInUserRole === 'admin' ? ( <>
<header className="tr-header">
      <nav className="navbar navbar-default">
       <div className="container-fluid">
	    <div className="navbar-header">
		 <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
		  <span className="sr-only">Toggle navigation</span>
		  <span className="icon-bar"></span>
		  <span className="icon-bar"></span>
		  <span className="icon-bar"></span>
		 </button>
		 <Link className="navbar-brand" to="/"><img src="temp/assets/img/logo.jpg" alt="Image"/>Ozen</Link>
		</div>
		<div className="navbar-left">
		 <div className="collapse navbar-collapse" id="navbar-collapse">
		  <ul className="nav navbar-nav">
		   <li><Link to='/services'>Business List</Link></li>
		   <li><a href="work.html">Event Planning Checklist</a></li>
		   <li><a href="how.html">How it works</a></li>
		   <li><a href="pricing.html">Contact Us</a></li>
		  </ul>
		 </div>
		</div>
		<div className="navbar-right">                          
		 <ul className="nav navbar-nav">
		  {/* <li><i className="fa fa-user"></i></li>
		  <li><Link to='/register'>Sign In/ Register </Link></li> */}
		  
		 <li className="dropdown mega-avatar">
		  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
		   {/* <span className="avatar w-32"><img src="temp/assets/img/users/2.jpg" className="img-resonsive img-circle" width="25" height="25" alt="..." /></span> */}
		  
		   <span>
			{loggedInUser}
		   </span>
		  </a>
		  <div className="dropdown-menu w dropdown-menu-scale pull-right">
		   <Link to='/services' className="dropdown-item" ><span>Manage Businesses</span></Link> 
		   <Link to='/mybusiness' className="dropdown-item"><span>View your Businesses</span></Link> 
		   {/* <a className="dropdown-item" href="editprofile.html"><span>Settings</span></a>  */}
		   <button  onClick={logout} className="kafe-btn kafe-btn-mint-small">Sign out</button>
		  </div>
		 </li>
		 
		 </ul>
           
		 <Link to='/postbusiness' className="kafe-btn kafe-btn-mint-small">Post your Business</Link>
		</div>
       </div>
      </nav>
      </header>
</> ) : (
	<>
	<header className="tr-header">
      <nav className="navbar navbar-default">
       <div className="container-fluid">
	    <div className="navbar-header">
		 <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
		  <span className="sr-only">Toggle navigation</span>
		  <span className="icon-bar"></span>
		  <span className="icon-bar"></span>
		  <span className="icon-bar"></span>
		 </button>
		 <Link className="navbar-brand" to="/"><img src="temp/assets/img/logo.jpg" alt="Image"/>Ozen</Link>
		</div>
		<div className="navbar-left">
		 <div className="collapse navbar-collapse" id="navbar-collapse">
		  <ul className="nav navbar-nav">
		   <li><Link to='/services'>Business List</Link></li>
		   <li><a href="work.html">Event Planning Checklist</a></li>
		   <li><a href="#">How it works</a></li>
		   <li><a href="#">Contact Us</a></li>
		  </ul>
		 </div>
		</div>
		<div className="navbar-right">                          
		 <ul className="nav navbar-nav">
		  <li><i className="fa fa-user"></i></li>
		  <li><Link to='/register'>Sign In/ Register To Post Your Business</Link></li>
		 
		 </ul>
           
		 {/* <Link to='/postbusiness' className="kafe-btn kafe-btn-mint-small">Post your Business</Link> */}
		</div>
       </div>
      </nav>
      </header>
	</>
) }
     
  </div>;
}
