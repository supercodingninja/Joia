import React, { useEffect, useState } from 'react'
import ArtItem from '../components/ArtItem';
import api from '../utils/api'

export default function AllArtworks() {
    const [allArt, setAllArt] = useState([]);

    useEffect(() => {
        const asyncBody = async () => {
            let allArt = await api.getAllArt();
            setAllArt(allArt.data);
        }

        asyncBody().then(() => console.log("done getting all art"));

    }, []);

    return (

        <>
            <h1>the singular word &quot;artwork&quot; is pluralized in English as &quot;artworks&quot;, right?</h1>
            <h2>yo dis be all art.</h2>
            <ul>
            {allArt.map((anArt,i) => <ArtItem name={anArt.name} imagePath={anArt.imagePath}></ArtItem>)}
            </ul>
        </>

    )
}