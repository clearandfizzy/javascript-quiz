import React from 'react';

export const useHandleKeyDown = () => {

	const onKeyDown = (e: React.KeyboardEvent<any>) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.currentTarget.click();
		}
	};

	return {onKeyDown};
};