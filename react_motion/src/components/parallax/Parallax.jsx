import "./parallax.scss"

const Parallax = () => {
    return (
        <div className="parallax" style={{
            background: type === "services"
                ? "linear-gradient(180deg, #111132, #0c0c1d"
                : "liner-gradient(180deg, #111132, #505064",
        }}>

            <h1>{type === "services" ? "What we Do?" : "What We Did?"}</h1>
            <div className="mountains"></div>
            <div className="planets"></div>
            <div className="stars"></div>
        </div>
    )
}

export default Parallax