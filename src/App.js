import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./screens/Home";
import PostBusiness from './screens/PostBusiness';
import ServicesList from './screens/ServicesList';
import Register from './screens/Register';
import Login from './screens/Login';
import UserContext from "./context/userContext";
import MyBusiness from './screens/MyBusiness';
import EditBusiness from './screens/EditBusiness';





function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/users/tokenIsValid`,
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/users/`,
          {
            headers: { "x-auth-token": token },
          }
        );
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);
  
  return (
    <BrowserRouter>
    <UserContext.Provider value={{ userData, setUserData }}>
        <NavBar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/services" element={<ServicesList />} />
            <Route path="/postbusiness" element={<PostBusiness />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mybusiness" element={<MyBusiness />} />
            <Route path="/business/:id/edit" element={<EditBusiness />} />
          </Routes>
        </div>
     <Footer />
     </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
