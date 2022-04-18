import Layout from '../Components/Shared/Layout/Layout'
import '../styles/globals.scss'
// import '../scripts/styles'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
