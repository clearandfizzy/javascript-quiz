'use client';
import React from "react";
import {useSearchProvider} from "@/components/context/SearchProvider";

export const Search = () => {
	const {setSearchTerm} = useSearchProvider();

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	}

	return (
		<div className="flex justify-center items-center my-8">
			<form className="w-full max-w-md"
				  onSubmit={onSubmit}>
				<input
					onChange={(e) => setSearchTerm(e.target.value)}
					type="text"
					placeholder="Search for a quiz..."
					className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</form>
		</div>
	)
}