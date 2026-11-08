import Hero from "../components/Hero/Hero";
import PopularItems from "../components/Categories/PopularItems.jsx";
import Benefits from "../components/Benefits/Benefits.jsx";

function HomePage() {
    return (
        <>
         <Hero />
            <PopularItems />
            <Benefits />
         </>
    );
}

export default HomePage;