import { useContext, useEffect, useState } from "react";
import MyClassesDetail from "../../components/MyclassesDetail/MyClassesDetail";
import { AuthContext } from "../../provider/AuthProvider";


const MyClasses = () => {
    const [classes, setClasses] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/classes/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setClasses(data);
            });
    }, [user]);
    console.log(classes)

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto">
            {
                classes.map(classDetail => <MyClassesDetail
                    key={classDetail._id}
                    classDetail={classDetail}
                ></MyClassesDetail>)
            }
        </div>
    );
};

export default MyClasses;