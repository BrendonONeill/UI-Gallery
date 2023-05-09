import Navigation from "./Navigation"

type PropTypes = {
  theme: boolean,
  setTheme: React.Dispatch<React.SetStateAction<boolean>>,
}


function Header({theme, setTheme}: PropTypes) {
  return (
    <div className="header" data-theme={theme? "light-hero-img" : "dark-hero-img"}>
        <Navigation theme={theme} setTheme={setTheme} />
        <div className="hero">
            <div className="hero-text" data-theme={theme? "light-hero-text" : "dark-hero-text"}>
            <h2><span className="hero-diff" data-theme={theme? "light-hero-diff" : "dark-hero-diff"}>UI-</span>Gallery</h2>
            <p>Where I let my creative side run <span className="hero-diff" data-theme={theme? "light-hero-diff" : "dark-hero-diff"}>Free</span></p>
            </div>
            <div className="hero-image">
                <img src="hero.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header