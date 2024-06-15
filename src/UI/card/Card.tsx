import Button from "../button/Button.tsx";
import {ICard} from "../../assets/type/type.ts";
import Call from "../icon/Call.tsx";
import {memo} from "react";
import usePopapp from "../../hooks/usePopapp.ts";


const Card = ({id, image, title, price, model, isHTwo = false, isSpareParts = false}: ICard) => {
    const {setPopapp} = usePopapp();
    return (
        <div className={`card card-${id}`}>
            <div className="card-img">
                <img src={image} alt={title} draggable={false}/>
            </div>
            <div className="card-info">
                {isHTwo ?
                    <h2 className={'card-title'}>{title}</h2> :
                    <h3 className={'card-title'}>{title}</h3>
                }
                <div className="card-desc">
                    <p className={'card-price'}>{`${Intl.NumberFormat('ru-RU').format(price)} ₽`}</p>
                    <p className={'card-model'}>{model}</p>
                </div>
                {
                    isSpareParts ? (
                        <div className={'card-btn_container'}>
                            <Button className={'card-btn btn-gray'} setIsVisble={setPopapp} name={'popappNumber'}>
                                <Call /> Позвонить сейчас
                            </Button>
                            <Button className={'card-btn btn-gray'} link={`/spare-parts/${id}`}>
                                О товаре
                            </Button>
                        </div>
                    ) : (
                        <Button className={'card-btn btn-gray'} link={`/catalog/${id}`}>
                            Посмотреть
                        </Button>
                    )
                }
            </div>
        </div>
    );
};

export default memo(Card);