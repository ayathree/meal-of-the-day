import { Link, Outlet, useNavigation } from "react-router-dom";

import './Home.css'


const Home = () => {
    const navigation = useNavigation();
    return (
        <div>

            
           
           <img className="img" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d75ec074616811.5c552f550647a.gif" alt="" />
           <h2>Welcome to meal of the day</h2>
           <Link to={'/more'}><button className="button">Click here</button></Link>
           <div className="div">
           {
                navigation.state === 'loading' ? 'Loading....':<Outlet></Outlet>
            }
           </div>
        </div>
            
    );
};

export default Home;