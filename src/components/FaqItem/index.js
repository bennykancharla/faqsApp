// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isMinus: false}

  onClickButton = () => {
    this.setState(prev => ({
      isMinus: !prev.isMinus,
    }))
  }

  renderAnswer = () => {
    const {isMinus} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    if (isMinus) {
      return (
        <div className="answer-container">
          <hr className="hr-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqDetails} = this.props
    const {isMinus} = this.state
    const {questionText} = faqDetails
    const imageUrl = isMinus
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    return (
      <li className="list-item">
        <div className="question-container">
          <h3 className="question">{questionText}</h3>
          <button
            type="button"
            className="button-ele"
            onClick={this.onClickButton}
          >
            <img
              className="image"
              src={imageUrl}
              alt={isMinus ? 'minus' : 'plus'}
            />
          </button>
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
