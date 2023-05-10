import "./App.scss"
import ContentContainer from "./assets/components/ContentContainer"
import Footer from "./assets/components/Footer"
import Header from "./assets/components/Header"
import { useState } from "react"
import Float from "./assets/cards/Float"
import FinalFantasy from "./assets/cards/FinalFantasy"
import Anime from "./assets/cards/Anime"
import Aqua from "./assets/cards/Aqua"
import Colour from "./assets/cards/Colour"
import SpinningBG from "./assets/cards/SpinningBG"
import Id from "./assets/cards/Id"
import FinalFntasyVII from "./assets/cards/FinalFntasyVII"
import GameCard from "./assets/cards/GameCard"
import AnimeCard from "./assets/cards/AnimeCard"

function App() {
  const [theme, setTheme] = useState(true)

  return (
    <>
    <div data-theme={theme? "light-body" : "dark-body"}>
    <div className="container">
      <Header theme={theme} setTheme={setTheme} />
      <main data-theme={theme? "light-main" : "dark-main"}>
      <ContentContainer theme={theme} title={"Card"}>
        <Float />
        <Anime />
        <Colour />
        <Aqua />
        <Id />
        <FinalFantasy />
        <SpinningBG />
        <FinalFntasyVII />
        <GameCard />
        <AnimeCard />
      </ContentContainer>
      </main>
      <Footer theme={theme} />
    </div>
    </div>
    </>
  )
}

export default App
