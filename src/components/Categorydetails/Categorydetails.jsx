import { useLoaderData, useNavigate } from "react-router-dom";
import Catede from "../Catede/Catede";


const Categorydetails = () => {
    const navigate = useNavigate();
    const cate = useLoaderData();
    
    const cateItem = cate.meals

    const handleGoBack =()=>{
        navigate(-1);  
      }
    return (
        <div >
            <h2>Total item: {cateItem.length}</h2>
           <div className="meals-container">
           {
                cateItem.map(item=><Catede key={item.idMeal}
                item={item}></Catede>)
            }
           </div>
           <button className="meals-div" onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default Categorydetails;