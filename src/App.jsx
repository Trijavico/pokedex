import Pokemons from './components/Pokemons'
import './index.css'

function App() {

  return (
    <>
      <section className='mainContent'>
        <Pokemons />
      </section>

      <aside className="detailed-info">
        <span className='empty'>Select a Pokemon <br/> to display here.</span>
      </aside>
    </>
  )
}

export default App
