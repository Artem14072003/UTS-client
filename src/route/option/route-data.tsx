import {createBrowserRouter} from "react-router-dom";
import Home from "../../pages/Home.tsx";
import Catalog from "../../pages/Catalog.tsx";
import CatalogInfo from "../../pages/CatalogInfo.tsx";
import SpareParts from "../../pages/SpareParts.tsx";
import PopappSpareParts from "../../components/popapp/popapp-spare-parts/PopappSpareParts.tsx";
import Calculator from "../../pages/Calculator.tsx";
import Contact from "../../pages/Contact.tsx";
import Error from "../../pages/Error.tsx";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <Error/>,
    }, {
        path: '/catalog',
        element: <Catalog/>,
        children: [{
            path: 'brand/:name',
        }]
    }, {
        path: '/catalog/:id',
        element: <CatalogInfo/>,
    }, {
        path: '/spare-parts',
        element: <SpareParts/>,
        children: [{
            path: '/spare-parts/:id',
            element: <PopappSpareParts/>
        }]
    },
    {
        path: '/calculators',
        element: <Calculator/>
    }, {
        path: '/contact',
        element: <Contact/>
    }
])