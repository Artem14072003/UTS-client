import UserLayout from "../layout/UserLayout.tsx";
import CalcInputs from "../components/calc/inputs/CalcInputs.tsx";
import CalcResult from "../components/calc/result/CalcResult.tsx";
import {useForm} from "react-hook-form";
import {memo, useEffect} from "react";
import {dataCalc} from "../assets/type/type.ts";
import {useQuery} from "@tanstack/react-query";
import {apiServices} from "../services/api.services.ts";
import Loading from "../components/loading/Loading.tsx";

const Calculator = () => {

    const {data, isLoading} = useQuery({
        queryKey: ['calculator'],
        queryFn: () => apiServices.getCalc()
    })

    const {
        register,
        watch,
        setValue,
        getValues
    } = useForm<dataCalc>({
        mode: "onChange",
    })

    useEffect(() => {
        if (!isLoading) {
            setValue('lizing', data.minlizing)
            setValue('contribution', data.minlizing * 0.1)
            setValue('years', data.term[0])
        }
    }, [isLoading]);

    return (
        <>
            <UserLayout className={'calculator'}>
                <h1 className={'title calculator-title'}>Кредитный калькулятор </h1>
                {!isLoading ? (
                    <div className={'container'}>
                        <CalcInputs
                            data={data}
                            register={register}
                            watch={watch}
                            setValue={setValue}
                            getValues={getValues}
                        />
                        {watch('lizing') && watch('contribution') && watch('years') ? (
                            <CalcResult
                                data={data}
                                watch={watch}
                            />
                        ) : <></>}
                    </div>
                ) : <Loading image={'calc.svg'} /> }
            </UserLayout>
        </>
    );
};

export default memo(Calculator);