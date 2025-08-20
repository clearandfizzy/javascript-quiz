import React, {useEffect} from "react";
import {useQuestions} from "@/components/context/QuestionProvider";

type useIntervalProps = {
	props: {
		intervalRef: React.MutableRefObject<NodeJS.Timeout | null>;
	}
}

type useIntervalType = ({props}: useIntervalProps) => void;

export const useInterval: useIntervalType = ({props}) => {
	const {intervalRef} = props;
	const {questionLimit, idx} = useQuestions();

	useEffect(() => {
		if (idx === questionLimit && intervalRef.current) {
			clearInterval(intervalRef.current);
		}
	}, [idx]);
}
