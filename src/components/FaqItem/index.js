// Write your code here.
import {Component} from 'react'
import './index.css'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {isActive} = this.state
    const answerText = faqDetails

    if (isActive) {
      return (
        <div>
          <hr className="line" />
          <p>{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderImage = () => {
    const {isActive} = this.state
    const Image = isActive ? minusImage : plusImage
    const text = isActive ? 'minus' : 'plus'
    return (
      <button className="button" type="button" onClick={this.onToggleActive}>
        <img src={Image} alt={text} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    const {answerText} = faqDetails
    return (
      <li>
        <div className="container1">
          <h1>{questionText}</h1>
          {this.renderImage()}
        </div>
        <p>{answerText}</p>
      </li>
    )
  }
}
export default FaqItem
