import React from "react";
import "../../styles/home.css";
import Characters from "./Characters";
import Planets from "./Planets";

export const Home = () => (
	<div className="container ms-5 mt-5">
		<h1 className="text-danger text-center m-2">Characters</h1>
		<Characters />
		<h1 className="text-danger text-center m-2">Planets</h1>
		<Planets />
	</div>
);
