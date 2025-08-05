import React, {useEffect} from "react";

type useIntervalProps = {
	props: {
		lastQuestionIndex: number;
		idx: number;
		intervalRef: React.MutableRefObject<NodeJS.Timeout | null>;
	}
}

type useIntervalType = ({props}: useIntervalProps) => void;

export const useInterval: useIntervalType = ({props}) => {
	const {lastQuestionIndex, idx, intervalRef} = props;

	useEffect(() => {
		if (idx === lastQuestionIndex && intervalRef.current) {
			clearInterval(intervalRef.current);
		}
	}, [idx]);
}
