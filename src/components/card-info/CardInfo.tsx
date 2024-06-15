import {ICardInfo} from "../../assets/type/type.ts";
import Button from "../../UI/button/Button.tsx";
import usePopapp from "../../hooks/usePopapp.ts";

const CardInfo = ({title, desc, price}: ICardInfo) => {
    const {setPopapp} = usePopapp();
    return (
        <div className={'content_info'}>
            <h1 className={'content_info_title title'}>{title}</h1>
            <p className={'content_info_desc desc'}>{desc}</p>
            <div className="content_info_content">
                <p className="price_title">Стоимость: <span
                    className="price_value">{Intl.NumberFormat('ru-RU').format(price)} руб.</span></p>
                <Button setIsVisble={setPopapp} message={
                    `Здравствуйте, я хотел(а) бы приобрести грузовик - ${title}, по цене - ${Intl.NumberFormat('ru-RU').format(price)} рублей!`
                } name={'popappStatement'}>Подать заявку</Button>
            </div>
        </div>
    );
};

export default CardInfo;