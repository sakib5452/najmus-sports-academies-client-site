
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";


const MySelecedClasses = () => {
    const { user } = useContext(AuthContext)
    const [selected, setSelected] = useState([])

    useEffect(() => {
        fetch(`https://sports-academies-server-site.vercel.app/addClass/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setSelected(data);
            });
    }, [user]);

    return (
        <div className="w-full">
            <h3 className="text-3xl font-semibold my-4">Selected Class:  </h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr >
                            <th>#</th>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Pay</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            selected.map((users, index) => <tr key={users._id}>
                                <th>{index + 1}</th>
                                <td><img className='rounded-full' src={users.image} alt="" height='100'
                                    width='80' /></td>
                                <td>{users.name}</td>
                                <td>$ {users.price}</td>
                                <td>
                                    <Link to="/dashboard/payment"><button className="btn btn-ghost bg-orange-600  text-white">pay</button></Link>
                                </td>
                                <td>
                                    <button className="btn btn-ghost bg-orange-600  text-white">delete</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelecedClasses;