import {Component} from 'react'

import ImagesList from '../imagesList'

import TabsAll from '../tabDetails'

import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)

    const {imagesList} = this.props

    this.state = {
      randomImage: imagesList[0],
      score: 0,
      timelimit: 0,
      tabShown: props.tabsList[0].tabId,
      imagesAll: imagesList,
      gameStatus: true,
    }
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    this.clearTimer()
  }

  clearTimer = () => clearInterval(this.intervalId)

  startTimer = () => {
    this.intervalId = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {timelimit} = this.state

    if (timelimit === 60) {
      this.clearTimer()
      this.setState({gameStatus: false, timelimit: 0})
    } else {
      this.setState(prev => ({timelimit: prev.timelimit + 1, gameStatus: true}))
    }
  }

  changeTab = tabId => {
    this.setState({tabShown: tabId})
  }

  resetClicked = () => {
    const {imagesList, tabsList} = this.props

    this.setState({
      randomImage: imagesList[0],
      score: 0,
      timelimit: 0,
      tabShown: tabsList[0].tabId,
      imagesAll: imagesList,
      gameStatus: true,
    })
    this.startTimer()
  }

  checkImageAndThumbnail = id => {
    const {randomImage, timelimit, score} = this.state

    if (score === 30) {
      this.clearTimer()
      this.setState({gameStatus: false, timelimit: 0})
      return
    }

    if (timelimit === 60) {
      this.clearTimer()
      this.setState({gameStatus: false, timelimit: 0})
      return
    }
    if (id !== randomImage.id) {
      this.clearTimer()
      this.setState({gameStatus: false})
      return
    }

    if (id === randomImage.id && timelimit < 60) {
      const {imagesAll} = this.state

      const filteredList = imagesAll.filter(each => each.id !== id)

      if (score === 30) {
        this.clearTimer()
        this.setState({gameStatus: false, timelimit: 0})
        return
      }

      if (filteredList.length > 0) {
        const randomNum = Math.floor(Math.random() * filteredList.length)

        const newRandomImage = filteredList[randomNum]

        this.setState(prev => ({
          score: prev.score + 1,
          randomImage: newRandomImage,
          imagesAll: filteredList,
        }))
        return
      }
      if (filteredList.length === 0) {
        this.setState({
          score: 30,
          gameStatus: false,
        })
      }
    }
  }

  render() {
    const {tabShown, score, timelimit, randomImage, gameStatus} = this.state
    const {imagesList, tabsList} = this.props
    const filteredList = imagesList.filter(each => tabShown === each.category)

    const fullImage = randomImage.imageUrl

    return (
      <div className="bgcont">
        <nav className="navCont">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
          <ul className="scoreCont">
            <li>
              <p className="score">
                Score: <span className="timLim">{score}</span>
              </p>
            </li>
            <li className="timerCont">
              <img
                className="timer"
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
              />
              <p className="timLim">{60 - timelimit} sec</p>
            </li>
          </ul>
        </nav>
        <div className="card">
          {gameStatus && (
            <>
              <div className="mainImgCont">
                <img className="mainImage" src={fullImage} alt="match" />
              </div>
              <ul className="titlecard">
                {tabsList.map(each => (
                  <TabsAll
                    changeTitle={this.changeTab}
                    isActive={each.tabId === tabShown}
                    tabDetails={each}
                    key={each.tabId}
                  />
                ))}
              </ul>
              <ul className="unordered">
                {filteredList.map(each => (
                  <ImagesList
                    checkImage={this.checkImageAndThumbnail}
                    key={each.id}
                    imageDetails={each}
                  />
                ))}
              </ul>
            </>
          )}
          {!gameStatus && (
            <div className="winloseCard">
              <img
                className="trophy"
                src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
                alt="trophy"
              />
              <p className="totalScore">YOUR SCORE</p>
              <p className="totalScore ssc">{score}</p>
              <button
                onClick={this.resetClicked}
                className="playAg"
                type="button"
              >
                <img
                  className="reset"
                  alt="reset"
                  src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                />
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default MatchGame
