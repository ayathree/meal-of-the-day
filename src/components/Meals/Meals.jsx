import { useLoaderData, useNavigate } from "react-router-dom";
import Meal from "../Meal/Meal";
import './Meals.css'


const Meals = () => {
    const meals = useLoaderData();
    const navigate =useNavigate();
    const cuisines = meals.meals
    const handleGoBack =()=>{
      navigate(-1);  
    }

    
    
    
    return (
       <div>
         <div className="more-div-first">
           <div >
           <h2>Cuisine Item: {cuisines.length}</h2> 
           <img src="https://i.pinimg.com/originals/c3/bf/68/c3bf682c860c6a1287c83ff3c95f4820.gif" alt="" />
           </div>
           <div className="meal-container">
            {
              cuisines.map((cuisine, idx)=><Meal key={idx}
              cuisine={cuisine}></Meal>)  
            }
           </div>
           
        </div>

         <button  className="meals-div" onClick={handleGoBack}>Go Back</button>
       </div>
    );
};

export default Meals;