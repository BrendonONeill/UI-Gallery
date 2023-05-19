import HoverCard from "../components/HoverCard"


function FinalFantasy() {
    return (
        <div className="card-box-big">
            <HoverCard>Hover over nav</HoverCard>
            <div className="finalf-card">
                <div className="finalf-nav">
                    <ul>
                        <li>Home
                            <div className="cursor-ff">
                                <img src="FF7Cursor.webp" alt="" />
                            </div>
                        </li>
                        <li>Skills<div className="cursor-ff">
                            <img src="FF7Cursor.webp" alt="" />
                        </div></li>
                        <li>Projects<div className="cursor-ff">
                            <img src="FF7Cursor.webp" alt="" />
                        </div></li>
                        <li>Designs<div className="cursor-ff">
                            <img src="FF7Cursor.webp" alt="" />
                        </div></li>
                        <li>Hobbies<div className="cursor-ff">
                            <img src="FF7Cursor.webp" alt="" />
                        </div></li>
                    </ul>
                </div>
                <div className="finalf-gil">
                    <p>Time:</p>
                    <p> 12:30:45</p>
                </div>
            </div>
        </div>
    )
}

export default FinalFantasy
