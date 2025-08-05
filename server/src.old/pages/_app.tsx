import type {AppProps} from "next/app";
import "@/styles/global.css"
import {ResultsProvider} from "@/components/context/ResultsProvider";
import Banner from "@/components/Banner";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <ResultsProvider>
                <div className="mb-20">
                    <Component {...pageProps} />
                </div>
                <Banner/>
            </ResultsProvider>
        </>
    );
}
