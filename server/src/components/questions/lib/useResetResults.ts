import {useEffect} from "react";
import {useResults} from "@/components/context/ResultsProvider";

export const useResetResults = () => {
	const {resetResults} = useResults();

	useEffect(() => {
		resetResults();
	}, []);
}

export default useResetResults;