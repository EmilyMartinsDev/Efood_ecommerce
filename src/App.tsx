import { BrowserRouter } from 'react-router-dom'
import GlobalCss from './styles'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalCss />
        <Rotas />
      </div>
    </BrowserRouter>
  )
}

export default App
