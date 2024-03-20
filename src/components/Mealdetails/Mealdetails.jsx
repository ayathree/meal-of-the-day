import { useLoaderData, useNavigate } from "react-router-dom";
import Mealde from "../Mealde/Mealde";
import './Mealdetails.css'


const Mealdetails = () => {
    const meal = useLoaderData();
    const navigate = useNavigate();
    const cuisineDetails = meal.meals
   
    console.log(cuisineDetails)
    const handleGoBack =()=>{
        navigate(-1);  
      }
    return (
        <div>
            <h2>Total Item: {cuisineDetails.length}</h2>

           <div className="meals-container">
            {
                cuisineDetails.map(item=><Mealde key={item.id}
                item={item}></Mealde>)
            }
           </div>
           <button className="meals-div" onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default Mealdetails;