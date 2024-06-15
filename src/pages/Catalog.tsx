import UserLayout from "../layout/UserLayout.tsx";
import Swiper from "../components/slider/Swiper.tsx";
import Filter from "../components/filter/Filter.tsx";
import Pagination from "../components/pagination/Pagination.tsx";
import WrapperCard from "../components/wrapper-card/WrapperCard.tsx";
import {useState} from "react";
import {IDataProduct} from "../assets/type/type.ts";
import {useQuery} from "@tanstack/react-query";
import {apiServices} from "../services/api.services.ts";
import Sad from "../components/sad/Sad.tsx";
import Loading from "../components/loading/Loading.tsx";

const Catalog = () => {

    const {data: baseData, isLoading} = useQuery({
        queryKey: ['catalog'],
        queryFn: () => apiServices.getCatalog()
    })

    const [newData, setNewData] = useState<null | IDataProduct[]>(null)
    const [pagination, setPagination] = useState({
        start: 0,
        end: 1
    })

    return (
        <UserLayout>
            <div className={`container ${!isLoading && baseData.card.length > 0 ? '' : 'container-sad'}`}>
                <h1 className={'hidden'}>Каталог машин</h1>

                {!isLoading ? (
                    baseData && baseData.card.length > 0 ? (
                        <>
                            <Swiper title={'Новинки грузовых автомобилей'} swipers={baseData.swiper}/>
                            <Filter data={baseData.card} setNewData={setNewData}/>
                            <WrapperCard pagination={pagination} data={newData ? newData : baseData.card}/>

                            {(((!newData) && baseData.card.length > 9) || (newData && newData.length > 9)) && (
                                <Pagination
                                    setPagination={setPagination}
                                    len={Math.ceil((newData && newData.length > 0 ? newData.length : baseData.card.length) / 9)}
                                />
                            )}
                        </>
                    ) : (
                        <Sad/>
                    )
                ) : <Loading />}
            </div>
        </UserLayout>
    );
};

export default Catalog;