import Header from "./components/Header.jsx"
import Travel from "./components/Travel.jsx"
import data from './data.js'

function App() {
  const travel = data.map(item => {
    return <Travel 
      key={item.id}
      { ...item }
    />
  })

  return (
    <>
      <Header />
      <div className="travels">
        {travel}
      </div>
    </>
  )
}

export default App
