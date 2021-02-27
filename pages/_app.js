import Head from 'next/head'
import '../styles/globals.css'
import '../public/index.css'
import Layout from '../components/Layout'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'


function MyApp({ Component, pageProps }) {
  return (
    
        
    <div>
      <Head>
          <title>At Bali Java</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      
      </Head>
      <Layout>
            <Component {...pageProps} />
      </Layout>
        
      
    </div>
)
 
}

export default MyApp
