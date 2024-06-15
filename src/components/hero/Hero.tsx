import Button from "../../UI/button/Button.tsx";
import {memo} from "react";
import usePopapp from "../../hooks/usePopapp.ts";

const Hero = () => {
    const {setPopapp} = usePopapp();
    return (
        <div className={'hero'}>
            <div className="hero-container">
                <div className="hero-info">
                    <h1 className="hero-title">Только лучшие грузовые автомобили!</h1>
                    <p className="hero-desc">Наша компания, предоставляет вам большое количество грузовых автомобилей, которые помогут доставить ваш груз в любую точку мира!</p>
                    <div className="hero-buttons">
                        <Button name={'popappNumber'} setIsVisble={setPopapp}>Связаться с нами</Button>
                        <Button link={'/catalog'} className={'btn-primary'}>В каталог</Button>
                    </div>
                </div>
                <div className="hero-bg">
                    <img src="/image/hero/map.png" className={'hero-image'} alt="map-decoration" draggable={false}/>
                    <img src="/image/hero/shadow_truck.png" className={'hero-image hero-animation'} draggable={false} alt="shadow-decoration"/>
                    <img src="/image/hero/truck.png" className={'hero-image hero-animation'} draggable={false} alt="truck"/>
                </div>
            </div>
        </div>
    );
};

export default memo(Hero);