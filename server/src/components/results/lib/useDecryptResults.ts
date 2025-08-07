'use client';

import {useEffect} from "react";
import {Result} from "@/types/ResultType";
import CryptoJS from "crypto-js";
import {useSearchParams} from "next/navigation";
import {useResults} from "@/components/context/ResultsProvider";

export const useDecryptResults = () => {
	const searchParams = useSearchParams();
	const {	setSharedResults } = useResults();
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
		if (hash) {
			const decrypted = decryptResults(hash);
			if (decrypted) setSharedResults(decrypted);
		} else {
			setSharedResults([]);
		}
	}, [hash]);

	return { decryptResults };

}