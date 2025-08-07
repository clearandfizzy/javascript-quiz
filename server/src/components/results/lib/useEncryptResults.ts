'use client';

import {useEffect} from "react";
import {useResults} from "@/components/context/ResultsProvider";
import {Result} from "@/types/ResultType";
import CryptoJS from "crypto-js";

export const useEncryptResults = () => {
	const { results, setShareUrl } = useResults();

	const encryptResults = (results: Result[]): string => {
		const str = JSON.stringify(results);
		return CryptoJS.AES.encrypt(str, 'sdkfjhdskjhfdskjh').toString();
	}

	useEffect(() => {
		if (results.length > 0) {
			const hash = encryptResults(results);
			setShareUrl(`${window.location.origin}/results?hash=${encodeURIComponent(hash)}`);
		}
	}, [results]);

}