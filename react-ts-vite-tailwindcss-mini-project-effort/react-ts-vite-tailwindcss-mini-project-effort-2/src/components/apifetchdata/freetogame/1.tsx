import React, { useEffect, useState } from 'react';
import { ApiFreeToGame } from '../../../interface/interface';

const ApiFGComponent = () => {

    const [data, setData] = useState<ApiFreeToGame[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const apiUrl = import.meta.env.VITE_APP_FREEGAME;

    const fetchData = async () => {
        setLoading(true);
        try {
            const gameresponse = await fetch(apiUrl);
            if (!gameresponse.ok) {
                throw new Error(`Failed to fetch data ${gameresponse.status}`);
            }
            const finalData: ApiFreeToGame[] = await gameresponse.json();
            setData(finalData);
            console.log(finalData);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
  return (
    <>
        <h2>Free to Game</h2>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {data.map((val) => (
            <div key={val.id}>
                <h3>{val.title}</h3>
                <img src={val.thumbnail} alt="Thumbnail" />
                <p>{val.short_description}</p>
            </div>
        ))}
    </>
  )
}

export default ApiFGComponent