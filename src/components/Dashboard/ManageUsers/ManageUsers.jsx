import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
const ManageUsers = () => {
    // const [axiosSecure] = useAxiosSecure();
    // eslint-disable-next-line no-unused-vars
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch("http://localhost:5000/users")
        return res.json();
    })



    return (
        <div className="w-full">
            <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 'admin' :
                                    <button className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button>
                                }</td>
                                <td><button className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;