
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <h1 className="btn btn-ghost text-xl">  <Link to={"/"}>FireBase Practice</Link>  </h1>
  
  
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to={"login"}>Log In</Link></li>
      <li><Link to={"/reg"}>Registration</Link></li>
      
    </ul>
  </div>
</div>
    );
};

export default Nav;