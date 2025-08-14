import {useEffect, useState} from "react";
import {config as dataConfig} from "@/data/config";
import {useSearchProvider} from "@/components/context/SearchProvider";
import {DataConfigType} from "@/types/DataConfigType";

export const useSearchTerm = () => {
	const [data, setData] = useState<DataConfigType[]>([]);
	const {searchTerm} = useSearchProvider();

	useEffect(() => {
		if (!searchTerm) {
			setData(dataConfig);
			return;
		}

		if (searchTerm) {
			setData(dataConfig.filter(
				item => item.key.toLowerCase().includes(searchTerm.toLowerCase())
			));
		}

	}, [searchTerm]);

	return {data}
}