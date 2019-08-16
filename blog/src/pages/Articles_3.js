import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 

const Article3 = ({ data }) => (
  <Layout>
    <h2>{data.strapiArticles.title}</h2>
    <Img fluid={data.strapiArticles.image.childImageSharp.fluid}  />
    <p>{data.strapiArticles.content}</p>
  </Layout>
)

export default Article3

export const query = graphql`
  query Article3 {
    strapiArticles(id: {eq: "Articles_3"}) {
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