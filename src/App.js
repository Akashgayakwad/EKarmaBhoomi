import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import { useSelector } from "react-redux";

// import { Role } from "./utils/constants"

// components
// import Layout from "./layout/Layout";

// pages
// import Error from "./pages/error/Error";
// import Home from "./pages/home/Home";
// import SkillsHome from "./pages/skillsHome/skillsHome"
// import SkillDetails from './pages/skillDetails/SkillDetails'
// import Applications from './pages/applications/Applications'
// import Profile from './pages/Profile/Profile'
// import Feed from './pages/feed/Feed'
import JobSearch from './jobsearch';
import JobDetail from './jobdetail';

import { isAuthenticated } from './utils/token'

function App(props) {
  return (
      <BrowserRouter>
        <Route exact path="/" component={JobSearch} />
        <Route exact path ="/jobdetails/:id" component={JobDetail} />
      </BrowserRouter>
  );

//   function PrivateRoute({ component: Component, roles, ...rest }) {
//     return (
//       <Route
//       {...rest}
//       render={props => {
//           if (!isAuthenticated()) {
//             // not logged in so redirect to login page with the return url
//             return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
//           }

//           if (roles && roles.indexOf(localStorage.getItem('role'))===-1 ) {
//             // role not authorised so redirect to home page
//             return <Redirect to={{ pathname: '/error'}} />
//           }

//           // authorised so return component
//           return <Component {...props} />
//         }}
//       />
//     );
//   }

}

export default App