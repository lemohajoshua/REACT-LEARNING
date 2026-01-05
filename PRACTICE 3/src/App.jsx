import Student from './Student.jsx'

function App() {

  return (
    <>
      <Student name="Joshua" age={22} isStudent={true}/>
      <Student name="Victor" age={30} isStudent={false}/>
      <Student />
    </>
  )
}

export default App
