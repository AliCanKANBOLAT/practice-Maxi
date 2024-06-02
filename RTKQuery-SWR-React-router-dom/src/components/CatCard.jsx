export default function CatCard ({url, description}) {
  return(
    <div className="card">
      <img src={url} className="card-img-top" alt="..." />
      <div className="card-body">
      <p className="card-text"> {description} </p>
      </div>
    </div>

  )
}