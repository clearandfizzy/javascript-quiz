import React from 'react';

export const useOnKeyDown = () => {

	const onKeyDown = (
		e: React.KeyboardEvent<any>
	) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			e.currentTarget.click();
		}
	}

	return {onKeyDown};
}


