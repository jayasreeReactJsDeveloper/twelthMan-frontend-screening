import PricingPlan from "../pricing-plan/pricingPlan.component";
import '../../../common.styles.css';
import './pricing.style.css';

function Pricing() {
  const pricePlans = [
    {
      price:10,
      plan:"Basic",
      features:[
        'Access to all basic features',
        'Basic reporting and analytics',
        'Up to 10 individual users',
        '20GB individual data each user',
        'Basic chat and email support'
      ]
    },{
      price:20,
      plan:"Business",
      features:[
        '200+ integrations',
        'Advanced reporting and analytics',
        'Up to 20 individual users',
        '40GB individual data each user',
        'Priority chat and email support'
      ]
    },{
      price:40,
      plan:"Enterprise",
      features:[
        'Advanced custom fields',
        'Audit log and data history',
        'Unlimited individual users',
        'Unlimited individual data',
        'Personalised + priority service'
      ]
    }
  ]
  return (
    <div>
      <p className="pricing-title text-bold">Pricing</p>
      <h1>Simple, transparent pricing</h1>
      <p>we believe Untitled should be accessible to all companies, no matter the size.</p>
      <ul className="price-plans-list flex flex-column m-y list-style-none">
        {
          pricePlans.map(eachPlan=>{
            const {price} = eachPlan;
            return <PricingPlan key={price} planDetails={eachPlan}/>
          })
        }
      </ul>
    </div>
  )
}

export default Pricing
