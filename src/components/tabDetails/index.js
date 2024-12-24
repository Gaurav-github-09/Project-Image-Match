import './index.css'

const TabsAll = props => {
  const {tabDetails, isActive, changeTitle} = props
  const {displayText, tabId} = tabDetails

  const moreStyle = isActive ? 'bordereff' : ''

  const nameClicked = () => {
    changeTitle(tabId)
  }

  return (
    <li>
      <button
        onClick={nameClicked}
        type="button"
        className={`nameHead ${moreStyle}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabsAll
