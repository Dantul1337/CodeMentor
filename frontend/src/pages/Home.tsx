import Hero from "../components/home/Hero";
import Advantages from "../components/home/Advantages";
import CoursesPreview from "../components/home/CoursesPreview";
import InstallButton from "../components/common/InstallButton";
import NotificationButton from "../components/common/NotificationButton";
const Home = () => {
    return (
        <div>
            <Hero />
            <Advantages />
            <CoursesPreview />
            <InstallButton />
            <NotificationButton />
        </div>
    );
};

export default Home;