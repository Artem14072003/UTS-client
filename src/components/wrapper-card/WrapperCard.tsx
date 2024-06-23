import {IWrapperCard} from "../../assets/type/type.ts";
import Card from "../../UI/card/Card.tsx";
import {useLocation} from "react-router-dom";
import {memo} from "react";


const WrapperCard = ({className, data, title, pagination}: IWrapperCard) => {
    const nav = useLocation().pathname

    return (
        <div className={`wrapper-card ${className ?? ''}`}>
            {data.length ?
                data
                    .slice(
                        data.length > 9 && pagination ? pagination.start * 9 : undefined,
                        data.length > 9 && pagination ? pagination.end * 9 : undefined
                    )
                    .map((product) => (
                        <Card
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            model={product.model}
                            isSpareParts={!nav.includes('/catalog')}
                        />
                    )) : (
                    <div className={'search'}>
                        <img className={'search-image'} src="/image/search/search.svg" alt="Ничего не найдено" draggable={false}/>
                        <p className={'search-text'}>
                            {title ?? `Нет ${!nav.includes('/catalog') ? 'подходящей запчасти' : 'подходящего грузовика'} под
                        ваш запрос!`}
                        </p>
                        <p className={'search-text'}>
                            Чтобы увидеть все {!nav.includes('/catalog') ? 'запчасти' : 'грузовики'}, очистите поиск в фильтрации.
                        </p>
                    </div>
                )
            }
        </div>
    );
};

export default memo(WrapperCard);