import Header from "../components/header/Header.tsx";
import React, {useEffect} from "react";
import Footer from "../components/footer/Footer.tsx";
import PopappStatements from "../components/popapp/popapp-statements/PopappStatements.tsx";
import usePopapp from "../hooks/usePopapp.ts";
import PopappNumber from "../components/popapp/popapp-number/PopappNumber.tsx";
import PopappSpareParts from "../components/popapp/popapp-spare-parts/PopappSpareParts.tsx";
import {useLocation} from "react-router-dom";

const UserLayout = ({className = "", children}: { className?: string; children: React.ReactNode }) => {

    const {popapp } = usePopapp()
    const {pathname} = useLocation();

    useEffect(() => {
        if (pathname.includes('/spare-parts/')) return
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <>
            <Header />
            <main className={className}>{children}</main>
            <Footer />
            {popapp.popappStatement && <PopappStatements />}
            {popapp.popappNumber && <PopappNumber />}
            {popapp.popappSpareParts && <PopappSpareParts />}
        </>
    );
};

export default UserLayout;