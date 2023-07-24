import { BackButton, Container, Details } from './styles'

import Spot from '../../assets/spot.svg'
import Timer from '../../assets/timeIcon.svg'
import Dollar from '../../assets/dollar.svg'
import SuccessIcon from '../../assets/successIcon.svg'
import backButton from '../../assets/back.svg'
import { Header } from '../../components/Header'
import { useShoppingCart } from '../../hooks/useShoppingCart'
import { useNavigate } from 'react-router-dom'

export function Success() {
  const { userAddress, paymentMethod } = useShoppingCart()
  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <>
      <Header />
      <BackButton onClick={handleGoBack}>
        <img src={backButton} alt="" />
      </BackButton>
      <Container>
        <Details>
          <p>Uhu! Pedido confirmado</p>
          <span>Agora pe só aguardar que logo o café chegará até você</span>

          <div>
            <div>
              <img src={Spot} alt="" />
              <div>
                <p>Entrega em </p>
                <span>
                  Rua {userAddress.street}, {userAddress.number}.
                </span>
                <span>
                  {userAddress.neighborhood} - {userAddress.city},
                  {userAddress.state}. CEP: {userAddress.zipCode}
                </span>
              </div>
            </div>

            <div>
              <img src={Timer} alt="" />
              <div>
                <p>Previsão de entrega </p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </div>
            </div>

            <div>
              <img src={Dollar} alt="" />
              <div>
                <p>Pagamento na entrega </p>
                <p>
                  <strong>{paymentMethod}</strong>
                </p>
              </div>
            </div>
          </div>
        </Details>
        <img src={SuccessIcon} alt="" />
      </Container>
    </>
  )
}
