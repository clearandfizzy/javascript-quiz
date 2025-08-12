import React from 'react';
import '../styles/globals.css';
import {QuestionsProvider} from "@/components/context/QuestionProvider";
import {ResultsProvider} from "@/components/context/ResultsProvider";

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
			<header className="py-4 bg-[var(--color-header)] text-white text-center font-bold text-xl shadow"
					role="banner">Popário
			</header>
			<main role="main"
				  className="max-w-2xl mx-auto p-4">
				<ResultsProvider>
					<QuestionsProvider>
						{children}
					</QuestionsProvider>
				</ResultsProvider>
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
