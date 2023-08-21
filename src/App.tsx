
import './App.css'
import Greet from './componants/Greet'
import Heading from './componants/Heading'
import Oscar from './componants/Oscar'
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
     <Greet name="Safat" messageCount={20} isLoggedin={true}/>
     <Person name={personName}/>
     <PersonList names={nameList}/>
     <Status status='loading'/>
     <Heading>Placeholder Text</Heading>
     <Oscar>
      <Heading>LEO WINS THE OSCAR</Heading>
     </Oscar>
     <Greet name='BABU BRO' isLoggedin={true}/>
    </>
  )
}

export default App
