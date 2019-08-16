import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 

const Article2 = ({ data }) => (
  <Layout>
    <h2>{data.strapiArticles.title}</h2>
    <Img fluid={data.strapiArticles.image.childImageSharp.fluid}   />
    <p>{data.strapiArticles.content}</p>
  </Layout>
)

export default Article2

export const query = graphql`
  query Article2 {
    strapiArticles(id: {eq: "Articles_2"}) {
      title
      content
      image {
          childImageSharp {
            fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
          }
        }
    }
  }
`