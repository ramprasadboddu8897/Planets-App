// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachItemDetails} = props
  const {name, imageUrl, description} = eachItemDetails

  return (
    <div className="planet-item">
      <img className="planet-image" alt={`planet ${name}`} src={imageUrl} />
      <h1 className="planet-name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
