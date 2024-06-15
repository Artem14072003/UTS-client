import {memo} from "react";

const CardCalc = ({title, value}: {title: string, value: number | string}) => {
    return (
        <div className="block-result">
            <h2 className="block-result_title">{title}</h2>
            <p className={"block-result_meaning"}>
                {value}
            </p>
        </div>
    );
};

export default memo(CardCalc);