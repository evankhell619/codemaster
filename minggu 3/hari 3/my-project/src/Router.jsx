import { createBrowserRouter } from "react-router-dom"
// import { BrowserRouter } from "react-router-dom"
import ParentComponent from "../src/components/ParentComponent.jsx"
import Home from "../src/pages/Home.jsx"
import App from "./App.jsx"
import Books from "../src/pages/Books.jsx"
import BookDetail from "../src/pages/BookDetail.jsx"
import About from "./pages/About.jsx"
import Login from "./pages/Login.jsx"
// import LoginUser from "../src/pages/LoginUser.jsx"
// import LoginAdmin from "..src/pages/LoginAdmin.jsx"

const router = createBrowserRouter([
  {
    
    path: "/",
    Component:App,
    ParentComponent,
    children: [
      { path: "home",Component: Home},
      { path: "books",Component: Books},
      { path: "login",Component: Login},
      { path: "about",Component: About},
      { path: "books/:id",Component: BookDetail},
    ],
  },
])

export default router