import TitleInfo from "../../UI/title-info/TitleInfo.tsx";
import data from "../../data/service-card.json";
import Button from "../../UI/button/Button.tsx";
import {IServices} from "../../assets/type/type.ts";
import {memo} from "react";


const services: IServices[] = data.service
const Service = () => {
    return (
        <section className="service">
            <div className="container service-container">
                <TitleInfo
                    prevTitle={'Сервис'}
                    title={'Наши услуги'}
                    desc={'Наша компания не только предоставляет покупку грузовых автомобилей, но а также различные услуги, которые помогут вашему грузовеку чувствовать себя более комфортно и уверено на дорогах.'}
                    className={'service'}
                />

                <div className="service-cards">
                    {services.map(service => (
                        <div
                            style={{backgroundImage: `url(${service.bg})`}}
                            key={service.title}
                            className={'service-card'}
                        >
                            <img
                                className={'service-card_img'}
                                src={service.icon}
                                draggable={false}
                                alt={service.title}
                            />
                            <h3 className={'service-card_title'}>{service.title}</h3>
                            <p className={'service-card_desc'}>{service.desc}</p>

                            <Button className={'btn-gray'} link={'/contact'}>Подробнее</Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default memo(Service);