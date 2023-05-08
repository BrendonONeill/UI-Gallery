

function Navigation({theme, setTheme}) {
  return (
    <div className='nav' data-theme={theme? "light-nav" : "dark-nav"}>
        <h1>Ui-Gallery</h1>
        <button onClick={() => setTheme(!theme)}>{theme? "Light" : "Dark"}</button>
    </div>
  )
}

export default Navigation