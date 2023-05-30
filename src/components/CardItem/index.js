import './index.css'

const mycard = {
  id: 4,
  title: 'ML Engineer',
  description:
    'Machine learning engineers feed data into models defined by data scientists.',
  imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
  className: 'card-4',
}
const TechonologyCard = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={`card-styling ${className}`}>
      <div className="card-elements-positining">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <img src={imgUrl} alt={title} className="img-positioning" />
    </li>
  )
}

export default TechonologyCard
