'use server'

import React from "react";
import {Header} from "@/components/landing/Header";
import {List} from "@/components/landing/List";
import {Search} from "@/components/landing/Search";

const LandingPage = async () => {

	return (<>
		<Header/>
		<Search />
		<List/>
	</>);
}

export default LandingPage;
