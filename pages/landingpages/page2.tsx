import { NextPage } from 'next';
import { Fragment, useEffect } from 'react';
// -------- custom component -------- //
import { FAQ2 } from 'components/blocks/faq';
import { Hero9 } from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import { Clients3 } from 'components/blocks/clients';
import { Pricing6 } from 'components/blocks/pricing';
import { Process9 } from 'components/blocks/process';
import { Services12 } from 'components/blocks/services';
import { Testimonial10 } from 'components/blocks/testimonial';
import PageProgress from 'components/common/PageProgress';
import { setCookie } from 'cookies-next';
import NextLink from 'components/reuseable/links/NextLink';

// -------- icons -------- //
import Rocket from 'icons/lineal/Rocket';
import Shield from 'icons/lineal/Shield';
import Savings from 'icons/lineal/Savings';

const Demo9: NextPage = () => {
  useEffect(() => {
    setCookie('landing-page', 'page2');
  })

  const pageData = {
    heroTitle: 'Sandbox is effortless and powerful with',
    typewriterOptions: ['quick brown fox', 'fast transactions', 'secure payments'],
    subtitle: 'Achieve your saving goals. Have all your recurring and one time expenses and incomes in one place.',
    service: {
      title: 'Why Choose Sandbox?',
      subtitle: 'Here are a few reasons why our customers choose Sandbox.',
      blocks: [
        {
          title: 'Easy Usage',
          subtitle: 'Duis mollis commodo luctus cursus commodo tortor mauris.',
          icon: (<Rocket className="icon-svg-md text-yellow me-4" />)
        },
        {
          title: 'Fast Transactions',
          subtitle: 'Duis mollis commodo luctus cursus commodo tortor mauris.',
          icon: (<Savings className="icon-svg-md text-green me-4" />)
        },
        {
          title: 'Secure Payments',
          subtitle: 'Duis mollis commodo luctus cursus commodo tortor mauris.',
          icon: (<Shield className="icon-svg-md text-red me-4" />)
        },
      ]
    },
    features: {
      description: 'Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leorisus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna.',
      list: [
        'Nullam quis risus eget urna mollis ornare.',
        'Donec id elit non mi porta gravida at eget.',
        'Bruh Bruh Bruh'
      ],
      cta: 'Get Started'
    },
    pricing: {
      title: 'We offer great and premium prices.',
      subtitle: (<p className="mb-5">
        Enjoy a <NextLink title="free 30-day trial" href="#" className="hover" /> and experience the full service. No
        credit card required!
      </p>
      ),
      cta: (<NextLink href="#" title="See All Prices" className="btn btn-primary rounded mt-2" />),
      pricingList: [
        {
          monthlyPrice: 19,
          yearlyPrice: 199,
          planName: 'Premium',
          features: ['5 Projects', '100K API Access', '200MB Storage', 'Weekly Reports', '7/24 Support'],
        },
        {
          monthlyPrice: 49,
          yearlyPrice: 499,
          planName: 'Corporate',
          features: ['20 Projects', '300K API Access', '500MB Storage', 'Weekly Reports', '7/24 Support'],
        }
      ]
    }
  }
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          info
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent navbar-light"
          button={
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#modal-signin"
              className="btn btn-sm btn-primary rounded-pill"
            >
              Sign In
            </a>
          }
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero9 heroTitle={pageData.heroTitle} typewriterOptions={pageData.typewriterOptions} subtitle={pageData.subtitle} />

        <section className="wrapper bg-light">
          <div className="container py-14 pt-md-17 pb-md-25" style={{ paddingBottom: 'revert !important' }}>
            {/* ========== clients section ========== */}
            {/* <Clients3 /> */}

            {/* ========== why choose section ========== */}
            <Services12 title={pageData.service.title} subtitle={pageData.service.subtitle} description={pageData.features.description} features={pageData.features.list} cta={pageData.features.cta} blocks={pageData.service.blocks} />
          </div>
        </section>

        {/* ========== testimonial section ========== */}
        {/* <Testimonial10 /> */}

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-17">
            {/* ========== how it works section ========== */}
            {/* <Process9 /> */}

            {/* ========== pricing section ========== */}
            <Pricing6 title={pageData.pricing.title} subtitle={pageData.pricing.subtitle} cta={pageData.pricing.cta} pricingList={pageData.pricing.pricingList} />
          </div>
        </section>

        {/* ========== faq section ========== */}
        <FAQ2 titleColor="muted" />
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default Demo9;
