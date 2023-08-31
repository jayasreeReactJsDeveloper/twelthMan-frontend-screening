import { PiCheckCircle } from 'react-icons/pi';
import './pricingPlan.style.css';
import '../../../common.styles.css';

function PricingPlan({planDetails}) {
  const {price, plan, features} = planDetails;
  return (
    <li className="pricing-plan-container flex flex-column">
      <div className="flex flex-column pricing-plan-header">
        <p className="text-bold">${price}/mth</p>
        <p className="text-bold">{plan} plan</p>
        <p>Billed annually</p>
      </div>
      <ul className="pricing-plan-features m-y list-style-none">
        {
          features && features.map((eachFeature,featureIndex)=>{
            return <li key={featureIndex} className="text-justify">
              <p><PiCheckCircle className="price-plan-feature-icon"/> &nbsp;{eachFeature}</p>
            </li>
          })
        }
      </ul>
      <div className='align-center btn-container'>
        <button className='btn'>Get Started</button>
      </div>
    </li>
  )
}

export default PricingPlan
