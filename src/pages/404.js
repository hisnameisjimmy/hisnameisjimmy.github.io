import * as React from "react"
import { Link } from "gatsby"
import Seo from '../components/seo'
import Layout from '../components/layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo 
        title="404"
      />
      <div className="prose prose-lg mx-auto my-16">
        <h1>Page not found</h1>
        <p>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </div>
      
      </Layout>
  )
}

export default NotFoundPage
