import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/app/app'
import { Setting } from './const'
import { offers } from './mocks/offers'
import { offersList } from './mocks/offers-list'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App
      rentalOffersCount = {Setting.rentOffersCount}
      offersList = {offersList}
      offers = {offers}
    />
  </StrictMode>,
)
