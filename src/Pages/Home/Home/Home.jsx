import About from "../../About/About";
import Class from "../../Class/Class";
import Instructors from "../../Instructors/Instructors";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Class></Class>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;