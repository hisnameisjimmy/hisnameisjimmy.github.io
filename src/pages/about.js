import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout>
      <Seo 
        title="About Jimmy Hooker"
      />
      <div className="prose prose-lg mx-auto">
        <h1>About</h1>
        <p>This is just a place for me to write about things I'm thinking about. I make no claims, I am not an academic, and it's pretty likely I don't know what I'm talking about or have significant gaps in my understanding of the problem.</p>
        <h3>More Information</h3>
        <p>Currently Lead PM at <a href="https://www.fivetran.com">Fivetran</a> - The leader in ELT</p>
        <p>Previously Senior PM at <a href="https://www.nylas.com">Nylas</a>, VP of Product at <a href="https://www.badgermapping.com">Badger Maps, Inc.</a>.</p>

        <h3>Side Projects</h3>
        <p><a href="https://www.artdiario.com">Art Diario</a> - New, beautifully curated art on your desktop every day. </p>
        <p><a href="https://www.growsf.com">Grow SF</a> - Helping SF grow!</p>

        <p>I love making practical, easy-to-use products that are a pleasure to use over and over again.</p>

        <h3>Contact me</h3>
        <a href="mailto:hisnameisjimmy@gmail.com">hisnameisjimmy@gmail.com</a>

      </div>
    </Layout>
  )
}

export default AboutPage