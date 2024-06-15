import {IInput, IInputStatement} from "../../assets/type/type.ts";

const Input = ({
                   id,
                   type = 'text',
                   title = "",
                   selections,
                   name,
                   option = {},
                   optionRang = {},
                   placeholder = "",
                   register,
                   selectionsNum,
                   min,
                   max,
                   errors,
               }: IInputStatement | IInput) => {
    return (
        <div className={`block-input ${type === 'select' ? 'block-select' : ""} ${errors ? 'errors' : ''}`}>
            {!!title && (<label htmlFor={id}>{title}</label>)}
            {register && type === "textarea" ? (
                <textarea
                    id={id}
                    className={errors ? 'errors' : ''}
                    placeholder={placeholder}
                    {...register(name, option)}
                ></textarea>
            ) : register && type === 'select' ? (
                <select id={id} {...register(name)} className={errors ? 'errors' : ''}>
                    {selections && selections.map(select =>
                        <option key={select.name} value={select.name}>{select.value}</option>
                    )}
                    {selectionsNum && selectionsNum.map(select =>
                        <option key={select} value={select}>{select}</option>
                    )}
                </select>
            ) : register && type === "calc" ? (
                <>
                    <input id={id} type="number" {...register(name, option)} min={min} max={max}/>
                    <input type="range" {...register(`${name}Rang`, optionRang)} min={min} max={max}/>
                </>
            ) : register ? (
                    <input className={errors ? 'errors' : ''} id={id} type={type} {...register(name, option)}
                           placeholder={placeholder}/>
                ) :
                <input id={id} type={type} name={name} placeholder={placeholder}/>
            }
            {type !== "select" ? (errors && <p className={'errors'}>{`${errors.message}`}</p>) : <></>}
        </div>
    );
};

export default Input;