import Container from "react-bootstrap/Container";
import Head from "next/head";

function Header() {
  return (
    <Head>
      <title> plant buds </title>
      <link rel="icon" href="/favicon_io/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon_io/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon_io/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon_io/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon_io/webmanifest" />
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat&family=Crimson+Text&family=Playfair+Display&family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}

export default Header;
