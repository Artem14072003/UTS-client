import TitleInfo from "../../UI/title-info/TitleInfo";
import data from "../../data/advantages-card.json"
import {IAdvantages} from "../../assets/type/type.ts";
import {memo} from "react";


const advantages: IAdvantages[] = data.advantages

const Advantages = () => {
    return (
            <section className="advantages">
                <div className="container advantages-container">
                    <TitleInfo
                        prevTitle={'ПРЕИМУЩЕСТВА'}
                        title={'Почему стоит выбрать именно Нас?'}
                        desc={'Мы предоставляем множество гарантий и преимуществ, при покупке грузового автомобиля. Вот некоторые из преимуществ, которые вы получите'}
                        className={'advantages'}
                    />

                    <div className="advantages-cards">
                        {advantages.map(({icon, title, desc}) => (
                            <div key={title} className="advantages-card">
                                <img className={'advantages-card_image'} src={icon} alt={title} draggable={false}/>
                                <div className="advantages-card_info">
                                    <h3 className={'advantages-card_info-title'}>{title}</h3>
                                    <p className="advantages-card_info-desc">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
    );
};

export default memo(Advantages);