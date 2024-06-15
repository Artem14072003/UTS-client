import {Link} from "react-router-dom";

const Logo = () =>
    <Link to={'/'} className={'logo'}>
        <img src="/logo.svg" title={'United Truck Services'} alt="United Truck Services"/>
    </Link>

export default Logo;