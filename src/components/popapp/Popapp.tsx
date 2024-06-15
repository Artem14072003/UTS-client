import {IComponentPopapp} from "../../assets/type/type.ts";
import Cross from "../../UI/icon/Cross.tsx";
import usePopapp from "../../hooks/usePopapp.ts";
import {useNavigate} from "react-router-dom";
const Popapp = ({children, title, className = "", setPopapp, name}: IComponentPopapp) => {

    const {popapp} = usePopapp();
    const navigation = useNavigate();
    const closePopapp = () => {
        if (popapp.popappSpareParts)
            navigation(-1)
        return setPopapp ?
            setPopapp(pre => ({...pre, [name]: !pre[name]})) :
            null
    }

    return (
        <div className={'popapp'} onClick={closePopapp}>
            <div
                onClick={e => e.stopPropagation()}
                className={`popapp-container ${className}`}
            >
                <h2 className={'popapp-title'}>{title}</h2>
                <div onClick={closePopapp} className="popapp-cross">
                    <Cross/>
                </div>
                <div className="poppap-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Popapp;