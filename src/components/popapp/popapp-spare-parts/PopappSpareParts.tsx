import Popapp from "../Popapp.tsx";
import usePopapp from "../../../hooks/usePopapp.ts";
import {memo, useEffect} from "react";
import Button from "../../../UI/button/Button.tsx";
import Table from "../../table/Table.tsx";
import Call from "../../../UI/icon/Call.tsx";
import {useQuery} from "@tanstack/react-query";
import {apiServices} from "../../../services/api.services.ts";
import {useNavigate, useParams} from "react-router-dom";
import Loading from "../../loading/Loading.tsx";

const PopappSpareParts = () => {
    const {popapp, setPopapp} = usePopapp();
    const {id} = useParams();
    const nav = useNavigate();

    const {data: sparePart, isError, fetchStatus, isLoading} = useQuery({
        queryKey: ['spare part'],
        queryFn: () => apiServices.getSparePart(id),
        retry: 0,
        enabled: !!id
    })

    useEffect(() => {
        if (!isLoading && !sparePart.id) return nav('/spare-parts')
        document.body.style.overflow = 'hidden'
        return () => {
            if (popapp.popappNumber || popapp.popappStatement)
                document.body.style.overflow = "hidden"
            else
                document.body.style.overflow = "visible"
        }
    }, [popapp, isLoading, isError])

    return (
        <Popapp title={'О товаре'} name={"popappSpareParts"} className={'popappSpareParts'} setPopapp={setPopapp}>
            {!isLoading && fetchStatus === 'idle' ? (
                <>
                    <div className="popapp-content">
                        <img className={'popapp-image'} src={sparePart.image} alt={sparePart.title} draggable={false}/>
                        <h2 className={'titleInfo'}>{sparePart.title}</h2>
                        <Table data={[{title: 'Артикул', value: sparePart.articul}, ...sparePart.option]} nameTable={'spareParts'}/>
                    </div>
                    <div className="popapp-btn">
                        <Button setIsVisble={setPopapp} name={'popappStatement'}
                                message={`Здравствуйте, я хотел(а) бы приобрести запчасть - ${sparePart.title}, артикул - ${sparePart.articul}.`}>Подать
                            заявку</Button>
                        <Button setIsVisble={setPopapp} className={'btn-primary'}
                                name={'popappNumber'}><Call/> Позвонить сейчас</Button>
                    </div>
                </>
            ) : (
                <Loading image={'spare-parts.png'} />
            )}
        </Popapp>
    );
};

export default memo(PopappSpareParts);