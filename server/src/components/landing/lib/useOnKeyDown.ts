import React, {useCallback} from 'react';

export const useOnKeyDown = () => {

	const onKeyDown = useCallback((
		e: React.KeyboardEvent<any>
	) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			e.currentTarget.click();
		}
	}, []);

	return {onKeyDown};
}


