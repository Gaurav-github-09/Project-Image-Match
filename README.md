Project - **Match Game** 

Live link- **https://gk06MatchAllImg.ccbp.tech**

Technologies used-  **HTML, CSS, JAVASCRIPT, REACT.JS**


-------------------------------------------------------------



### Completion Instructions

This app will have the following functionalities

- Initially,
  - Score will be `0` and time will be `60` sec
  - The image to be matched will have the src attribute value as the value of the key `imageUrl` from the first object in **imagesList** provided
  - The **Fruits** tab will be active and the thumbnails with **FRUIT** as their category will be displayed
- The timer will start running backwards from the `60` sec
- When a tab is clicked, then the thumbnails in the corresponding category will be displayed
- When a thumbnail is clicked, if that is matched with the image to be matched,
  - Score is incremented by one
  - The new image to be matched will be generated randomly among the value of the key `imageUrl` from **imagesList** provided
- When a thumbnail is clicked, if it is not matched with the image to be matched,
  - The game will end, and the [Scorecard](https://assets.ccbp.in/frontend/content/react-js/match-game-score-card-lg-output.png) view will be displayed
  - When **PLAY AGAIN** button is clicked, then we will be able to play the game again
    - The score and time values will be reset to `0` and `60` sec respectively
    - The image to be matched will reset to the value of the key `imageUrl` from the first object in **imagesList** provided
    - The active tab will reset to **Fruits**, and the thumbnails with **FRUIT** as their category will be displayed
- When the timer reached `0` sec, then the game will end, and the [Scorecard](https://assets.ccbp.in/frontend/content/react-js/match-game-score-card-lg-output.png) view will be displayed


