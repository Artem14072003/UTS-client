import {memo} from "react";
import {Link} from "react-router-dom";
import {IFooterColumn} from "../../../assets/type/type.ts";

const FooterColumn = ({name, title, data, pathname, setPopapp, isStatement}: IFooterColumn) => {
    return (
        <div className={`footer-column ${name}`}>
            <h2 className={'footer-nav_title'}>{title}</h2>
            <ul>
                {data.map(item => (
                    <li className={pathname === item.to ? 'active' : ""}
                        key={item.to ?? name + item.type}>
                        {item.to ? (
                            <Link className={'footer-link'} to={item.to}>
                                {item.name}
                            </Link>
                        ) : item.type && setPopapp ? (<button
                            onClick={() => setPopapp(prev => ({
                                ...prev,
                                [isStatement(`${item.type}`)]:
                                    !prev[isStatement(`${item.type}`)]
                            }))}
                            className={"btn-footer"}
                        >
                            {item.name}
                        </button>) : <p>Ошибка</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default memo(FooterColumn);