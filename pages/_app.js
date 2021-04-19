import Head from 'next/head'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import '../styles/globals.css'
import '../public/index.css'
import Layout from '../components/Utils/Layout'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Hydrate } from 'react-query/hydration'

import {
  RecoilRoot,
} from 'recoil';

 
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {

  return (
    
        
    <div>
   
      <Head>
          <title>At Bali Java</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      
      </Head>


     
      <QueryClientProvider client={queryClient}>
              <RecoilRoot>
                <Layout>
                      <Component {...pageProps} />
                </Layout>
              </RecoilRoot>
        
      </QueryClientProvider>
      
        
    
    </div>
)
 
}

export default MyApp
