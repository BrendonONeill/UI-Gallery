import { useEffect, useState } from "react"
import axios from "axios"
import HoverCard from "../components/HoverCard"

type cat = {
  data: {
    images: { jpg: { image_url: string } },
    name: string | null,
    about: string
  }
}

function Id() {
  const [character, setCharacter] = useState<cat>()
  useEffect(() => {
    axios.get("https://api.jikan.moe/v4/characters/11/full").then((response) => {
      setCharacter(response.data);
    })
  }, [])

  return (
    <>
      {character ?
        <div className="card-box id-card">
          <HoverCard>Hover over card</HoverCard>
          <img className="profile" src={character?.data?.images.jpg.image_url} alt="" />
          <div className="id-text"><p>Name: {character?.data?.name}</p>
            <p className="id-about">About: {character?.data?.about.slice(0, 480)}</p></div>
        </div> : null
      }
    </>
  )
}

export default Id;