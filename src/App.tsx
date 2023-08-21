
import './App.css'
import Greet from './componants/Greet'
import Person from './componants/Person'

function App() {
const personName= {
  first: "Sakib",
  last: "Mafat"
}

  return (
    <>
     <Greet name="Safat" messageCount={20} isLoggedin={false}/>
     <Person name={personName}/>
    </>
  )
}

export default App
