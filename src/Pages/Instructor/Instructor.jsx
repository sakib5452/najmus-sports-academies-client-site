/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Instructor = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: instructors = [], refetch } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get('/instructors')
        return res.data;
    })
    refetch()
    return (
        <div className="w-full mb-20">
            <h3 className="text-3xl font-semibold my-4">Total Users:{instructors.length} </h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr >
                            <th>#</th>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructors.map((instructors, index) => <tr key={instructors._id}>
                                <th>{index + 1}</th>
                                <td><img className='rounded-full' src={instructors.img} alt="" height='50'
                                    width='50' /></td>
                                <td>{instructors.name}</td>
                                <td>{instructors.email}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Instructor;