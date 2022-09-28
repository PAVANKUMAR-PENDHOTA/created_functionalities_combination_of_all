import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Registration from "./Registration";

const routes = [
	// {
	// 	path: "/projects/:id",
	// 	component: () => <Project />,
	// },
	{
		path: "/registration",
		component: () => <Registration />,
	},
	// {
	// 	path: "/topics",
	// 	component: () => <Topics />,
	// },
];

export default function Sidebar() {
	return (
		<Router>
			<div style={{ display: "flex" }}>
				<div
					style={{
						padding: "10px",
						width: "20%",
						height: "100vh",
						background: "#f0f0f0",
					}}>
					<ul style={{ listStyleType: "none", padding: 0 }}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<NavLink to="/registration" activeStyle={{ color: "maroon" }}>
								Registration
							</NavLink>
						</li>
						<li>
							<NavLink to="/topics" activeClassName="text-danger">
								Topics
							</NavLink>
						</li>
					</ul>
				</div>

				<div style={{ flex: 1, padding: "10px" }}>
					<Routes>
						{routes.map((route, index) => (
							<Route key={index} path={route.path} exact={route.exact} component={route.component} />
						))}
					</Routes>
				</div>
			</div>
		</Router>
	);
}
