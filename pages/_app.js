import "../styles/globals.css";
import App from "next/app";
// import { Component } from "react";

class MovieApp extends App {
  render() {
    const { Component } = this.props;
    return <Component />;
  }
}

export default MovieApp;

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
