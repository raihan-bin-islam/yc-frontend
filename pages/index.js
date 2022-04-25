import HomeArticles from "../Components/Home/HomeArticles/HomeArticles";
import HomeHeader from "../Components/Home/HomeHeader/HomeHeader";
import HomeInitiatives from "../Components/Home/HomeInitiatives/HomeInitiatives";
import HomeLatestEvents from "../Components/Home/HomeLatestEvents/HomeLatestEvents";
import HomeNews from "../Components/Home/HomeNews/HomeNews";
import HomeVideoSlide from "../Components/Home/HomeVideoSlide/HomeVideoSlide";
import HomeWhatWeDo from "../Components/Home/HomeWhatWeDo/HomeWhatWeDo";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <HomeWhatWeDo />
      <HomeLatestEvents />
      <HomeNews/>
      <HomeArticles />
      <HomeInitiatives/>
      <HomeVideoSlide/>
    </div>
  );
}
