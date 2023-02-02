import { FC, useState } from 'react';
import Switch from 'components/reuseable/Switch';
import NextLink from 'components/reuseable/links/NextLink';
import { PricingCard1 } from 'components/reuseable/pricing-cards';
// -------- data -------- //
import { pricingList1 } from 'data/pricing';

interface PricingProps {
  title: string;
  subtitle: JSX.Element;
  cta: JSX.Element;
  pricingList: {
    monthlyPrice: number;
    yearlyPrice: number;
    planName: string;
    features: string[];
  }[]
}


const Pricing6: FC<PricingProps> = (props) => {
  const [activeYearly, setActiveYearly] = useState(false);

  return (
    <div className="row gy-6 align-items-center">
      <div className="col-lg-4">
        <h3 className="display-4 mb-5">{props.title}</h3>
        {props.subtitle}
        {props.cta}
      </div>

      <div className="col-lg-7 offset-lg-1 pricing-wrapper">
        <div className="pricing-switcher-wrapper switcher justify-content-start justify-content-lg-end">
          <p className="mb-0 pe-3">Monthly</p>

          <Switch value={activeYearly} onChange={setActiveYearly} />

          <p className="mb-0 ps-3">
            Yearly <span className="text-red">(Save 30%)</span>
          </p>
        </div>

        <div className="row gy-6 mt-5">
          {props.pricingList.map((item, i) => (
            <div className={`col-md-6 ${i === 1 && 'popular'}`} key={i}>
              {/* pass in click event to this component to handle pricing selection */}
              <PricingCard1 roundedButton bulletBg {...item} activeYearly={activeYearly} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing6;
