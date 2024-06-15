import UserLayout from "../layout/UserLayout.tsx";
import WrapperCard from "../components/wrapper-card/WrapperCard.tsx";
import Pagination from "../components/pagination/Pagination.tsx";
import Filter from "../components/filter/Filter.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import usePopapp from "../hooks/usePopapp.ts";
import {IDataProduct} from "../assets/type/type.ts";
import {useQuery} from "@tanstack/react-query";
import {apiServices} from "../services/api.services.ts";
import InfoSpareParts from "../components/info-spare-parts/InfoSpareParts.tsx";
import Sad from "../components/sad/Sad.tsx";
import Loading from "../components/loading/Loading.tsx";

const SpareParts = () => {
    const {id} = useParams();
    const {setPopapp} = usePopapp();
    const [newData, setNewData] = useState<null | IDataProduct[]>(null)
    const [pagination, setPagination] = useState({
        start: 0,
        end: 1
    })

    const {data, isLoading} = useQuery({
        queryKey: ['spare parts'],
        queryFn: () => apiServices.getSpareParts()
    })

    useEffect(() => {
        if (!setPopapp) return;
        if (!id) return setPopapp((prev) => ({...prev, popappSpareParts: false}))

        setPopapp((prev) => ({...prev, popappSpareParts: true}))
    }, [id]);
    return (
        <UserLayout className={'spare-parts'}>
            <div className="container">
                <InfoSpareParts />
                {!isLoading ? (
                    data.length > 0 ? (
                        <>
                            <Filter data={data} setNewData={setNewData}/>
                            <WrapperCard pagination={pagination} data={newData ? newData : data}/>

                            {(((!newData) && data.length > 9) || (newData && newData.length > 9)) && (
                                <Pagination
                                    setPagination={setPagination}
                                    len={Math.ceil((newData && newData.length > 0 ? newData.length : data.length) / 9)}
                                />
                            )}
                        </>
                    ) : (
                        <Sad title={'запчастей'}/>
                    )
                ) : <Loading image={'spare-parts.png'} />}
            </div>
        </UserLayout>
    );
};

export default SpareParts;