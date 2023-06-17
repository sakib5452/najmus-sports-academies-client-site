
// import { Elements } from "@stripe/react-stripe-js";

// import { loadStripe } from "@stripe/stripe-js";

// import CheckoutForm from "./CheckoutForm";
// import useCart from "../../hooks/useCart";



// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
// const Payment = () => {
//     const [cart] = useCart();
//     const total = cart.reduce((sum, item) => sum + item.price, 0);
//     const price = parseInt(total)

//     return (
//         <div className="w-full">
//             <h3>tka dao</h3>
//             <Elements stripe={stripePromise}>
//                 <CheckoutForm cart={cart} price={price}></CheckoutForm>
//             </Elements>
//         </div>
//     );
// };

// export default Payment;