import {useEffect, useState} from "react";
import {ICalcInputs, TNameInput} from "../../../assets/type/type.ts";
import Input from "../../../UI/input/Input.tsx";
import {setOptions} from "../option/data-input.tsx";


const CalcInputs = ({data, register, getValues, setValue, watch}: ICalcInputs) => {

    const [option, setOption] = useState({
        max: data.maxlizing - 300000,
        min: Math.round(data.minlizing * 0.1)
    });

    const options = (name: TNameInput, nameOption: TNameInput) =>
        setOptions({
            watch,
            setValue,
            data,
            option,
            getValues,
            name,
            nameOption: nameOption
        })

    useEffect(() => {
        if (watch('lizing') < data.minlizing || isNaN(watch('lizing'))) return

        setOption(({max: watch('lizing') - 300000, min: watch('lizing') * .1}))

        if (watch('contribution') > option.max) {
            setValue('contribution', Math.floor(watch('lizing') - 300000))
            setValue('contributionRang', Math.floor(watch('lizingRang') - 300000))
        }

    }, [watch('lizing'), watch('lizingRang'), watch('contribution'), watch('contributionRang')]);

    return (
        <div className={'inputs'}>
            <Input
                id={'lizing'}
                title={'Сумма кредита'}
                type={'calc'}
                name={'lizing'}
                register={register}
                max={data.maxlizing}
                min={data.minlizing}
                option={options('lizingRang', "lizing")}
                optionRang={options('lizing', "lizingRang")}
            />

            <Input
                id={'contribution'}
                title={'Первоначальный взнос'}
                type={'calc'}
                name={'contribution'}
                register={register}
                max={option.max}
                min={option.min}
                option={options('contributionRang', "contribution")}
                optionRang={options('contribution', "contributionRang")}
            />

            <Input
                id={'select'}
                title={'Срок кредита в месяцах'}
                type={'select'}
                name={'years'}
                register={register}
                option={{
                    valueAsNumber: true
                }}
                selectionsNum={data.term}
            />
        </div>
    );
};

export default CalcInputs;