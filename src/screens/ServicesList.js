import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import Message from '../components/Message';
import Axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from  'react-loader-spinner'

export default function ServicesList() {
	const [businesses, setBusinesses] = useState([]);
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [msg, setMsg] = useState();

	const loggedInUserRole = localStorage.getItem('userRole')
	
	
	const clearMsg = () => {
	  setMsg(undefined);
	};
  
	const clearError = () => {
	  setError(undefined);
	};
  
	const navigate = useNavigate();
  
	
  
	const editHandler = (id) => {
	  navigate(`/business/${id}/edit`);
	};
  
	const getBusinesses = async () => {
	  try {
		setIsLoading(true);
		const businessRes = await Axios.get(
		  `${process.env.REACT_APP_BACKEND_URL}/business/all`,
		);
		if (businessRes.data.length === 0) {
		  setMsg("Business List is empty. Please check back later");
		}
		setIsLoading(false);
		console.log(businessRes);
		setBusinesses(businessRes.data);
	  } catch (error) {
		setIsLoading(false);
		const message =
		  error.response && error.response.data.message
			? error.response.data.message
			: error.message;
		setError(message);
	  }
	};
  
	useEffect(() => {
	  getBusinesses();
	  // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


	

	



  return <div>

     <section className="featured-users">	
      <div className="container">
			<div className="section-title">
				<h1>Services</h1>
			</div>

	  <div className="row"> 
      <div className="col-lg-9">	  
	   <div className="row">
        {
			isLoading ? (
				<>
				<Oval color="blue" height={50} width={50} /> <p>loading...</p>
				</>
			) : error ? (
				<>
				  <Message message={error} clearError={clearError} />
				</>
			  ) : msg ? (
				<>
				  <Message success={msg} clearMsg={clearMsg} />
				</>
			  ) : (
				<> 
				{
				  businesses.map(el => (
				   <div className="col-md-4" key={el._id}>
				   <div className="card-box text-center">
				   {/* <div className="most-popular">
				   <span>Promoted</span>
				   </div> */}
				   <div className="clearfix"></div>
				   <div className="member-card">
				   <div className="member-thumb">
					 <a href="company.html"><img src="temp/assets/img/users/1.jpg" className="img-circle img-thumbnail" alt="profile-pic" /></a>
					 {/* <i className="fa fa-star member-star text-success" title="verified user"></i> */}
				   </div>
			
				   <div className="small-line-height">
					 <h4><a href="company.html">{el.businessname}</a></h4>
					 <p className="text-muted p-location"><i className="fa fa-map-marker"></i> Nairobi, Kenya</p> 
					 <p className="p-star"> 
					 <i className="fa fa-star rating-star"></i>
					 <i className="fa fa-star rating-star"></i>
					 <i className="fa fa-star rating-star"></i>
					 <i className="fa fa-star rating-star"></i>
					 <i className="fa fa-star rating-star"></i>
					 99% (222)
					 </p>
				   </div>
				   
				   <h5>ISTQB certified Expert QA Engineer, QA Lead</h5>
				   <h6>Company</h6>
				   <p className="text-muted font-16">
					 Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s.
				   </p>
				   
				   </div>
				   
				   <div className="row">
					 <div className="col-sm-4">
					 <h6>1</h6>
					 <p className="bottom">Jobs Done</p>
					 </div>
					 <div className="col-sm-4">
					 <h6>4,345</h6>
					 <p className="bottom">Hours Worked</p>
					 </div>
					 <div className="col-sm-4">
					 <h6>$15.00/hr</h6>
					 <p className="bottom">Hourly Rate</p>
					 </div>
					 
				   </div>
				   {loggedInUserRole === 'admin' && ( <><button className='mng-serv-btn btn btn-danger'>Delete</button>
				   <button className='mng-serv-btn btn btn-secondary'  onClick={() => editHandler(el._id)}>Edit</button> </>)}
				   
				   {/* <button className='mng-serv-btn btn btn-primary' >Promote</button> */}
				   </div>
				   </div> 
				  ))
				  
				}
				</>
			  )
		} 

	
	
		</div>
        </div>
        </div>
        </div>
     </section>
  </div>;
}


