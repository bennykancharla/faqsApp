// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="main-bg">
      <div className="card-bg">
        <h1 className="heading">FAQs</h1>
        <ul className="faq-list">
          {faqsList.map(eachItem => (
            <FaqItem key={eachItem.id} faqDetails={eachItem} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
