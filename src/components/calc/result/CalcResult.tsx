import {useEffect, useMemo, useState} from "react";
import {ICalcResult} from "../../../assets/type/type.ts";
import CardCalc from "../card-calc/CardCalc.tsx";
import Button from "../../../UI/button/Button.tsx";
import usePopapp from "../../../hooks/usePopapp.ts";

const CalcResult = ({data, watch}: ICalcResult) => {

    const [payment, setPaymant] = useState(0);
    const [tax, setTax] = useState(0);
    const {setPopapp} = usePopapp()

    const paymentValue = useMemo(() =>
            (watch('lizing') - watch('contribution'))
            * (((data.percent / 100) / 12) / (1 - Math.pow(1 + ((data.percent / 100) / 12), -(+watch('years')))))
        , [watch("lizing"), watch('contribution'), watch('lizingRang'), watch('contributionRang'), watch('years')])

    useEffect(() => {
        setPaymant(paymentValue);
        setTax(payment * .2)

    }, [watch("lizing"), watch('contribution'), watch('lizingRang'), watch('contributionRang'), watch('years'), payment]);

    const message = useMemo(() =>
        `Здравствуйте! Меня заинтересовал лизинг на сумму в ${watch('lizing')} рублей!`, [watch('lizing')])

    return (
        <div className={'result'}>
            <div className="result-content">
                <CardCalc title={"Процентная ставка"} value={`${data.percent}%`}/>
                <CardCalc title={"Ежемесячный платеж"} value={Intl.NumberFormat('ru-RU').format(+payment.toFixed(2))}/>
                <CardCalc title={"Налоговый вычет"} value={Intl.NumberFormat('ru-RU').format(+tax.toFixed(2))}/>
                <CardCalc title={"Сумма кредита"} value={Intl.NumberFormat('ru-RU').format(watch('lizing'))}/>
            </div>

            <div className="wrapp-btn">
                <button
                    className={'btn'}
                    onClick={() => setPopapp ?
                        setPopapp((prev) =>
                            ({...prev, popappStatement: true, message: message})) : null}
                >
                    Подать заявку
                </button>
                <Button setIsVisble={setPopapp} name={'popappNumber'} className={"btn-primary"}>Связаться с менеджером</Button>
            </div>
        </div>
    );
};

export default CalcResult;