import HomeHeader from '../Components/Home/HomeHeader/HomeHeader'
import HomeLatestEvents from '../Components/Home/HomeLatestEvents/HomeLatestEvents'
import HomeNews from '../Components/Home/HomeNews/HomeNews';
import HomeWhatWeDo from '../Components/Home/HomeWhatWeDo/HomeWhatWeDo'

export default function Home() {
  return (
    <div>
      <HomeHeader/>
      <HomeWhatWeDo/>
      <HomeLatestEvents/>
      <HomeNews/>
    </div>
  );
}
