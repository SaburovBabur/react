// Components
import Header from './src/Header'
import User from './src/User'

import ReactDOM from 'react-dom'

const template = (
  <>
    <Header />
    <User />
  </>
)

/**
 * ========================
 * React app Initialization
 */
// SELECT
const app = document.querySelector('#app')

// React init
const root = ReactDOM.createRoot(app)

// innerHTML
root.render(template)
