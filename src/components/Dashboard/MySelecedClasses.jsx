

const MySelecedClasses = () => {
    // let [isOpen, setIsOpen] = useState(false)
    return (
        <div className="w-full">
            <h3 className="text-3xl font-semibold my-4">Total Users: </h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr >
                            <th>#</th>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Pay</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    {/* <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 'admin' :
                                    <button  className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button>
                                }</td>
                                <td>{user.role === 'instructor' ? 'instructor' :
                                    <button  className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button>
                                }</td>
                            </tr>)
                        }


                    </tbody> */}
                </table>
            </div>
        </div>
    );
};

export default MySelecedClasses;