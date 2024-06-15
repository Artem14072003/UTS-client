import UserLayout from "../layout/UserLayout.tsx";
import {contact} from "../data/contact/contact-data.tsx";
import TitleInfo from "../UI/title-info/TitleInfo.tsx";
import {Link} from "react-router-dom";
import Button from "../UI/button/Button.tsx";

const Catalog = () =>
    <UserLayout className={'contact'}>
        <div className="container">
            <div className="companyInfo">
                <h1 className={'companyInfo-title title'}>{contact.title}</h1>
                <p className={'companyInfo-desc'}> {contact.desc}</p>
                <img src="/comapany.jpeg" alt="company" draggable={false}/>
            </div>
            <div className="contact-container">
                <div className="contact-info">
                    <TitleInfo
                        prevTitle={'связаться'}
                        title={'Контакты'}
                        desc={'Что бы связаться с нашей компание, вы можете воспользоваться следующими ссылками.'}
                        className={'contact'}
                    />
                    <div className="informations">
                        {contact.info.map(({link, value, icon: Icon}, idx) =>
                            link ? (
                                <div key={link} className={'info'}>
                                    <Link className={'info-content'} to={link}>
                                        {Icon} <span className={'info-value'}>{value}</span>
                                    </Link>
                                </div>
                            ) : (
                                <div key={idx} className={'info clock'}>
                                    {Icon}

                                    <div className="info-value_container">
                                        {Array.isArray(value) && value.map((item, idx) =>
                                            (<p key={idx + item}>{item}</p>)
                                        )}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className="contact-map">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa07dfaf87cfb41d49ee038b16b58822a5cb2ea6ce0e7b51bbe631419675c7089&amp;source=constructor"
                        width="610"
                        height="447"
                        frameBorder="0"
                    />
                    <Button target={'_blank'} className={'btn-company'} link={contact.link}>Посмотреть на карте</Button>
                </div>
            </div>
        </div>
    </UserLayout>


export default Catalog;