import React from 'react';
import '../styles/globals.css';
import {QuestionsProvider} from "@/components/context/QuestionProvider";
import {ResultsProvider} from "@/components/context/ResultsProvider";
import {SearchProvider} from "@/components/context/SearchProvider";

export default function Layout({children}: { children: React.ReactNode }) {



	return (
		<html lang="en">
		<head>
			<meta charSet="UTF-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			<title>Popário</title>
		</head>
		<body className={'bg-[var(--color-bg)] text-[var(--color-text)]'}>
		<div className="min-h-screen">
			<header
				className="py-4 bg-[var(--color-header)] text-white flex item-center text-center justify-center font-bold text-xl shadow"
				role="banner">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
					 stroke="currentColor" className="size-6 h-auto">
					<path strokeLinecap="round" strokeLinejoin="round"
						  d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
				</svg>
				Popário
			</header>
			<main role="main"
				  className="max-w-2xl mx-auto p-4">
				<SearchProvider>
					<ResultsProvider>
						<QuestionsProvider>
							{children}
						</QuestionsProvider>
					</ResultsProvider>
				</SearchProvider>
			</main>
			<footer role="contentinfo"
					className="py-2 text-center text-xs mt-8">
				&copy; {new Date().getFullYear()} Popário. All rights reserved.
			</footer>
		</div>
		</body>
		</html>
	);
}
