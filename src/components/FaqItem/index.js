import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isClicked: false}

  onClickToggle = () => {
    this.setState(prevState => {
      console.log(`prevState changed ${prevState.isClicked}`)
      return {
        isClicked: !prevState.isClicked,
      }
    })
  }

  render() {
    const {faqItem} = this.props
    const {questionText, answerText} = faqItem
    const {isClicked} = this.state
    const buttonImage = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
    const altText = isClicked ? 'plus' : 'minus'
    return (
      <li className="faqItems">
        <div className="question-container">
          <h1 className="questionItem">{questionText}</h1>

          <button type="button" className="button" onClick={this.onClickToggle}>
            <img src={buttonImage} alt={altText} />
          </button>
        </div>
        {isClicked ? <hr className="horizantal-line" /> : null}
        {isClicked ? <p className="answerItem">{answerText}</p> : null}
      </li>
    )
  }
}
export default FaqItem
