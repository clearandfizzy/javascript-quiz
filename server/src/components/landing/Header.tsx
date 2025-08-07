import React from "react";

export const Header: React.FC = () => {
	return (<>
		<h1 className="text-4xl font-bold mb-6">Welcome to Quizzical!</h1>
		<p className="text-lg mb-4">Select a quiz to test your knowledge
			<span className="text-purple-500 font-semibold"> and have fun!</span>
		</p>
		<p className="text-gray-600 mb-8">Choose from the following topics:</p>
	</>)
}