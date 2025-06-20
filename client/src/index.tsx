import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/app/app'
import { offers } from './mocks/offers'
import { offersList } from './mocks/offers-list'
import { store } from './store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={ store }>
      <App
      offersList = {offersList}
      offers = {offers}
    />
    </Provider>
  </StrictMode>,
)
