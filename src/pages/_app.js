import "@/styles/globals.css";
import "normalize.css";

// import "@blueprintjs/icons/lib/css/blueprint-icons.css";

export default function App({ Component, pageProps }) {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Component {...pageProps} />
    </div>
  );
}
