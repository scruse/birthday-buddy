const PersonItem = (props) => {
  const { name, age, image } = props

  return (
    <div className="person">
      <img src={image} />
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </div>
  )
}

export default PersonItem
