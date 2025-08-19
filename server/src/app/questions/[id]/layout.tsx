import React from 'react';
import {ReferenceProvider} from '@/components/context/ReferenceProvider';

export default function QuestionsLayout({children}: { children: React.ReactNode }) {
	return (
		<div className="questions-layout">
			{children}
		</div>
	);
}
