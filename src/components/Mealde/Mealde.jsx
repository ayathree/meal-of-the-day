

const Mealde = ({item}) => {
    const {idMeal,strMeal,strMealThumb}= item
    return (
        <div  className="meal-border">
        <img src={strMealThumb} alt="" />
            <h4>Order Code: {idMeal}</h4> 
        <h2>{strMeal}</h2>
            
        </div>
    );
};

export default Mealde;