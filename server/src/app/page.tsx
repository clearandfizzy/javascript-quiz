'use server'

import React from "react";
import {Header} from "@/components/landing/Header";
import {List} from "@/components/landing/List";

const LandingPage = async () => {

	return (<>
		<Header/>
		<List/>
	</>);
}

export default LandingPage;
