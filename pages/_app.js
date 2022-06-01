import "../styles/globals.css";
import Router from "next/router";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", () => setLoading(true));
  Router.events.on("routeChangeComplete", () => setLoading(false));
  Router.events.on("routeChangeError", () => setLoading(false));

  return (
    <>
      {loading && <h1>Cargando...</h1>}
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
