import React, { useEffect, useState } from 'react'
import ArtItem from '../components/ArtItem';
import api from '../utils/api'
import {useAuthenticatedUser} from '../utils/auth';

export default function AllArtworksByUser() {

    const [allArtByUser, setAllArtByUser] = useState<any[]>([]);

    const user = useAuthenticatedUser();

    useEffect(() => {
        const asyncBody = async () => {
            let allArt = await api.getAllArtByUser(user._id);
            setAllArtByUser(allArt.data);
        }

        asyncBody().then(() => console.log("done getting user art"));

    }, []);

    return (

        <>
            <h2>all art by the current user.</h2>
            <ul>
            {allArtByUser.map((anArt,i) => <ArtItem name={anArt.name} imagePath={anArt.imagePath}></ArtItem>)}
            </ul>
        </>

    )
}