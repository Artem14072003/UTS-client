import TitleInfo from "../../UI/title-info/TitleInfo.tsx";
import Card from "../../UI/card/Card.tsx";
import Button from "../../UI/button/Button.tsx";
import {memo} from "react";
import {useQuery} from "@tanstack/react-query";
import {apiServices} from "../../services/api.services.ts";
import {ICard} from "../../assets/type/type.ts";

const NewTruck = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['new_trucks'],
        queryFn: () => apiServices.getHome()
    })

    return (
        <section className="new_trucks">
            <div className="container new_trucks-container">
                <TitleInfo
                    prevTitle={'Новые грузовые автомОбили'}
                    title={'Выберите подходящий грузовой автомобиль'}
                    desc={'Мы представляем популярные китайские грузовые автомобили.'}
                    className={'new_trucks'}
                />
                <div className="new_trucks-cars">
                    {!isLoading ?
                        data.length ?
                            data.map((card: ICard) => (
                                    <Card
                                        key={card.id}
                                        id={card.id}
                                        image={card.image}
                                        title={card.title}
                                        price={card.price}
                                        model={card.model}
                                    />
                                )
                            ) : (
                                <div className={'message_card'}>Увы пока грузовиков нет в наличии, приносим свои извенения!</div>
                            ) : (
                            <div className={'message_card'}>Загрузка...</div>
                        )}
                </div>
                {!isLoading && data.length > 0 && (
                    <Button className={'new_trucks-btn'} link={'catalog'}>Показать все</Button>
                )}
            </div>
        </section>
    );
};

export default memo(NewTruck);