import spareParts from '../../data/spare-parts.json'
import {memo} from "react";

const data = spareParts.data

const InfoSpareParts = () => {
    return (
        <div className={'info'}>
            <h1 className={'info-title title'}>{data.title}</h1>
            <p className={'info-desc'}>{data.desc}</p>
        </div>
    );
};

export default memo(InfoSpareParts);