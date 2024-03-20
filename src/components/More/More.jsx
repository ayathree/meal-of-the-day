import { Link, useNavigate } from "react-router-dom";
import './More.css'


const More = () => {

    const navigate = useNavigate();
    const handleGoBack =()=>{
        navigate(-1);  
      } 
    return (
        <div>
            <div className="more-div-first">
            <div className="more-div" >
                <img src="https://gifdb.com/images/high/cooking-delicious-meal-a12r3ticewzy9sk2.gif" alt="" />
                <Link to={'/meals'}><button  className="more-button">Cuisine</button></Link>
            </div>
           
           
            <div className="more-div">
                <img className="img" src="https://i.pinimg.com/originals/70/1c/4f/701c4f418e5d1bb0b278aea50296c568.gif" alt="" />
                <Link to={'/categories'}><button  className="more-button">Categories</button></Link>

            </div>
            
        </div>

            <button  className="meals-div" onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default More;