import Head from 'next/head'
import '../styles/globals.css'
import '../public/index.css'
import Layout from '../components/Layout'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';



import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function MyApp({ Component, pageProps }) {
  return (
    
        
    <div>
   
      <Head>
          <title>At Bali Java</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      
      </Head>


     
      <ApolloProvider client={client}>
          <RecoilRoot>
              <Layout>
                    <Component {...pageProps} />
              </Layout>
          </RecoilRoot>
      </ApolloProvider>
      
        
    
    </div>
)
 
}

export default MyApp
