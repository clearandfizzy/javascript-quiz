'use client';

import {useEffect} from "react";
import CryptoJS from "crypto-js";
import {Result} from "@/types/ResultType";
import {useSearchParams} from "next/navigation";
import {useResults} from "@/components/context/ResultsProvider";

export const useDecryptResults = () => {
	const searchParams = useSearchParams();
	const {sharedResults, setSharedResults} = useResults();
	const hash = searchParams.get("hash");

	const decryptResults = (hash: string): Result[] => {
		try {
			const bytes = CryptoJS.AES.decrypt(hash, 'sdkfjhdskjhfdskjh');
			const decrypted = bytes.toString(CryptoJS.enc.Utf8);
			return JSON.parse(decrypted) as Result[];
		} catch {
			return [];
		}
	}

	useEffect(() => {
		if (sharedResults.length > 0)
			return;
		if (hash) {
			const decrypted = decryptResults(hash);
			if (decrypted) setSharedResults(decrypted);
		} else {
			setSharedResults([]);
		}
	}, [hash]);

	return {decryptResults};

}