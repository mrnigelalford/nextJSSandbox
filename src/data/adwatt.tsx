import NextLink from "components/reuseable/links/NextLink";
import Check from "icons/lineal/Check";
import Megaphone from "icons/lineal/Megaphone";
import Rocket from "icons/lineal/Rocket";
import Savings from "icons/lineal/Savings";

const pageData = {
  heroTitle: 'Increase views with indoor advertising',
  typewriterOptions: ['Local', 'Targeted Locations', 'Simple', 'Expanding reach'],
  subtitle: 'Extend your audience reach. Connect with new and existing customers through targeted Indoor advertising.',
  service: {
    title: 'Why Choose Adwatt?',
    subtitle: 'Here are a few reasons why our customers choose Adwatt.',
    blocks: [
      {
        title: 'Easy Usage',
        subtitle: 'Simple online management portal and APIs.',
        icon: (<Rocket className="icon-svg-md text-yellow me-4" />)
      },
      {
        title: 'Local networks',
        subtitle: 'Reach your audience with increased impressions',
        icon: (<Megaphone className="icon-svg-md text-green me-4" />)
      },
      {
        title: 'Multi format support',
        subtitle: 'Supports Most Video And Graphic Formats',
        icon: (<Check className="icon-svg-md text-green me-4" />)
      },
    ]
  },
  features: {
    listTitle: 'Choose a new ad source',
    description: <p>Our indoor billboard platform offers effortless accessibility to a massive audience. Our cutting-edge technology and strategically placed billboards increase visibility and impact for your company or brand.
      <br />Quickly create and distribute engaging content without the hassle of traditional advertising methods.</p>,
    list: [
      'Increased impressions per session',
      'Online management portal, flexible ad updates',
      'Data and analytics reporting'
    ],
    cta: 'Get Started'
  },
  pricing: {
    title: 'Flexible pricing options to fit your budget',
    subtitle: (<p className="mb-5">
      Run ads as short or as long as you want. Flexible time slots and pricing options to fit your needs.
    </p>
    ),
    cta: (<NextLink href="#" title="See All Prices" className="btn btn-primary rounded mt-2" />),
    pricingList: [
      {
        monthlyPrice: 9,
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
  },
  CTA: {
    description: 'Join adwatt now and grow your business.'
  }
  // faqlist is being imported, see above
  // <NextLink title="free 30-day trial" href="#" className="hover" />
}

export const siteTitle = 'adwatt - ad network';

export const serviceImages = [
  { url: '/img/locationExamples/gymLobby.png'},
  { url: '/img/locationExamples/barbershop.png'},
  { url: '/img/locationExamples/coffeeShop.png'},
  { url: '/img/locationExamples/gymLobby2.png'}
];

export default pageData;