import {memo} from "react";
import {IComponentTable} from "../../assets/type/type.ts";

const Table = ({data, nameTable, title}: IComponentTable) => {
    return (
        <div className={`table-wrapper ${nameTable}`}>
            {title && (
                <h2 className={'title-table title'}>{title}</h2>
            )}
            <div className={`table-container ${data.length > 20 ? 'one-table' : ''}`}>
                {data.length > 10 ? (
                    <>
                        <table className={`table-${nameTable} table ${data.length > 20 ? 'w-full' : ''}`}>
                            <tbody className={`table-body`}>
                            {data
                                .slice(0, 10)
                                .map((option, idx) => (
                                    <tr className={`table-content content`} key={option.title + idx}>
                                        <td className={`table-title content-item`}>{option.title}</td>
                                        <td className={`table-value content-item`}>{option.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <table className={`table-${nameTable} table`}>
                            <tbody className={`table-body`}>
                            {data
                                .slice(10, data.length)
                                .map((option, idx) => (
                                    <tr className={`table-content content`} key={option.title + idx}>
                                        <td className={`table-title content-item`}>{option.title}</td>
                                        <td className={`table-value content-item`}>{option.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </>
                ) : (
                    <table className={`table-${nameTable} table`}>
                        <tbody className={`table-body`}>
                        {data.map((option, idx) => (
                            <tr className={`table-content content`} key={option.title + idx}>
                                <td className={`table-title content-item`}>{option.title}</td>
                                <td className={`table-value content-item`}>{option.value}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default memo(Table);