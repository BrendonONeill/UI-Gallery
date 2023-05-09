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
        <SpinningBG />
        <FinalFantasy />
        <Id />
      </ContentContainer>
      <ContentContainer theme={theme} title={"Buttons"}>
        <div key={1}><p>Test button</p></div>
        <div key={2}><p>Test button</p></div>
      </ContentContainer>
      <ContentContainer theme={theme} title={"Forms"}>
      <div key={1}><p>Test forms</p></div>
      <div key={2}><p>Test forms</p></div>
      </ContentContainer>
      </main>
      <Footer theme={theme} />
    </div>
    </div>
    </>
  )
}

export default App
