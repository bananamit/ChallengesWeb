import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Nav } from "./components/nav/Nav";

const RouterPrivate = ({ children }) => {
	const { isLoggedIn } = useContext(AuthContext);
	const navigate = useNavigate();

	const { pathname, search } = useLocation();
	localStorage.setItem("lastPath", `${pathname}${search}`);

	const goToLogIn = () => {
		navigate("/login");
	};

	return isLoggedIn ? (
		children
	) : (
		<>
			<Nav />
			<h1>.</h1>
			<h2>DESLOGUEATE</h2>
			<button onClick={() => goToLogIn()}> Aquí</button>
		</>
	);
};
export default RouterPrivate;