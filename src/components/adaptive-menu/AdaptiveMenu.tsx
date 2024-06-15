import {Link} from "react-router-dom";
import Button from "../../UI/button/Button.tsx";
import {IAdaptiveMenu} from "../../assets/type/type.ts";
import {memo} from "react";
import Cross from "../../UI/icon/Cross.tsx";

const AdaptiveMenu = ({setPopapp, nav, setActive, active, pathname}: IAdaptiveMenu) => {
    return (
        <>
            <Button
                setIsVisble={setPopapp}
                name={"popappStatement"}
                className={'btn-header btn-adaptive'}
            >
                {nav[nav.length - 1].name}
            </Button>
            <div className="burger_menu">
                <Button
                    onClick={() => setActive(!active)}
                    name={"popappStatement"}
                    className={`btn-header btn-primary burger_menu-btn ${active ? 'active' : ''}`}
                >
                    <span className={'line'}/>
                </Button>
                <div className={`menu ${active ? 'active' : ''}`}>
                <Button
                    onClick={() => setActive(!active)}
                    name={"popappStatement"}
                    className={'btn-cross btn-primary'}
                >
                   <Cross />
                </Button>
                    <ul className={'menu-items'}>
                        {nav.map(item => (
                            <li className={'link-item'} key={item.to ?? item.type}>
                                {item.to && (
                                    <Link
                                        className={`link ${pathname === item.to ? 'active' : ''}`}
                                        to={item.to}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                        <li className={'link-item'}>
                            <Button
                                setIsVisble={setPopapp}
                                name={"popappStatement"}
                                className={'btn-header btn-application'}
                            >
                                {nav[nav.length - 1].name}
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default memo(AdaptiveMenu);