import data from '../../data/brand-img.json'
import {Link} from "react-router-dom";
import {IBrands} from "../../assets/type/type.ts";
import {memo} from "react";
import usePopapp from "../../hooks/usePopapp.ts";


const brands: [IBrands[], IBrands[]] = [data.brand, data.brand]

const Brand = () => {
    const {popapp} = usePopapp();
    const isStop = popapp.popappStatement || popapp.popappNumber ? 'stop' : ''
    return (
        <div className={'brand'}>
            <div className={"container brand-container"}>
                <div className="brand-content">
                    {brands.map((brand, idx) => (
                        <div
                            key={idx}
                            className={`brand-tinker ${isStop}`}>
                            {brand.map(({name, image}) => (
                                <Link className={'brand-link'} key={name} to={`/catalog/brand/${name}`}>
                                    <img
                                        className={'brand-image'}
                                        src={image}
                                        alt={name}
                                        title={name}
                                        draggable={false}
                                    />
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default memo(Brand);