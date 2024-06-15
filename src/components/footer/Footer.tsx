import Logo from "../../UI/logo/Logo.tsx";
import SocialIcon from "../../UI/social-icon/SocialIcon.tsx";
import companyData from "../../data/header-nav.json";
import footerLink from "../../data/footer-link.json";
import {INav, INavFooter} from "../../assets/type/type.ts";
import {Link, useLocation} from "react-router-dom";
import Arrow from "../../UI/icon/Arrow.tsx";
import usePopapp from "../../hooks/usePopapp.ts";
import {memo, useCallback, useEffect, useRef} from "react";
import FooterColumn from "./column/FooterColumn.tsx";

const services: INav[] = companyData.nav
const links: INavFooter[] = footerLink.links

const Footer = () => {

    const {pathname} = useLocation();
    const ref = useRef<null | HTMLDivElement>(null);

    const {setPopapp} = usePopapp()

    const isStatement = useCallback((name: string) =>
        name === "popappStatement" ? name : "popappNumber", [])

    useEffect(() => {
        const getScroll = () => {
            if (!ref.current) return

            const scroll = Math.round(window.scrollY)

            return scroll >= 0 && scroll <= 30 ?
                ref.current.style.display = "none" :
                ref.current.style.display = "flex"
        }

        getScroll()

        window.addEventListener('scroll', getScroll)

        return () => {
            window.removeEventListener('scroll', getScroll)
        }
    }, []);


    return (
        <footer className={'footer'}>
            <div className="container footer-container">
                <div className="footer-content">
                    <div className="footer-details">
                        <Logo/>
                        <p className={'footer-details_desc'}>Мы являемся хорошо известной компанией по продаже
                            грузовиков, у которой есть множество партнеров.</p>
                        <SocialIcon/>
                    </div>
                    <nav className="footer-nav">
                        <div className="footer-column company">
                            <h2 className={'footer-nav_title'}>Компания</h2>
                            <ul>
                                {services.map(({to, name}, idx) => idx !== 3 && (
                                    <li className={pathname === to ? 'active' : ""} key={name}>
                                        {to && (
                                            <Link className={'footer-link'} to={to}>
                                                {name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {links.map(({title, name, data}) => (
                            <FooterColumn
                                key={name}
                                title={title}
                                name={name}
                                data={data}
                                setPopapp={setPopapp}
                                pathname={pathname}
                                isStatement={isStatement}
                            />
                        ))}
                    </nav>
                </div>
                <div ref={ref} className={'footer-btn'}>
                    <a href={'#header'} className={'btn'}>
                        <Arrow/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);