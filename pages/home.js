import React from 'react'
import NewCard from '../components/NewCard'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useQuery, gql } from '@apollo/client';
import client from "../apollo-client";
import Link from 'next/link'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';

export async function getStaticProps() {
    const { data } = await client.query({
      query: gql`
      query pages {
        pages(first: 10) {
          id
          slug
          subtitle
          title
          image {
            url
             width
            height
          }
        }

       
      }
      `,
    });

    return {
      props: {
        countries: data.pages,
      },
   };
}
function home({countries}) {
   
    console.log(countries)
    return (
        <div className ="container-main">
<Container>
<Box display="flex" justifyContent="center" m={1} p={1}>
    <Grid container spacing={1}>
    
      {countries.map(page=>(
        
    
          <Grid container key={page.id} item xs={12} sm={4}  m={1} p={1}>
            {console.log(page.image.url)}
            <NewCard 
            url ={page.image.url}
           
            title = {page.title}
            subtitle = {page.subtitle}/>
         </Grid>

       
      ))} 
      

     
       
      </Grid>
</Box>
      </Container>       
</div>  
      
    )
}

export default home
