'use client';

import {useEffect} from "react";
import {useResults} from "@/components/context/ResultsProvider";
import {Result} from "@/types/ResultType";
import CryptoJS from "crypto-js";
import {urlConfig} from "@/url.config";
import {useParams} from "next/navigation";

export const useEncryptResults = () => {
	const params = useParams();
	const id = params.id as string;

	if (!/^[a-zA-Z]+$/.test(id)) {
		throw new Error('Invalid ID format. ID should contain only alphabetic characters.');
	}

	const {results, setShareUrl} = useResults();

	const encryptResults = (results: Result[]): string => {
		const str = JSON.stringify(results);
		return CryptoJS.AES.encrypt(str, 'sdkfjhdskjhfdskjh').toString();
	}

	useEffect(() => {
		if (results.length > 0) {
			const hash = encryptResults(results);
			const baseUrl = window.location.origin;
			const endpoint = urlConfig.endPoints.results.replace('[id]', id);
			const query = `?hash=${encodeURIComponent(hash)}`;
			setShareUrl(`${baseUrl}${endpoint}${query}`);
		}
	}, [results]);

}