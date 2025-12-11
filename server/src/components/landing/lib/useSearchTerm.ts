import {useMemo} from "react";
import {config as dataConfig} from "@/data/config";
import {useSearchProvider} from "@/components/context/SearchProvider";

export const useSearchTerm = () => {
	const {searchTerm} = useSearchProvider();

	const data = useMemo(() => {
		if (!searchTerm) {
			return dataConfig;
		}
		
		const lowerSearchTerm = searchTerm.toLowerCase();
		return dataConfig.filter(item => item.key.toLowerCase().includes(lowerSearchTerm));
	}, [searchTerm]);

	return {data}
}