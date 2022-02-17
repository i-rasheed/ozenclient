import React, {useState, useEffect} from 'react';
import Axios from "axios";
import Message from "../components/Message";
import { useParams, useNavigate } from "react-router-dom";

const initialValues = {
	businessname: "",
	businesstype: "",
	businessno: "",
	city: "",
	address: "",
	description: "",
  };

export default function EditBusiness() {
  const [values, setValues] = useState(initialValues);
  const [imgCollection, setImgCollection] = useState()
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState();



  // const navigate = useNavigate();

  const params = useParams();
  const { id } = params;
  let token = localStorage.getItem("auth-token");


  useEffect(() => {
    const getBusiness = async () => {
      try {
        setIsLoading(true);
        const businessRes = await Axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/business/${id}/one`,
          {
            headers: { "x-auth-token": token },
          }
        );
        console.log(businessRes.data.title);
        setIsLoading(false);
        setValues({
          businessname: businessRes.data.businessname,
          businesstype: businessRes.data.businesstype,
          businessno: businessRes.data.businessno,
          city: businessRes.data.city,
          address: businessRes.data.address,
          description: businessRes.data.description,
          imgCollection: businessRes.data.imgCollection
        });
        setImgCollection(businessRes.data.imgCollection)
      } catch (error) {
        setIsLoading(false);
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        setError(message);
      }
    };
    getBusiness();
  }, [id, token]);

  const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };

      const clearMsg = () => {
        setMsg(undefined);
      };

      const clearError = () => {
        setError(undefined);
      };

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
            // headers: { 'content-type': 'application/json', "x-auth-token": token }
          }

          setIsLoading(true);
          const editRes = await Axios.put(
          `${process.env.REACT_APP_BACKEND_URL}/business/${id}`,
          formData, config
          );
          setIsLoading(false)
          setMsg(editRes.data.message)
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
            setImgCollection(  e.target.files )
        }
	

  let word;
  if (isLoading) {
    word = "Please wait..";
  } else {
    word = "Submit";
  }








  return <div>
     
  <section className="dashboard section-padding">
 <div className="container">
  <div className="row">
 
   <div className="">		

   <div className="job-box">
    <div className="job-header">
     <h4>Edit Business</h4>
    </div>
    {error && <Message message={error} clearError={clearError} /> }
   {msg && <Message success={msg} clearMsg={clearMsg} /> }
        <form id="addform" method='post' onSubmit={onSubmit}>
    
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
     <input id='city' value={values.city} onChange={handleInputChange} type="text" name="city" className="form-control" placeholder="City" />
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
       <label>Add Pictures</label>
             <input onChange={onFileChange} accept=".jpg, .jpeg, .png" type="file" name="budget" className="form-control" placeholder=""  multiple />
     <div>
     {/* <button className="btn btn-primary mg-10" type="submit">Upload</button> */}
     </div>
   
           </div> 
    
         
    {/* <div className="col-lg-6 job-sec"> */}
     <div className="form-group">	
      <label htmlFor='description'>Description</label>
      <textarea id='description' name='description' value={values.description} onChange={handleInputChange} className="form-control" rows="5" placeholder="Provide a more detailed description of your business."></textarea>
     </div> 
     {/* </div> */}
     
           <button className="kafe-btn kafe-btn-mint-small full-width">{word}</button>
        </form>
       </div>		
 
   </div>	
       </div>
   </div>
</section>

</div>;
}
