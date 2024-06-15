import Popapp from "../Popapp.tsx";
import usePopapp from "../../../hooks/usePopapp.ts";
import {memo, useCallback, useEffect, useState} from "react";
import Button from "../../../UI/button/Button.tsx";
import {dataNumbers} from "../../../data/popapp/popapp.ts";
import Call from "../../../UI/icon/Call.tsx";
import Copy from "../../../UI/icon/Copy.tsx";
import {Link, useNavigate} from "react-router-dom";
import Alert from "../../../UI/alert/Alert.tsx";

const number = dataNumbers

const PopappNumber = () => {
    const {popapp, setPopapp} = usePopapp();
    const [isAlert, setIsAlert] = useState(false)
    const navigation = useNavigate();

    const isVisible = useCallback(() => setPopapp ?
        setPopapp((prev) => ({...prev, wpopappNumber: false, popappStatement: true})) :
        null, []);

    const setCopy = useCallback((phone: string) => {
        setIsAlert(true)
        return navigator.clipboard.writeText(phone)
    }, [])

    useEffect(() => {
        if (popapp.popappSpareParts && setPopapp) {
            navigation('/spare-parts')
            setPopapp((prev) => ({...prev, popappSpareParts: false}))
        }
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = "visible"
        }
    }, [])

    return (
        <Popapp title={number.title} className={'popapp-numbers'} name={'popappNumber'} setPopapp={setPopapp}>
            {number.data.map(content => (
                <div key={content.title} className="popapp-phones">
                    <h2 className={"popapp-phones_title"}>{content.title}</h2>
                    {content.number.map((number, idx) => (
                        <div key={number.href + idx} className={'popapp-phone'}>
                            <div className="popapp-phone_info">
                                <Link className={'phone-info_title'} to={`tel:${number.href}`}>{number.tel}</Link>
                                <div onClick={() => setCopy(number.tel)} className="copy"><Copy/></div>
                            </div>
                            <Button link={`tel:${number.href}`}><Call/></Button>
                        </div>
                    ))}
                </div>
            ))}
            <div className="popapp-numbers_btn">
                <p className={'popapp-numbers_btn-title'}>Если у вас нет возможности позвонить, можете подать заявку на
                    обратный
                    звонок</p>
                <Button className={'btn-popapp'} onClick={isVisible}>Подать заявку</Button>
            </div>
            {isAlert &&
                <Alert time={150} text={"Номер телефона, успешно скопирован"} className={'success'} setIsAlert={setIsAlert}/>}
        </Popapp>
    );
};

export default memo(PopappNumber);