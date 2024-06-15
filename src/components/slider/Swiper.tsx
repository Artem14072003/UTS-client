import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {memo, useCallback, useRef, useState} from "react";
import {settings} from "./option/settings.tsx";
import Arrow from "../../UI/icon/Arrow.tsx";
import Button from "../../UI/button/Button.tsx";
import {IComponentSwiper} from "../../assets/type/type.ts";
import {Link} from "react-router-dom";

const Swiper = ({swipers, title}: IComponentSwiper) => {
    const swiper = useRef<Slider | null>(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const setActive = useCallback((isPluse = true) => {
        swiper.current?.slickGoTo(isPluse ? activeSlide + 1 : activeSlide - 1)
    }, [activeSlide])

    return (
        <div className="slider">
            {title && (
                <h2 className={'slider-title'}>{title}</h2>
            )}
            <Slider
                beforeChange={(_, e) => setActiveSlide(e)}
                ref={slider => {
                    swiper.current = slider
                }}
                className={'slider-container'}
                {...settings}
            >
                {swipers.map((swiper, idx) => (
                    <div key={swiper.title ?? swiper.image+idx} className={"swiper-content"}>
                        <div className="slide">
                            <img className={'swiper-image'} src={swiper.image} alt={swiper.title ?? ''}/>
                            {swiper.title && swiper.id && (
                                <Link to={`/catalog/${swiper.id}`} className={'swiper-info'}>
                                    {swiper.title}
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </Slider>

            <Button
                type={'button'}
                onClick={() => setActive(false)}
                disabled={activeSlide === 0}
            >
                <Arrow/>
            </Button>
            <Button
                className={'btn'}
                type={'button'}
                onClick={() => setActive()}
                disabled={activeSlide === swipers.length - 1}
            >
                <Arrow/>
            </Button>

        </div>
    );
};

export default memo(Swiper);