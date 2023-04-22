import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";




import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";

import Card from "./pages/Card";


import Card1 from "./pages/Card1";
import Slide from "./pages/Slide";

// import Navbar1 from "./components/Navbar1";

import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './app.css';

import "./style.scss"
import Carrier from "./pages/Carrier";
import ResponsiveExample from './pages/ResponsiveExample';
import About from "./pages/About";
import Contact from "./pages/Contact";
import ChatBot from "react-simple-chatbot";
import { Segment } from 'semantic-ui-react';

const Layout = () => {
  return (
    <>

      <Navbar />
      <Slide />
      <Outlet />

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Card/>
      <br></br>
      <br></br>
      <br></br>
      <Card1/>
      <br></br>
      <br></br>
      <br></br>
    
      <Carrier/>
 <ResponsiveExample />
      <Contact/>
      <br></br>
      <br></br>
      <br></br>
      <About/>
  
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Carrier",
        element: <Carrier />,
      },
      
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  const steps = [

    {

      id: "Greet",

      message: "Hello, Welcome to our shop",

      trigger: "Done",

    },

    {

      id: "Done",

      message: "Please enter your name!",

      trigger: "waiting1",

    },

    {

      id: "waiting1",

      user: true,

      trigger: "Name",

    },

    {

      id: "Name",

      message: "Hi {previousValue}, Please select your issue",

      trigger: "issues",

    },

    {

      id: "issues",

      options: [

        {

          value: "React",

          label: "React",

          trigger: "React",

        },

        { value: "Angular", label: "Angular", trigger: "Angular" },

      ],

    },

    {

      id: "React",

      message:

        "Thanks for letting your React issue, Our team will resolve your issue ASAP",

      end: true,

    },

    {

      id: "Angular",

      message:

        "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",

      end: true,

    },
  
  ];
 
  return (
    <>
    <div className="app">
     <div className="container">
     <RouterProvider router={router} />
     </div>
     </div>
   <Segment floated ="right">
  <ChatBot steps={steps} />
  </Segment>
  </>
  );
}




export default App;
