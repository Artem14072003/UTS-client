import {IDataProduct} from "../../assets/type/type.ts";
import WrapperCard from "../wrapper-card/WrapperCard.tsx";

const TruckSimilar = ({similar} : {similar: IDataProduct[] }) => {
    return (
        <div className={'similar'}>
            <h2 className={'similar-title title'}>Похожие грузовые автомобили</h2>

            <WrapperCard data={similar} />
        </div>
    );
};

export default TruckSimilar;