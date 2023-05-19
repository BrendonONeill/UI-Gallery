type PropTypes = {
  theme: boolean,
  setTheme: React.Dispatch<React.SetStateAction<boolean>>,
}

function Navigation({ theme, setTheme }: PropTypes) {
  return (
    <div className='nav' data-theme={theme ? "light-nav" : "dark-nav"}>
      {theme ? <img className="nav-logo" src="ui-logo-dark.webp" alt="" /> : <img className="nav-logo" src="ui-logo.webp" alt="" />}
      <button className={theme ? "nav-button nav-button-flex-light" : "nav-button nav-button-flex-dark"} onClick={() => setTheme(!theme)}>
        <span className={theme ? "toggle-nav-dark" : "toggle-nav"}></span>
      </button>
    </div>
  )
}

export default Navigation