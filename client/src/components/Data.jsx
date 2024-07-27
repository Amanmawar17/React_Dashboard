import { useEffect, useState } from 'react';
import axios from 'axios'; // or import axiosInstance from '../api/axiosInstance';
import Example from "./Example";

export default function Data() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/foo/v1/chart'); // replace with your API endpoint
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Data from Backend</h1>
            <Example data={data}/>
        </div>
    );
}

