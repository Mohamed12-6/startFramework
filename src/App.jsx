
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'


const route=createBrowserRouter([
    {path:'',element:<Layout></Layout>,children:[
        {index:true,element:<Home></Home>,},
        { path: "home", element: <Home/> },
        {path:'About',element:<About></About>,},
        {path:'Portfolio',element:<Portfolio></Portfolio>,},
        {path:'Contact',element:<Contact></Contact>,},
    ]}
])


function App() {

    return (
        <>
          <RouterProvider router={route}></RouterProvider>
        </>
    )
}

export default App
