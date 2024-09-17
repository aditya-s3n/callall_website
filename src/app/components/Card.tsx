import "../css/card.css";

function Card({ title, text, icon } : { title: string, text: string, icon: string }) {
    return (
        <div className="container-card p-3 pt-5 pb-4 my-4 mx-3"> 
            <i className={`bi ${icon} fs-2 card-icon ms-2`}></i>

            <p className="mt-5 fs-4 mb-4">{title}</p>

            <p className="card-text">{text}</p>

        </div>
    )
}

export default Card;