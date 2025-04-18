import { useState,useEffect } from "react";
import axios from 'axios';


function FetchWithAxios() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');

            console.log(response);
            setPosts(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError('Something went wrong');
        }
    }
    useEffect(() => {
        fetchProducts();
    }, []);
    return <>
    <h3>This is my fakestore</h3>

    {posts.map((post) => {
        return <div key={post.id} style={{border:'1px solid', margin:'10px', padding:'10px', display
        :'flex', justifyContent:'space-around', alignItems:'center', flexDirection:'row' ,flexWrap:'wrap'
        }}>
            <h4>{post.title}</h4>
            <p>{post.price}</p>
            <img src={post.image} alt={post.title} width={100}/>
        </div>
    })}
    
    </>

   
    
}

export default FetchWithAxios