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
import Glow from "./assets/cards/Glow"
import Frosted from "./assets/cards/Frosted"

function App() {
  const [theme, setTheme] = useState(false)

  return (
    <>
      <div data-theme={theme ? "light-body" : "dark-body"}>
        <div className="container">
          <Header theme={theme} setTheme={setTheme} />
          <main data-theme={theme ? "light-main" : "dark-main"}>
            <ContentContainer theme={theme} title={"Card"}>
              <Float />
              <Anime />
              <Colour />
              <Glow />
              <Aqua />
              <SpinningBG />
              <Id />
              <FinalFantasy />
              <FinalFntasyVII />
              <Frosted />
              <GameCard />
              <AnimeCard />
            </ContentContainer>
            <div className="card-warning">
              <p>Cards can not be viewed on this screen size, Please try a larger screen size</p>
            </div>
          </main>
          <Footer theme={theme} />
        </div>
      </div>
    </>
  )
}

export default App
