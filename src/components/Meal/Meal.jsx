import { Link } from "react-router-dom";
import './Meal.css'


const Meal = ({cuisine}) => {
    const{strArea}=cuisine
    
    return (
        
         
        <div className="meal-border">

            <Link to={`/meal/${strArea}`}><button >{strArea}</button></Link>
        </div>
          
           
          
       
    );
};

export default Meal;