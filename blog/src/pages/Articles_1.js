import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 

const Article1 = ({ data }) => (
  <Layout>
    <h2>{data.strapiArticles.title}</h2>
    <Img fluid={data.strapiArticles.image.childImageSharp.fluid}  />
    <p>{data.strapiArticles.content}</p>
  </Layout>
)

export default Article1

export const query = graphql`
  query Article1 {
    strapiArticles(id: {eq: "Articles_1"}) {
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