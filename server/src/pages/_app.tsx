import type {AppProps} from "next/app";
import "@/styles/global.css"
import { ResultsProvider } from "@/context/ResultsProvider";

export default function App({Component, pageProps}: AppProps) {
    return (
        <ResultsProvider>
            <Component {...pageProps} />
        </ResultsProvider>
    );
}
