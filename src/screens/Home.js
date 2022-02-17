import React from 'react';
import {Link} from 'react-router-dom'

export default function Home() {
  return <div>
   
     -<section className="tr-banner section-before bg-image">
      <div className="container">
       <div className="banner-content text-center">
        <h2>Find the best Hands for your events</h2>
       
        <h3>Whether it is a wedding, educational conference, or business convention, meetings, events and so on. We have an endless list of services to ensure that this purpose is achieved seamlessly.</h3>

        
		   <Link to='/services'><button type="submit" className="kafe-btn kafe-btn-mint full-width">Browse Our list!</button></Link>
		  
		
		<div className="row hidden-xs">
				 
		 <div className="col-lg-4 col-sm-6">
		  <div className="features">
			<span className="fa-stack fa-3x">
			 <i className="fa fa-circle fa-stack-2x"></i>
			 <i className="fa fa-clone fa-stack-1x fa-inverse"></i>
			</span>
		  <p>Post Your Business </p>
		  </div>
		 </div>
				 
		 <div className="col-lg-4 col-sm-6">
		  <div className="features">
			<span className="fa-stack fa-3x">
			 <i className="fa fa-circle fa-stack-2x"></i>
			 <i className="fa fa-list-alt fa-stack-1x fa-inverse"></i>
			</span>
            <p>Get Contacted</p>
		  </div>
		 </div>
				 
		 <div className="col-lg-4 col-sm-6">
		  <div className="features">
			<span className="fa-stack fa-3x">
			 <i className="fa fa-circle fa-stack-2x"></i>
			 <i className="fa fa-users fa-stack-1x fa-inverse"></i>
			</span>
            <p>Choose Your Customer</p>
		  </div>
		 </div>
		 
		</div>
		
       </div>
      </div>
     </section>		

	
	 
     <div className="tr-category section-padding">
	  <div className="container">
	   <div className="section-title">
	    <h1>Browse Freelancers By Category</h1>
	   </div>
	    <div className="row">	
		 <div className="category-list tr-list">
		 
		  <div className="col-lg-3">
		   <div className="category-box">
			<a href="hire.html">
			 <span className="icon"><i className="fa fa-code fa-2x"></i></span>
			 <span className="category-title">Web & Mobile Development</span>
			 <span className="category-quantity">(1298)</span>
			</a>
		   </div>
		  </div>
		  <div className="col-lg-3">
		   <div className="category-box">
			<a href="hire.html">
			 <span className="icon"><i className="fa fa-eye fa-2x"></i></span>
			 <span className="category-title">Design, Arts & Multimedia</span>
			 <span className="category-quantity">(76212)</span>
			</a>
		   </div>
		  </div>
		  <div className="col-lg-3">
		   <div className="category-box">
			<a href="hire.html">
			 <span className="icon"><i className="fa fa-edit fa-2x"></i></span>
			 <span className="category-title">Writing & Translation</span>
			 <span className="category-quantity">(212)</span>
			</a>
		   </div>
		  </div>
		  <div className="col-lg-3">
		   <div className="category-box">
			<a href="hire.html">
			 <span className="icon"><i className="fa fa-edit fa-2x"></i></span>
			 <span className="category-title">Admin Support</span>
			 <span className="category-quantity">(972)</span>
			</a>
		   </div>
		  </div>
		  
		 </div>
		 <div className="category-list tr-list">
		 
		  <div className="col-lg-3">
		   <div className="category-box">
			<a href="hire.html">
			 <span className="icon"><i className="fa fa-table fa-2x"></i></span>
			 <span className="category-title">Management & Finance</span>
			 <span className="category-quantity">(1298)</span>
			</a>
		   </div>
		  </div>
		  <div className="col-lg-3">
		   <div className="category-box">
			<a href="hire.html">
			 <span className="icon"><i className="fa fa-bullhorn fa-2x"></i></span>
			 <span className="category-title">Sales & Marketing</span>
			 <span className="category-quantity">(76212)</span>
			</a>
		   </div>
		  </div>
		  <div className="col-lg-3">
		   <div className="category-box">
			<a href="hire.html">
			 <span className="icon"><i className="fa fa-wrench fa-2x"></i></span>
			 <span className="category-title">Engineering & Architecture</span>
			 <span className="category-quantity">(1298)</span>
			</a>
		   </div>
		  </div>
		  <div className="col-lg-3">
		   <div className="category-box">
			<a href="hire.html">
			 <span className="icon"><i className="fa fa-legal fa-2x"></i></span>
			 <span className="category-title">Legal</span>
			 <span className="category-quantity">(76212)</span>
			</a>
		   </div>
		  </div>
		  
		 </div>
			
		</div>
	   </div>
	  </div>	 
	
	
     {/* <section className="tr-fun-fact">
	  <div className="container">
	   <div className="row text-center">
		<div className="col-sm-4">
		 <div className="fun-fact">
		  <i className="fa fa-users fa-3x"></i>
		  <h4 className="counter">5,798,298</h4>
		  <span>Total Users</span>
		 </div>
		</div>
		<div className="col-sm-4">
		 <div className="fun-fact">
		  <i className="fa fa-file-text-o fa-3x"></i>
		  <h4 className="counter">12,043</h4>
		  <span>Job Posts</span>
		 </div>
		</div>
		<div className="col-sm-4">
		 <div className="fun-fact">
		  <i className="fa fa-usd fa-3x"></i>
		  <h4 className="counter">200,400,000</h4>
		  <span>Paid to Freelancers</span>
		 </div>
		</div>
	   </div>		
	  </div>
	 </section> */}
  </div>;
}
