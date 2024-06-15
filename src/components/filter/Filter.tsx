import Button from "../../UI/button/Button.tsx";
import {memo, useEffect, useState} from "react";
import Input from "../../UI/input/Input.tsx";
import {useForm} from "react-hook-form";
import data from "../../data/filter.json"
import {IComponentFilter, IFilter} from "../../assets/type/type.ts";
import FilterIcon from "../../UI/icon/FilterIcon.tsx";
import {useParams} from "react-router-dom";

const filters: IFilter[] = data.filters

const Filter = ({data, setNewData}: IComponentFilter) => {
    const {name} = useParams();
    const [isPanel, setIsPanel] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: {errors}
    } = useForm()

    const searchPanel = handleSubmit(products => {
        if (!setNewData) return

        const filteredData = () => data.filter((product) => products.brands !== "" && products.search !== "" && !isNaN(products.price) ?
                product.title.trim().toLowerCase().includes(products.search.trim().toLowerCase()) && products.brands.toLowerCase() === product.model.toLowerCase() && products.price >= product.price :
                products.search !== '' && products.price ? product.title.trim().toLowerCase().includes(products.search.trim().toLowerCase()) && products.price >= product.price :
                    products.search !== '' && products.brands !== '' ?
                        product.title.trim().toLowerCase().includes(products.search.trim().toLowerCase()) && products.brands.toLowerCase() === product.model.toLowerCase() :
                        products.brands !== '' && !isNaN(products.price) ? products.brands.toLowerCase() === product.model.toLowerCase() && products.price >= product.price :
                            products.search !== '' && product.title.trim().toLowerCase().includes(products.search.trim().toLowerCase()) ||
                            products.brands !== '' && products.brands.toLowerCase() === product.model.toLowerCase() ||
                            products.price && products.price >= product.price || null
        );

        return setNewData(() => filteredData())
    })
    useEffect(() => {
        if (name && setNewData) {
            setValue('brands', name.toUpperCase())
            setNewData(data.filter(search => search.model === name.toUpperCase()))
            if (!isPanel) return reset(['search', 'price'])
        }
        if (!isPanel) return reset()
    }, [isPanel])

    return (
        <div className={'filter'}>
            <Button className={'filter-btn'} onClick={() => setIsPanel(prev => !prev)}>
                <FilterIcon/>
                Фильтр
            </Button>
            {isPanel && (
                <form
                    className={'filter-panel'}
                    onSubmit={searchPanel}
                >
                    {filters.map(filter => (
                        <Input
                            key={filter.id}
                            id={filter.id}
                            type={filter.type}
                            name={filter.name}
                            placeholder={filter.placeholder}
                            selections={filter.selections}
                            register={register}
                            option={filter.name === 'price' ? {
                                valueAsNumber: true
                            } : {}}
                            errors={errors[filter.name]}
                        />
                    ))}

                    <Button>Поиск</Button>
                    <Button className={'btn-primary'} type={'reset'} onClick={() => {
                        if (!setNewData) return
                        setNewData(null)
                        reset()
                    }}>Очистить</Button>
                </form>
            )}
        </div>
    );
};

export default memo(Filter);