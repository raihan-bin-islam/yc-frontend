import Head from 'next/head'
import HomeHeader from '../Components/Home/HomeHeader/HomeHeader'
import HomeLatestEvents from '../Components/Home/HomeLatestEvents/HomeLatestEvents'
import HomeWhatWeDo from '../Components/Home/HomeWhatWeDo/HomeWhatWeDo'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yunus Centre - Global Hub for Social Business</title>
        <meta name="description" content="Since October 2006, when Professor Muhammad Yunus and Grameen Bank jointly received the Nobel Peace Prize, local and international interest in Professor Yunus’ work has grown exponentially. To address this ever-growing need, Professor Yunus founded Yunus Centre in July 2008 to promote and disseminate his work and philosophy, especially the concept and practice of social business." />
        <link rel="icon" href="/yc-fav.svg" />
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <HomeHeader/>
      <HomeWhatWeDo/>
      <HomeLatestEvents/>
    </div>
  )
}
