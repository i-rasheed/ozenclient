import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from "axios";
import Message from '../components/Message';

const initialValues = {
	businessname: "",
	businesstype: "Event Venue",
	businessno: "",
	city: "",
	address: "",
	description: "",
  };

export default function PostBusiness() {
	const [values, setValues] = useState(initialValues);
	const [imgCollection, setImgCollection] = useState();
	const [error, setError] = useState("");
  	const [isLoading, setIsLoading] = useState(false);
	const [msg, setMsg] = useState()
	
	
	// const navigate = useNavigate()
	
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

	  let token = localStorage.getItem("auth-token");

	  const onSubmit = async (e) => {
		e.preventDefault();

		try {
			const formData = new FormData();
			for (const key of Object.keys(imgCollection)) {
				
				formData.append('imgCollection', imgCollection[key])
				
			}
			formData.append('businessname', values.businessname)
			formData.append('businesstype', values.businesstype)
			formData.append('city', values.city)
			formData.append('businessno', values.businessno)
			formData.append('address', values.address)
			formData.append('description', values.description)
			const config = {     
				headers: { 'content-type': 'multipart/form-data', "x-auth-token": token }
			}

		  setIsLoading(true);
		  const regResponse = await Axios.post(
			`${process.env.REACT_APP_BACKEND_URL}/business/upload-images`,
			formData, config
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

	  const onFileChange = (e) => {
        setImgCollection(e.target.files)
		
		
		
    }
	
	  let word;
	  if (isLoading) {
		word = "Posting...";
	  } else {
		word = "Post";
	  }

  return <div>
     
     <section className="dashboard section-padding">
	  <div className="container">
	   <div className="row">
		
	    <div className="">		

		  <div className="job-box">
		   <div className="job-header">
		    <h4>Add Business</h4>
		   </div>
		   {error && <Message message={error} clearError={clearError} /> }
			{msg && <Message success={msg} clearMsg={clearMsg} /> }
           <form id="addform"  onSubmit={onSubmit}>
		   
              <div className="form-group">	
			    <label htmlFor='businessname'>Name of Business Organization</label>
                <input onChange={handleInputChange} type="text" value={values.businessname} name="businessname" id='businessname' className="form-control" placeholder="Enter your business name" required />
              </div>   
            
            <div className="col-lg-6">
              <div className="form-group">	
			    <label>Business Type</label>
                 <select name="businesstype" className="form-control" value={values.businesstype} onChange={handleInputChange} required >
                 <option value="0" selected disabled>Select your Business</option>
				  <option value="Event Venue">Event Venue</option>
				  <option value="Food And Drinks">Food &amp; Drinks</option>
				  <option value="Cake and Pasteries">Cake &amp; Pasteries</option>
				  <option value="Clothes and Fashion Designer">Clothes &amp; Fashion Designer</option>
				  <option value="DJ and MC">DJ &amp; MC</option>
				  <option value="Event Decor">Event Decor</option>
				  <option value="Makeup Artist">Makeup Artist</option>
				  <option value="Shoes and Bags">Shoes &amp; Bags</option>	
                  <option value="Hair">Hair</option>
                  <option value="Jeweleries">Jeweleries</option>
				 </select>	
              </div> 
            </div> 		
            <div className="col-lg-6 job-sec">
              <div className="form-group">	
			    <label htmlFor='businessno'>Business contact</label>
				<input id='businessno' value={values.businessno} onChange={handleInputChange} type="number" name="businessno" className="form-control" placeholder="Whatsapp Number e.g +2348135764534" required />
              </div> 
            </div>	
            <div className="col-lg-6 job-sec">
              <div className="form-group">	
			    <label htmlFor='city'>City</label>
				<input id='city' value={values.city} onChange={handleInputChange} type="text" name="city" className="form-control" placeholder="City" required/>
              </div> 
            </div>	
			<div className="col-lg-6 job-sec">
              <div className="form-group">	
			    <label htmlFor='address'>Address</label>
				<input id='address' value={values.address} onChange={handleInputChange} type="text" name="address" className="form-control" placeholder="Address" required/>
              </div> 
            </div>
		   
              {/* <div className="form-group">	
			    <label>Pay 500 NGN / 1.20 USD monthly subscription to keep your Business on our platform</label>
				<p>
                 <a href="#" className="selected">Add Bank Card</a>
				</p>
              </div>    */}
              <div className="form-group">	
			    <label htmlFor='imgCollection'>Add Pictures</label>
                <input onChange={onFileChange}  id='imgCollection'  accept=".jpg, .jpeg, .png" type="file" name="imgCollection" className="form-control" placeholder="" required multiple/>
				<div>
				{/* <button className="btn btn-primary mg-10" type="submit">Upload</button> */}
				</div>
			
              </div> 
			 
            
			 {/* <div className="col-lg-6 job-sec"> */}
			  <div className="form-group">	
			   <label htmlFor='description'>Description</label>
			   <textarea id='description' name='description' value={values.description} onChange={handleInputChange} className="form-control" rows="5" placeholder="Provide a more detailed description of your business." required></textarea>
			  </div> 
			  {/* </div> */}
			  
              <button type='submit' className="kafe-btn kafe-btn-mint-small full-width">{word}</button>
           </form>
          </div>		
		
	    </div>	
	        </div>
	    </div>
	</section>
	
  </div>;
}
