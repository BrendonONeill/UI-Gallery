import "./App.scss"
import ContentContainer from "./assets/components/ContentContainer"
import Footer from "./assets/components/Footer"
import Header from "./assets/components/Header"
import { useState } from "react"

function App() {
  const [theme, setTheme] = useState(true)

  return (
    <>
    <body data-theme={theme? "light-body" : "dark-body"}>
    <div className="container">
      <Header theme={theme} setTheme={setTheme} />
      <main data-theme={theme? "light-main" : "dark-main"}>
      <ContentContainer theme={theme} title={"Card"}>
        <div key={1}><p>Test card</p></div>
        <div key={2}><p>Test card</p></div>
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
    </body>
    </>
  )
}

export default App
