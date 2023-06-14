import { useEffect, useState } from "react";
import { getAllClasses } from "../../api/classes";
import ManageClassesDetail from "../../components/Dashboard/ManageClassesDetail/ManageClassesDetail";

const ManageClasses = () => {
    const [manageClasses, setManageClasses] = useState([]);
    useEffect(() => {

        getAllClasses()
            .then(data => {

                setManageClasses(data)

            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="grid gap-8 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {
                manageClasses.map(manage => <ManageClassesDetail
                    key={manage._id}
                    manage={manage}
                ></ManageClassesDetail>)
            }
        </div>
    );
};

export default ManageClasses;