import { BrowserRouter } from 'react-router-dom'
import GlobalCss from './styles'
import Rotas from './routes'
import { Provider } from 'react-redux'
import { store } from './store'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <GlobalCss />
          <Rotas />
          <ToastContainer autoClose={3000} />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
