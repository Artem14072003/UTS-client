import {socials} from "../../data/social-icon.tsx";
import {Link} from "react-router-dom";
const SocialIcon = () => {
    return (
        <div className={'social'}>
            {socials.map(({icon: Icon, name, to}) => (
                <Link to={to} className={'icons'} title={name} key={to}>
                    {Icon}
                </Link>
            ))}
        </div>
    );
};

export default SocialIcon;