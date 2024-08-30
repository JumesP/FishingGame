import { Outlet, Link } from "react-router-dom";
import './Layout.css';


const Layout = () => {
  return (
	<div>
	  <nav>
		<ul>
		  <li>
			<Link to="/">Home</Link>
		  </li>
		  <li>
			<Link to="/FishTank">Fish Tank</Link>
		  </li>
		  <li>
			<Link to="/Main">Main</Link>
		  </li>
		  <li>
		    <Link to="/Rewards">Rewards</Link>
		  </li>
		</ul>
	  </nav>
	  <Outlet />
	</div>
  );
}

export default Layout;