import { Container, Details } from './styles'

import Spot from '../assets/spotSuccess.svg'
import Timer from '../assets/timeIcon.svg'
import Dollar from '../assets/dollarSucess.svg'
import SuccessIcon from '../../assets/successIcon.svg'
import { Header } from '../../components/Header'

export function Success() {
  return (
    <>
      <Header />

      <Container>
        <Details>
          <p>Uhu! Pedido confirmado</p>
          <span>Agora pe só aguardar que logo o café chegará até você</span>

          {/* <div>
            <div>
              <img src={Spot} alt="" />
              <div>
                <p>Entrega em </p>
                <span>Bairro, Cidade - Estado</span>
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
                  <strong>Cartão de Crédito</strong>
                </p>
              </div>
            </div>
          </div> */}
        </Details>
        <img src={SuccessIcon} alt="" />
      </Container>
    </>
  )
}
