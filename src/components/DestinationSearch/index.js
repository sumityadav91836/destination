import './index.css'
import DestinationItem from '../DestinationItem'

const DestinationSearch = props => {
  const {destinationsList} = props
  const {id, imgUrl, name} = destinationsList
  console.log(id)
  console.log(imgUrl)
  console.log(name)

  return (
    <div className="bg-container">
      <h1 className="heading">Destination Search</h1>
      <input
        type="search"
        placeholder="Search Destination"
        className="search-box"
      />
      <ul className="destination-items-container">
        <DestinationItem />
      </ul>
    </div>
  )
}

export default DestinationSearch
