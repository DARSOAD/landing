import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import "@/styles/globals.css";

// Cargar la fuente correctamente
const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${dmSans.className} font-sans`}>
            <Component {...pageProps} />
        </main>
    );
}
