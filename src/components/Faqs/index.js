import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="bg-container">
      <div className="inner-container">
        <h1 className="heading">FAQs</h1>
        <ul className="lists">
          {faqsList.map(each => (
            <FaqItem key={each.id} faqDetails={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
