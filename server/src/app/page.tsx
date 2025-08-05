'use server'
import React from "react";
import {TableBody} from "@/components/landing/TableBody";
import {TableHeader} from "@/components/landing/TableHeader";
import {Header} from "@/components/landing/Header";

const LandingPage = async () => {
	return (<>
		<Header/>
		<table className="w-full mb-8 border-separate border-spacing-y-2">
			<TableHeader/>
			<TableBody/>
		</table>
	</>);
}

export default LandingPage;