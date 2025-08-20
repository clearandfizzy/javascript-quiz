'use server'

import React from "react";
import {Header} from "@/components/landing/Header";
import {List} from "@/components/landing/List";
import {Search} from "@/components/landing/Search";
import {QuestionLimit} from "@/components/landing/QuestionLimit";

const LandingPage = async () => {

	return (<>
		<Header/>
		<Search />
		<QuestionLimit/>
		<List/>
	</>);
}

export default LandingPage;
