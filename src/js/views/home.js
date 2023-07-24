import React from "react";
import "../../styles/home.css";
import Characters from "./Characters";
import Planets from "./Planets";

export const Home = () => (
	<div className="Container ms-5 mt-5">
		<h1 className="text-danger">Characters</h1>
		<Characters />
		<h1 className="text-danger">Planets</h1>
		<Planets />
	</div>
);
