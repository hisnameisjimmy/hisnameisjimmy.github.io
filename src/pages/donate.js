import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Headline from '../components/headline'
import { Helmet } from 'react-helmet'

const Donate = () => {
  return (
    <Layout>
      <Seo 
        title="Donate to Grow SF"
      />
      <Helmet>
        <script src="https://donorbox.org/widget.js" paypalExpress="false"></script>
      </Helmet>
      <Headline
        headline="Donate"
        subhead="Grow SF works through donations"
      />
        <div className="relative md:bg-white px-4 sm:px-6 lg:px-8 mt-8 sm:mt-16 max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-6">
            <div className="mx-auto w-full sm:w-105">
              <iframe
                allowpaymentrequest=""
                frameborder="0"
                title="donorBox"
                height="1200px"
                name="donorbox"
                scrolling="no"
                seamless="seamless"
                src="https://donorbox.org/embed/grow-sf-pac?default_interval=o&amount=100"
                styles="margin: 0 auto; max-width: 500px; min-width: 310px; max-height:none!important"
                width="100%"
              ></iframe>
            </div>
            <div className="prose prose-blue prose-lg text-gray-500 lg:max-w-none">
              <p>
              Grow SF PAC is comprised of a team of volunteers. All proceeds will be used to operate
              the organization including tech infrastructure costs, advertising, and legal fees.
              </p>
              <p>
                If your contribution is from a business, please enter the business type in the donor
                info form (corporation, LLC, sole proprietor, etc). If your company is an LLC or LLP,
                please also enter in the responsible officer. The responsible Officer is the individual
                (or one of the individuals) primarily responsible for the political contribution
                decisions, whether one of the LLC's members, a project manager or other employee.
              </p>
              <p>
                Contributions are not deductible as charitable contributions for federal income tax
                purposes.
              </p>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Donate