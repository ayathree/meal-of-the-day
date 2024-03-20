import { useLoaderData, useNavigate } from "react-router-dom";
import Category from "../Category/Category";


const Categories = () => {
    const navigate = useNavigate();
    const categories = useLoaderData();

    const cates = categories.meals

    const handleGoBack =()=>{
        navigate(-1);  
      }
    return (
        <div>
            <div className="more-div-first">
            <div>
            <h2>Total Categories: {cates.length}</h2>
            <img src="https://lh3.googleusercontent.com/proxy/1SLLsikWRmPV5F1LQDs4Am3P20eebutbJPV1EmhqVbPZxQ01DhyC4DmWMKPd31DRAnjAPE00kCtJDHHMDHQFGw6QM_AJ7D3pR4BhShiAZwhUNWgq4r8M9q8" alt="" />
            </div>
            <div className="meal-container">
                {
                    cates.map((cate,idx)=><Category key={idx}
                    cate={cate}></Category>)
                }
            </div>
            
        </div>

            <button className="meals-div" onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default Categories;