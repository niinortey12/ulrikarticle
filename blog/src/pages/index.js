import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image';
import SEO from "../components/seo"
import Layout from "../components/layout"
import '../components/bootstrap.min.css';


const IndexPage = ({data}) => (
  <Layout>
    
    <h1>Articles</h1>
    <section class="articles" id="articles">
      <div class="row">
      {data.allStrapiArticles.edges.map(document => (
      <div key={document.node.id} class="col-lg-3 col-md-4 col-sm-6" >
			  <article class="card"  >
				  <div class="img-card">
						  <Img  fluid={document.node.image.childImageSharp.fluid}  class="w-100"  />
					  </div>
				  
				  <div class="card-block">
					  <header class="title-header">
					  <Link to={`/${document.node.id}`}><h3>{document.node.title}</h3></Link>
				  </header>
					  <p class="tagline card-text text-xs-center">{document.node.content}</p>
				  </div>
			  </article>
		  </div>
        
      ))}
    </div>
    </section>
    
  </Layout>
)
export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticles {
      edges {
        node{
          id
          title
          content
          image{
            childImageSharp{
              resize(width: 1500, height: 1500) {
                src
              }
              fluid(maxWidth: 786) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
  
