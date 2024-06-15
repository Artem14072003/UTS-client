import UserLayout from "../layout/UserLayout.tsx";
import Hero from "../components/hero/Hero.tsx";
import Brand from "../components/brand/Brand.tsx";
import NewTruck from "../components/new-truck/NewTruck.tsx";
import Service from "../components/service/Service.tsx";
import Advantages from "../components/advantages/Advantages.tsx";

const Home = () => {

    return (
        <UserLayout>
            <Hero/>
            <Brand/>
            <NewTruck/>
            <Service/>
            <Advantages/>
        </UserLayout>
    );
};

export default Home;