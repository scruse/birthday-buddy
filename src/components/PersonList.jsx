import PersonItem from './PersonItem'

const PersonList = (props) => {
  const { people } = props

  return (
    <>
      <div>
        {people.map((person) => {
          return <PersonItem {...person} key={person.id} />
        })}
      </div>
    </>
  )
}

export default PersonList
