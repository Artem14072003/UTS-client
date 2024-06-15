import Popapp from "../Popapp.tsx";
import {useForm} from "react-hook-form";
import Button from "../../../UI/button/Button.tsx";
import usePopapp from "../../../hooks/usePopapp.ts";
import Input from "../../../UI/input/Input.tsx";
import {DateStatements, IStatemetsData} from "../../../assets/type/type.ts";
import {dataStatements} from "../../../data/popapp/popapp.ts"
// import {isValidPhoneNumber} from "react-phone-number-input";
import {memo, useEffect, useState} from "react";
import Alert from "../../../UI/alert/Alert.tsx";
import {isValidPhoneNumber} from "react-phone-number-input";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {apiServices} from "../../../services/api.services.ts";

const statements: IStatemetsData = dataStatements

const PopappStatements = () => {
    const {pathname} = useLocation();
    const {id} = useParams();
    const [isAlert, setIsAlert] = useState(false);
    const {setPopapp, popapp} = usePopapp()
    const navigation = useNavigate();

    const services =
        pathname === `/catalog/${id}` ?
            'catalog' : pathname === `/spare-parts/${id}` ?
                'spare-parts' :
                statements.data[2].selections ?
                    statements.data[2].selections.find(({name}) =>
                        name === pathname.replace('/', ''))?.name ?? '' : ""

    const {
        register,
        handleSubmit,
        formState: {errors},
        getValues,
        setValue,
        reset,
        setError
    } = useForm<DateStatements>({
        mode: "onTouched",
        defaultValues: {
            services: services,
        }
    });

    const {mutate, isPending, isSuccess} = useMutation({
        mutationKey: ['create-email'],
        mutationFn: (data: DateStatements) => apiServices.postMail(data),
        onSuccess: () => {
            if (!setPopapp) return
            const timeout = setTimeout(() =>
                setPopapp((prev) => (
                    {...prev, popappStatement: false})
                ), 2500)
            setIsAlert(true)
            reset()

            return () => {
                clearTimeout(timeout)
            }
        },
        onError: (e) => {
            console.error(e)
        }
    })

    const onSubmit = handleSubmit((data) => {
        if (getValues('services') === "") {
            setIsAlert(true)
            return setError('services', {type: 'required'})
        }
        if (!isValidPhoneNumber(getValues('tel')))
            return setError('tel', {type: 'pattern', message: 'Такого номера не существует'})

        mutate(data)
    })

    useEffect(() => {
        if (popapp.message) setValue('desc', popapp.message)
        if ((popapp.popappSpareParts || popapp.popappNumber) && setPopapp) {
            if (popapp.popappSpareParts) {
                navigation('/spare-parts')
                setValue('services', 'spare-parts')
            }
            setPopapp((prev) => ({...prev, popappNumber: false, popappSpareParts: false}))
        }

        document.body.style.overflow = 'hidden'
        return () => {
            if (!setPopapp) return
            document.body.style.overflow = "auto"
        }
    }, [popapp])

    return setPopapp && (
        <Popapp title={statements.title} setPopapp={setPopapp} name={'popappStatement'}>
            <form
                className={'popapp-statements_form'}
                onSubmit={onSubmit}
            >
                {statements.data.map(statement => (
                    <Input
                        key={statement.id}
                        id={statement.id}
                        option={statement.option}
                        title={statement.title}
                        type={statement.type}
                        name={statement.name}
                        placeholder={statement.placeholder}
                        selections={statement.selections}
                        register={register}
                        errors={errors[statement.name]}
                    />
                ))}
                <div className="block-btn">
                    <Button disabled={isPending} className={'btn-popapp'}>Отправить</Button>
                </div>
            </form>
            {isAlert &&
                <Alert
                    time={250}
                    text={!errors.services && isSuccess ? "Заявление успешно доставлено!" : "Вы не выбрали услугу"}
                    className={!errors.services && isSuccess ? 'success' : ''}
                    setIsAlert={setIsAlert}
                />
            }
        </Popapp>
    );
};

export default memo(PopappStatements);