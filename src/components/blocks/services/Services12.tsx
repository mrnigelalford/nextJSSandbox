import { FC, Fragment } from 'react';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';

interface ServicesProps {
  title: string;
  subtitle: string;
  description: JSX.Element;
  features: string[],
  cta: string;
  listTitle: string;
  blocks: {
    title: string;
    subtitle: string;
    icon: JSX.Element
  }[]
}

const images =
  {
    large: {
      src: '/img/photos/sa13.jpg',
      srcSet: '/img/photos/sa13@2x.jpg 2x'
    },
    landscape: {
      src: '/img/photos/sa14.jpg',
      srcSet: '/img/photos/sa14@2x.jpg 2x'
    },
    portrait: {
      src: '/img/photos/sa15.jpg',
      srcSet: '/img/photos/sa15@2x.jpg 2x'
    }
  };

const Services12: FC<ServicesProps> = (props) => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
          <h2 className="fs-15 text-uppercase text-muted mb-3">{props.title}</h2>
          <h3 className="display-4 mb-10 px-xl-10 px-xxl-15">
            {props.subtitle}
          </h3>
        </div>
      </div>

      <ul
        role="tablist"
        className="nav nav-tabs nav-tabs-bg nav-tabs-shadow-lg d-flex justify-content-between nav-justified flex-lg-row flex-column"
        style={{marginBottom: '5em'}}
      >
        {
          props.blocks.map((block, i) => (
            <li key={block.title+i} className="nav-item" role="presentation">
              <a
                role="tab"
                href="#tab2-1"
                data-bs-toggle="tab"
                aria-selected="true"
                className="nav-link d-flex flex-row active"
              >
                <div>
                  {block.icon}
                </div>
                <div>
                  <h4 className="mb-1">{block.title}</h4>
                  <p>{block.subtitle}</p>
                </div>
              </a>
            </li>
          ))
        }
      </ul>

      {/* ========== tab content ========== */}
      <div className="tab-content mt-6 mt-lg-8 mb-md-9">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
              <div className="row gx-md-5 gy-5 align-items-center">
                <div className="col-6">
                  <img
                    alt=""
                    src={images.large.src}
                    srcSet={images.large.src}
                    className="img-fluid rounded shadow-lg d-flex ms-auto"
                  />
                </div>

                <div className="col-6">
                  <img
                    alt=""
                    src={images.landscape.src}
                    srcSet={images.landscape.srcSet}
                    className="img-fluid rounded shadow-lg mb-5"
                  />
                  <img
                    alt=""
                    src={images.portrait.src}
                    srcSet={images.portrait.srcSet}
                    className="img-fluid rounded shadow-lg d-flex col-10"
                  />
                </div>
              </div>
            </div>

            <List title={props.listTitle} color="yellow" description={props.description} features={props.features} cta={props.cta}/>
          </div>
      </div>
    </Fragment>
  );
};

type ListProps = { color: 'red' | 'yellow' | 'green'; title: string; description: JSX.Element; features: string[], cta: string;};
const List = ({ color, title, description, features, cta, }: ListProps) => {
  return (
    <div className="col-lg-6">
      <h2 className="mb-3">{title}</h2>
      {description}

      <ul className={`icon-list bullet-bg bullet-soft-${color}`}>
        {features?.map((feature, i) => (
            <li key={i}>
              <i className="uil uil-check" /> {feature}
            </li>
        ))}
      </ul>

      <NextLink title={cta} href="#" className={`btn btn-${color} mt-2`} />
    </div>
  );
};

export default Services12;
