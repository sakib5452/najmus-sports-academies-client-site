/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

import { useContext, useEffect, useState } from "react";

import ClassesDetail from "../ClassesDetail/ClassesDetail";


const Classes = () => {

    const [approved, setApproved] = useState([])


    // const [axiosSecure] = useAxiosSecure();
    // const { data: approved = [], refetch } = useQuery(['approved'], async () => {
    //     const res = await axiosSecure.get('/approved')
    //     return res.data;
    // })
    // refetch()

    useEffect(() => {
        fetch('https://sports-academies-server-site.vercel.app/approved')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setApproved(data);
            });
    }, []);


    console.log(approved)



    return (
        <div className="grid grid-cols-1 lg:grid-cols-3">

            {
                approved.map(approved => <ClassesDetail
                    key={approved._id}
                    approved={approved}
                ></ClassesDetail>





                )
            }
        </div>

    );
};

export default Classes;