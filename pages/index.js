import Head from "next/head";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import BannerImage from "../components/BannerImage";
import MovieRow from "../components/MovieRow";
import requests from "../middleware/Request";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#0f171e] min-h-screen">
        <Navbar />
        <BannerImage />
        <MovieRow fetchUrl={requests.fetchOriginals} title={"New release movies"} />
        <MovieRow fetchUrl={requests.fetchTrending} title={"From world of DC at Rs.79"} />
        <MovieRow fetchUrl={requests.fetchRomance} title={"Romance movies"} />
        <MovieRow fetchUrl={requests.fetchComedy} title={"Kids and family movies"} />
        <MovieRow fetchUrl={requests.fetchHorror} title={"Drama movies"} />
      </main>
    </>
  );
}
