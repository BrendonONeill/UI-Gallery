
type PropTypes = {
  theme: boolean,
}

function Footer({theme}:PropTypes) {
  return (
    <div className="footer" data-theme={theme? "light-nav" : "dark-nav"}>
        <h3>Brendon O'Neill</h3>
    </div>
  )
}

export default Footer