import { Link } from "react-router-dom";


const Category = ({cate}) => {
    const {strCategory}=cate;
    return (
        <div className="meal-border">
            <Link to={`/category/${strCategory}`}><button>{strCategory}</button></Link>
        </div>
    );
};

export default Category;