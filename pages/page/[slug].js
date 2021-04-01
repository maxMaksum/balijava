


import React from 'react'
import NewCard from '../../components/NewCard'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useQuery, gql } from '@apollo/client';
import client from "../../apollo-client";
import Link from 'next/link'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';

export const getStaticPaths = async () =>{

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
    const paths = data.pages.map(page =>{
        return {
            params:{slug: page.slug.toString()}
            
        }
    })

    console.log(paths)

    return {
       
      paths:paths,
      fallback:false
  }
}


 export const getStaticProps = async(context)=>{
        console.log(context)


        const slug = context.params.slug
        
        const { data } = await client.query({
          query: gql`
          query pagesQuary ($slug: String) {
            pages(where:{
              slug:$slug
            }
            ) {
              id
              title
              subtitle
              image {
                url
                 width
                height
              }
              content{
                text
                
              }
            }
          }
          `,
          variables: {
            slug
          }
        });
    
      
        return {
          props: {
            pages: data.pages
           },
        }
      }






function page({pages}) {

  console.log(pages)

    return (
      <div className ="container-main">

      <Container>

      <Box display="flex" justifyContent="center" m={1} p={1}>
          <Grid container spacing={1}>
          
            {pages.map(page=>(
              
                <Grid container key={page.id} item xs={12} sm={12}  m={1} p={1}>
                  {console.log(page.image.url)}
                  <NewCard 
                  url ={page.image.url}
                 
                  title = {page.title}
                  subtitle = {page.subtitle}
                  text = {page.content.text}
                  />
               </Grid>
      
             
            ))} 
            
      
           
             
            </Grid>
      </Box>
            </Container>       
      </div>  
    )
}

export default page
