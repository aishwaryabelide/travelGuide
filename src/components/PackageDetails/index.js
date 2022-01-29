import './index.css'

const PackagesDetails = props => {
  const {details} = props
  const {name, imageUrl, description} = details

  return (
    <>
      <li className="card">
        <img className="package-icon" src={imageUrl} alt={name} />
        <h1 className="package-name">{name}</h1>
        <p className="package-details">{description}</p>
      </li>
    </>
  )
}

export default PackagesDetails
