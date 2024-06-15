import Logo from "../../UI/logo/Logo.tsx";
import header from '../../data/header-nav.json'
import {Link, useLocation} from "react-router-dom";
import Button from "../../UI/button/Button.tsx";
import {INav} from "../../assets/type/type.ts";
import usePopapp from "../../hooks/usePopapp.ts";
import {useEffect, useState} from "react";
import AdaptiveMenu from "../adaptive-menu/AdaptiveMenu.tsx";

const nav: INav[] = header.nav

const Header = () => {
    const {pathname} = useLocation();

    const {setPopapp} = usePopapp();
    const [active, setActive] = useState(false);

    const {popapp} = usePopapp();

    useEffect(() => {
        if (popapp.popappStatement) setActive(false)
        if (active)
            document.body.style.overflow = 'hidden';
        return () => {
            if (popapp.popappStatement) return
            document.body.style.overflow = 'auto';
        }
    }, [active, popapp]);

    return (
        <header id={'header'} className={'header'}>
            <div className="container header-container">
                <Logo/>
                <nav className={"navigation"}>
                    <ul className={'link-items'}>
                        {nav.map(item => (
                                <li className={'link-item'} key={item.to ?? item.type}>
                                    {item.to ? (
                                        <Link
                                            className={`link ${pathname === item.to ? 'active' : ''}`}
                                            to={item.to}
                                        >
                                            {item.name}
                                        </Link>
                                    ) : setPopapp ? (
                                        <Button
                                            setIsVisble={setPopapp}
                                            name={"popappStatement"}
                                            className={'btn-header'}
                                        >
                                            {item.name}
                                        </Button>
                                    ) : <></>}
                                </li>
                            )
                        )}
                    </ul>
                </nav>
                <AdaptiveMenu
                    nav={nav}
                    setPopapp={setPopapp}
                    setActive={setActive}
                    active={active}
                    pathname={pathname}
                />
            </div>
        </header>
    );
};

export default Header;