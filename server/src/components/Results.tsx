import React, {useEffect, useState} from "react";
import {useResults} from "@/context/ResultsProvider";
import {useRouter} from "next/router";
import CryptoJS from "crypto-js";
import {Result} from "@/types/resultType";
import {DisplayResult} from "@/components/Results/DisplayResult";
import {SharableLink} from "@/components/Results/SharableLink";
import {FinalScore} from "@/components/Results/FinalScore";
import {QuizPropTypes} from "@/types/questionType";

const encryptResults = (results: Result[]): string => {
    const str = JSON.stringify(results);
    return CryptoJS.AES.encrypt(str, 'sdkfjhdskjhfdskjh').toString();
}

const decryptResults = (hash: string): Result[] => {
    try {
        const bytes = CryptoJS.AES.decrypt(hash, 'sdkfjhdskjhfdskjh');
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(decrypted) as Result[];
    } catch {
        return [];
    }
}

const ResultsPage: React.FC<QuizPropTypes> = ({questions}) => {
    const {results, resetResults} = useResults();
    const router = useRouter();
    const [sharedResults, setSharedResults] = useState<Result[]>([]);
    const [shareUrl, setShareUrl] = useState("");

    useEffect(() => {
        const hash = router.query.hash as string;
        if (hash) {
            const decrypted = decryptResults(hash);
            if (decrypted) setSharedResults(decrypted);
        } else {
            setSharedResults([]);
        }
    }, [router.query.hash]);

    useEffect(() => {
        if (results.length > 0) {
            const hash = encryptResults(results);
            setShareUrl(`${window.location.origin}/results?hash=${encodeURIComponent(hash)}`);
        }
    }, [results]);

    const resetAndStartAgain = () => {
        resetResults();
        router.push('/').then();
    }

    const displayResults = sharedResults.length > 0 ? sharedResults : results;

    return (
        <div className="max-w-xl mx-auto mt-10 p-8">
            <h1 className="text-2xl font-bold mb-6">Quiz Results</h1>
            {shareUrl && (
                <SharableLink shareUrl={shareUrl}/>
            )}
            <ul className="space-y-4">
                {displayResults.map((item, index) => (
                    <DisplayResult questions={questions} item={item} index={index}/>
                ))}
            </ul>
            <div className="mt-8 flex gap-4 item-center justify-center">
                <button onClick={() => resetAndStartAgain()}
                        className="hover:cursor-pointer px-4 py-2 bg-green-400 rounded font-semibold"
                >Reset & Start Again
                </button>
            </div>
            <FinalScore displayResults={displayResults}/>
            {shareUrl && (
                <SharableLink shareUrl={shareUrl}/>
            )}
        </div>
    );
};

export default ResultsPage;
