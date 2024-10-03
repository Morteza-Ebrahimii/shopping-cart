import Navbar from './Component/Navbar.jsx'
import Shop from './pages/Shop.jsx'
import { Container } from 'react-bootstrap'


function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route index element={<Shop />}></Route>
      </Routes>
    </Container>
  )
}
export default App