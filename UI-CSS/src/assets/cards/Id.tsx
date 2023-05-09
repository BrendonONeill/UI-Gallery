import { useEffect, useState } from "react"
import axios from "axios"

type cat = {
  data: {
    images: {jpg:{image_url: string}},
    name: string | null
  }
}

function Id() {
    const [character, setCharacter] = useState<cat>()
    useEffect(() => {
        axios.get("https://api.jikan.moe/v4/characters/11/full").then((response) => {
            setCharacter(response.data);
    })},[])
    
  return (
    <>
    { character?
    <div className="card-box id-card">
        <img className="profile" src={character?.data?.images.jpg.image_url} alt="" />
        <div className="id-text"><p>{character?.data?.name}</p></div>
    </div> : null
    }
    </>
  )
}

export default Id;