// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSelected: false,
  }

  onClickEmoji = () =>
    // console.log("Emoji clicked")
    this.setState({isFeedbackSelected: true})

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    // console.log(resources)
    const {emojis} = resources
    return (
      <div className="feedback-question-container">
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button
                className="emoji-btn"
                type="button"
                onClick={this.onClickEmoji}
              >
                <img
                  className="emoji"
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                />
                <br />
                <span className="emoji-name">{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    // console.log(resources)
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img className="love-emoji" src={loveEmojiUrl} alt="love emoji" />
        <h1 className="thank-you-text">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="app-container">
        <div className="feedback-card">
          {isFeedbackSelected
            ? this.renderThankYouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}
export default Feedback
