import { GiWarBonnet } from 'react-icons/gi';
import { AiOutlineDown } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';

import Pricing from '../pricing/pricing.component';
import "../task/task.style.css";
import "../../../common.styles.css";

function Task1() {
  return (
    <>
      <nav className='navbar flex text-bold g-2vw'>
        <div className="flex g-1">
          <GiWarBonnet/>
          <p>Untitled UI</p>
        </div>
        <div className="desktop-navbar-menu flex g-2vw">
          <p>Home</p>
          <div className="flex g-1">
            <p>Products</p>
            <AiOutlineDown/>
          </div>
          <div className="flex g-1">
            <p>Resources</p>
            <AiOutlineDown/>
          </div>
          <p>Pricing</p>
          <p className="ml-auto">Login</p>
          <div>
            <button className="btn">Sign up</button>
          </div>
        </div>
        <div className="mobile-navbar-menu ml-auto">
          <HiMenu/>
        </div>
      </nav>
      <Pricing/>
    </>
  )
}

export default Task1
