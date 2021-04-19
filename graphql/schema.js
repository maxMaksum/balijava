import { request, gql, GraphQLClient } from 'graphql-request'

export const endpoint = `https://api-us-east-1.graphcms.com/v2/${process.env.NEXT_PUBLIC_ENDPOINT}/master`

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_ENDPOINT);
export const pagesQuery = gql`query pagesQuery{
  pages{
    title
    slug
    subtitle
    content{
      text
    }
    image{
      url
      width
      height
    }
     images{
      url
      width
      height
    }
  }
}`

export const pageQuery = gql`query pageQueary($slug:String){
  page(where:{
    slug:$slug
  }){
    title
    subtitle
    slug
    image{
      height
      width
      url
    }

    images{
      height
      width
      url
    }
    content{
      text
      
    }
    seoTitle
    seoDescription
  }
}`

export const productsQuery = gql `query productQuary{
  products{
    id
    title
    slug
    price
    image{
      height
      width
      url
    }
    description{
      text
    }
    catagories{
      title
    }
    seo{
      title
      description
    }
  }
}`

export const productQuery= gql`query productQuary($slug: String) {
  product(where: {slug: $slug}) {
    id
    title
    slug
    price
    image {
      height
      width
      url
    }
    description {
      text
    }
    catagories {
      title
    }
    seo {
      title
      description
    }
  }
}`

export const productsSearch =gql`query productsQuary ($title: String $catagory:String  $pagination:Int) {
  products(where
    :{ OR: [{ title_contains:$title }, { catagories_every:{
      title:$catagory
    } }] 
    }
    first:$pagination
  ) {
    id
    title

    description{
      text
    }
  
  }
}`




export const sliderPage = gql `query slider {
  coverphotos{
    id
    title
    excerpt
    images{
      url
      height
      width
      id
    }
  }
}`


export const getSliderPage = async()=>{

  return request(endpoint, sliderPage)
}

export const getProductsSearch = async(catagory, title)=>{

    return request(endpoint, productsSearch,{catagory,title})
  }


export const getProducts = async()=>{

  return request(endpoint, productsQuery)
}

export const getProduct = async(slug)=> {
  
    return request(endpoint, productQuery,{
      slug
    })
}

export const getPages = async()=>{

  return request(endpoint, pagesQuery)
}


export const getPage = (slug)=>{
  return request(endpoint, pageQuery,{
    slug
  })
}

// useQuery



