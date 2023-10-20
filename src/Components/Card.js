import "./Card.css"
export default function Card({item}){
    const handleClick = ()=>{
        window.open(item.link)
    }

    return(
        <div className="card" onClick={handleClick}>
            <div className="image">
                <img src={item.image} alt={""} />
            </div>
            <div className="descritpion">
            <h1>{item.name}</h1>
            <h5>{item.grade}</h5>
            <br/>
            <p>{item.overview}</p>
            </div>
        </div>
    )
}