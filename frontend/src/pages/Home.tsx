import Hero from "../components/home/Hero";
import Advantages from "../components/home/Advantages";
import CoursesPreview from "../components/home/CoursesPreview";
import InstallButton from "../components/common/InstallButton";

const Home = () => {
    return (
        <div>
            <Hero />
            <Advantages />
            <CoursesPreview />
            <InstallButton />
        </div>
    );
};

export default Home;