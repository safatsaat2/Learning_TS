
import './App.css'
import Greet from './componants/Greet'
import Person from './componants/Person'
import PersonList from './componants/PersonList'
import Status from './componants/Status'

function App() {
const personName= {
  first: "Sakib",
  last: "Mafat"
}

const nameList = [
  {
    first: "Sakib",
    last: "Mafat"
  },
  {
    first: "Sakib",
    last: "Safat"
  },
  {
    first: "Bashar",
    last: "Abul"
  }
]

  return (
    <>
     <Greet name="Safat" messageCount={20} isLoggedin={false}/>
     <Person name={personName}/>
     <PersonList names={nameList}/>
     <Status status='loading'/>
    </>
  )
}

export default App
