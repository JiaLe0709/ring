import "@/styles/globals.css";
import {ThemeProvider} from "@/lib/themeprovider";

export default function App({ Component, pageProps }) {
  return (
      <ThemeProvider defaultTheme="dark" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>

  );
}
