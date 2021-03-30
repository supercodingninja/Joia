import React, { useEffect, useState } from 'react'
import ArtItem from '../components/ArtItem'
import api from '../utils/api'

export default function AllArtworks() {
    const [allArt, setAllArt] = useState([])

    useEffect(() => {
        const asyncBody = async () => {
            let allArt = await api.getAllArt()
            setAllArt(allArt.data)
            console.log(allArt)
        }

        asyncBody().then(() => console.log('done getting all art'))
    }, [])

    function getImg() {
        "props.id" == anArt.user
    }

    return (
        <div className="container">

            {allArt.map((anArt) => (
                
                <div className="container">
                    )) <ArtItem
                    showcontactinfo={true}
                    userid={anArt.user}
                    name={anArt.name}
                    description={anArt.description}
                    category={anArt.category}
                    size={anArt.size}
                    price={anArt.price}
                    imagePath={anArt.imagePath}
                    />
                    {{
                         
                        alert("hello")
            }}

                </div>

}

        </div>
    )
}