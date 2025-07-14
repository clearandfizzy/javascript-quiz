import React, {useEffect, useState} from "react";
import {useResults} from "@/context/ResultsProvider";
import {questions} from "@/data/local-questions";
import {useRouter} from "next/router";
import CryptoJS from "crypto-js";

function encryptResults(results: any) {
    const str = JSON.stringify(results);
    return CryptoJS.AES.encrypt(str, process.env.SECRET_RESULTS_KEY as string).toString();
}

function decryptResults(hash: string) {
    try {
        const bytes = CryptoJS.AES.decrypt(hash, process.env.SECRET_RESULTS_KEY as string);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(decrypted);
    } catch {
        return null;
    }
}

const ResultsPage: React.FC = () => {
    const {results, resetResults} = useResults();
    const router = useRouter();
    const [sharedResults, setSharedResults] = useState<any[]>([]);
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
        <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-6">Quiz Results</h1>
            {shareUrl && (
                <div className="mb-6">
                    <span className="font-semibold">Shareable Link:</span>
                    <input
                        type="text"
                        value={shareUrl}
                        readOnly
                        className="w-full mt-2 p-2 border rounded bg-gray-100 text-xs"
                        onFocus={e => e.target.select()}
                    />
                </div>
            )}
            <ul className="space-y-4">
                {displayResults.map((r, i) => (
                    <li key={i} className="p-4 border rounded flex justify-between items-center">
                        <span
                            className="text-sm">{questions[r.questionIndex]?.text || `Question ${r.questionIndex + 1}`}</span>
                        <span
                            className={r.correct ? "text-sm text-green-600 font-bold" : "text-sm text-red-600 font-bold"}>
              {r.correct ? "Correct" : "Incorrect"}
            </span>
                    </li>
                ))}
            </ul>
            <div className="mt-8 flex gap-4 item-center justify-center">
                <button onClick={() => resetAndStartAgain()}
                        className="hover:cursor-pointer px-4 py-2 bg-green-400 rounded font-semibold"
                >Reset & Start Again
                </button>
            </div>
        </div>
    );
};

export default ResultsPage;
