import UserLayout from "../layout/UserLayout.tsx";
import Swiper from "../components/slider/Swiper.tsx";
import CardInfo from "../components/card-info/CardInfo.tsx";
import TruckSimilar from "../components/truck-similar/TruckSimilar.tsx";
import Table from "../components/table/Table.tsx";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {apiServices} from "../services/api.services.ts";
import Loading from "../components/loading/Loading.tsx";


const CatalogInfo = () => {
    const {id} = useParams();
    const nav = useNavigate();

    const {data, isError, fetchStatus, isLoading} = useQuery({
        queryKey: ['get truck', id],
        queryFn: () => apiServices.getTruck(id),
        retry: 0,
        enabled: !!id,
    })

    useEffect(() => {
        if (isError || !id || isNaN(+id)) return nav('/catalog')
    }, [id, isError, isLoading]);

    return (
        <UserLayout className={'catalog-info'}>
            <div className="catalog-info container">
                {!isLoading && !isError && fetchStatus === 'idle' ? (
                    <>
                        {data.swiper.length === 1 ? (
                            <div className="slider">
                                <div className={'slider-container slide-one'}>
                                    <img
                                        className={'swiper-image'}
                                        src={data.swiper[0].image}
                                        alt={data.cardInfo[0].title}
                                        draggable={false}
                                    />
                                </div>
                            </div>

                        ) : (
                            <Swiper swipers={data.swiper}/>
                        )}
                        <CardInfo {...data.cardInfo[0]}/>
                        <Table title={'Технические характиристики'} nameTable={'truck'}
                               data={[...data.options, ...data.add]}/>
                        {data.similar.length > 0 && (
                            <TruckSimilar similar={data.similar}/>
                        )}
                    </>
                ) : (
                    <Loading />
                )}
            </div>
        </UserLayout>
    );
};

export default CatalogInfo;