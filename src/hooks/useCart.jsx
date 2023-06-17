import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: addClass = [] } = useQuery({
        queryKey: ['addClass', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://sports-academies-server-site.vercel.app/addClass?email=${user?.email}`)
            return res.json();
        },
    })

    return [addClass, refetch]

}

export default useCart;