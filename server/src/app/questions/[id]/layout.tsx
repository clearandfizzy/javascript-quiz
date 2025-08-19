import React from 'react';

export default function QuestionsLayout({children}: { children: React.ReactNode }) {
	return (
		<div className="questions-layout">
			{children}
		</div>
	);
}
