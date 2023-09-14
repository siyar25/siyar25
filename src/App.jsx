import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";

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
        path: "aboutme",
        element: <AboutMe />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
