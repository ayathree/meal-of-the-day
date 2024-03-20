import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';

import Meals from './components/Meals/Meals.jsx';
import Categories from './components/Categories/Categories.jsx';
import More from './components/More/More.jsx';
import Mealdetails from './components/Mealdetails/Mealdetails.jsx';
import Categorydetails from './components/Categorydetails/Categorydetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,    
  },            
    
      {
        path:'/more',
        
        element: <More></More>
       
      },
      {
        path:'/meals',
        loader: () =>fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list'),
        element: <Meals></Meals>
      },
      {
        path:'/categories',
        loader: () =>fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list'),
        element: <Categories></Categories>

      },
      {
        path:'/meal/:mealArea',
        loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.mealArea}`),
        element:<Mealdetails></Mealdetails>
      },
      {
        path:'/category/:cateName',
        loader: ({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.cateName}`),
        element:<Categorydetails></Categorydetails>
      }

    
    

  
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
