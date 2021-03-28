import React, { useEffect, useState } from 'react'
import ArtItem from '../components/ArtItem'
import api from '../utils/api'
import { Input } from '../components/Form/Form'

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

  return (
    <div className="container">
      <h1 className="text-center my-5">
        The singular word &quot;artwork&quot; is pluralized in English as
        &quot;artworks&quot;, right?
      </h1>

        <h2 className="text-center">Search Artwork</h2>
        <Input />

        {allArt.map((anArt) => (
          <div className="container">
            <ArtItem name={anArt.name} description={anArt.description} category={anArt.category} size={anArt.size} price={anArt.price} location={anArt.location} artistName={anArt.artistName} contact={anArt.contact} imagePath={anArt.imagePath} />
          </div>
        ))}

    </div>
  )
}
