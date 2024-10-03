import Navbar from './Component/Navbar.jsx'
import Shop from './pages/Shop.jsx'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'

function App() {
  return (
    <CartProvider>
      <Container>
        <Navbar />
        <Routes>
          <Route index element={<Shop />}></Route>
        </Routes>
      </Container>
    </CartProvider>
  )
}
export default App