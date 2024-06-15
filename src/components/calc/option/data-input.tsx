import {IBlurInput, ISetInput} from "../../../assets/type/type.ts";

export const setInputLizing = ({watch, setValue, data, option, getValues, name, nameOption, max}: ISetInput) => {
    const optionValue = watch(nameOption);

    if (!optionValue) return

    if ((nameOption === "lizing" || nameOption === 'lizingRang') && getValues('contribution') < option.min)
        setValue('contribution', +(option.min).toFixed(2))

    if ((max ?? data.maxlizing) < optionValue) {
        setValue(name, data.maxlizing);
        setValue(nameOption, data.maxlizing);
    } else {
        setValue(name, Math.round(optionValue));
        setValue(nameOption, Math.round(optionValue));
    }
}

export const onBlurLizing = ({watch, option, setValue, data}: IBlurInput) => {

    if(isNaN(watch('contribution')) || watch('contribution') < option.min) {
        setValue("contribution", +(option.min).toFixed(2))
        setValue("contributionRang", option.min)
    } else if (watch("contribution") > option.max) {
        setValue("contribution", +(option.max).toFixed(2))
        setValue("contributionRang", option.max)
    }

    if (isNaN(watch('lizing')) || data.minlizing > watch("lizing")) {
        setValue('lizing', data.minlizing)
        setValue('lizingRang', data.minlizing)
    }
}

export const setOptions = ({watch, setValue, data, option, getValues, name, nameOption}: ISetInput) => {
    return {
        valueAsNumber: true,
        onChange:
            () => setInputLizing(
                {
                    watch,
                    setValue,
                    data,
                    option,
                    getValues,
                    name,
                    nameOption: nameOption
                }
            ),
        onBlur:
            () => onBlurLizing({
                watch,
                option,
                setValue,
                data
            }),
    }
}