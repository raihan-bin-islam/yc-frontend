import HomeArticles from "../Components/Home/HomeArticles/HomeArticles";
import HomeHeader from "../Components/Home/HomeHeader/HomeHeader";
import HomeInitiatives from "../Components/Home/HomeInitiatives/HomeInitiatives";
import HomeLatestEvents from "../Components/Home/HomeLatestEvents/HomeLatestEvents";
import HomeNews from "../Components/Home/HomeNews/HomeNews";
import HomeVideoSlide from "../Components/Home/HomeVideoSlide/HomeVideoSlide";
import HomeWhatWeDo from "../Components/Home/HomeWhatWeDo/HomeWhatWeDo";

import useFetch from "../Components/Hooks/useFetch";

export default function Home() {
  const [eventIsLoading, latestEvents] = useFetch("/events");
  const [newsIsLoading, newsData] = useFetch("/news");
  const [articlesIsPending, articlesData] = useFetch("/articles");
  const [videoIsLoading, videoData] = useFetch("/yunus-speech");

  return (
    <div>
      <HomeHeader />
      <HomeWhatWeDo />
      {latestEvents.length > 0 && <HomeLatestEvents isLoading={eventIsLoading} latestEvents={latestEvents} />}
      {newsData.length > 0 && <HomeNews isLoading={newsIsLoading} newsData={newsData} />}
      {articlesData.length > 0 && <HomeArticles isLoading={articlesIsPending} articlesData={articlesData} />}
      <HomeInitiatives />
      {videoData.length > 0 && <HomeVideoSlide isLoading={videoIsLoading} videoData={videoData} />}
    </div>
  );
}
