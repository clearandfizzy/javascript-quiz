import React from 'react';
import './styles/globals.css';
import {QuestionsProvider} from "@/components/context/QuestionProvider";
import {ResultsProvider} from "@/components/context/ResultsProvider";

export default function Layout({children}: { children: React.ReactNode }) {
	return (
		<html lang="en">
		<head>
			<meta charSet="UTF-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			<title>JavaScript Quiz App</title>
		</head>
		<body>
		<div className="min-h-screen bg-gray-50 text-gray-900">
			<header className="w-full py-4 bg-purple-500 text-white text-center font-bold text-xl shadow">
				JavaScript Quiz App
			</header>
			<main className="max-w-2xl mx-auto p-4">
				<ResultsProvider>
					<QuestionsProvider>
						{children}
					</QuestionsProvider>
				</ResultsProvider>
			</main>
			<footer className="w-full py-2 text-center text-xs text-gray-500 mt-8">
				&copy; {new Date().getFullYear()} JavaScript Quizzing App. All rights reserved.
			</footer>
		</div>
		</body>
		</html>
	);
}
