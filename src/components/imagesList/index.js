import './index.css'

const imagesList = props => {
  const {imageDetails, checkImage} = props

  const {thumbnailUrl, id} = imageDetails

  const thumbClicked = () => {
    checkImage(id)
  }

  return (
    <li>
      <button onClick={thumbClicked} className="buttonThumb" type="button">
        <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default imagesList
