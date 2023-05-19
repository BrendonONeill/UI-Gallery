
type PropTypes = {
    children: String

}

function HoverCard({ children }: PropTypes) {
    return (
        <div className="card-hover">
            <p>{children}</p>
        </div>
    )
}

export default HoverCard