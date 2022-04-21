import HomeArticles from "../Components/Home/HomeArticles/HomeArticles";
import HomeHeader from "../Components/Home/HomeHeader/HomeHeader";
import HomeLatestEvents from "../Components/Home/HomeLatestEvents/HomeLatestEvents";
import HomeWhatWeDo from "../Components/Home/HomeWhatWeDo/HomeWhatWeDo";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <HomeWhatWeDo />
      <HomeLatestEvents />
      <HomeArticles />
    </div>
  );
}
