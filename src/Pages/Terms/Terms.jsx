import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <div className='m-10'>
                <h2 className='text-2xl font-bold'>Terms and conditions</h2>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ratione veritatis hic perferendis, mollitia non nostrum molestiae facere possimus autem fuga corrupti omnis rem voluptates veniam accusantium vero repudiandae ipsa.</p>
                <p className='text-lg'>Go back to <span className='text-primary'><Link to="/signUp">Sing Up</Link></span> </p>
            </div>
        </div>
    );
};

export default Terms;