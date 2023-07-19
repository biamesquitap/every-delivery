import {
  Address,
  AddressForm,
  BodyContainer,
  ButtonCheckout,
  Container,
  Content,
  LinkStyle,
  Order,
  PaymentMethod,
  Type,
} from './styles'
import Spot from '../../assets/spot.svg'
import Dollar from '../../assets/dollar.svg'
import creditCard from '../../assets/creditCard.svg'
import money from '../../assets/money.svg'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { useShoppingCart } from '../../hooks/useShoppingCart'
import { useCallback } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function Checkout() {
  const { user } = useAuth()
  const { items, total, resetAll } = useShoppingCart()
  const totalPlusDeliver = total + 10.8
  const navigate = useNavigate()

  const handleSubmitProducts = useCallback(async () => {
    const productsToSubmit = items.map((product) => product.id)
    try {
      await api.post('/purchase', {
        totalAmount: totalPlusDeliver,
        userId: user.id,
        products: productsToSubmit,
      })
      resetAll()
      navigate('/success')
    } catch (error) {
      console.log(error)
    }
  }, [items, user, totalPlusDeliver, navigate, resetAll])

  return (
    <Container>
      <Header />

      <BodyContainer>
        <Content>
          <p>Complete seu pedido</p>
          <Address>
            <div>
              <img src={Spot} alt="Local" />
              <div>
                <p>Endereço</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </div>
            <AddressForm className="CEP" type="text" placeholder="CEP" />
            <AddressForm className="Rua" type="text" placeholder="Endereço" />
            <div>
              <AddressForm
                className="Numero"
                type="text"
                placeholder="Número"
              />
              <AddressForm
                className="Complemento"
                type="text"
                placeholder="Complemento"
              />
            </div>
            <div>
              <AddressForm
                className="Bairro"
                type="text"
                placeholder="Bairro"
              />
              <AddressForm
                className="Cidade"
                type="text"
                placeholder="Cidade"
              />
              <AddressForm
                className="Estado"
                type="text"
                placeholder="Estado"
              />
            </div>
          </Address>
          <PaymentMethod>
            <div>
              <img src={Dollar} alt="Dollar" />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </div>

            <Type>
              <ButtonCheckout>
                <img src={creditCard} alt="" />
                <p>cartão</p>
              </ButtonCheckout>

              <ButtonCheckout>
                <img src={money} alt="" />
                <p>dinheiro</p>
              </ButtonCheckout>
            </Type>
          </PaymentMethod>
        </Content>

        <Content>
          <p>Carrinho</p>
          <Order>
            <div>
              Total dos itens
              <span>R${total.toFixed(2)}</span>
            </div>
            <div>
              Entrega <span>R$ 10.80</span>
            </div>

            <div>
              <strong>
                Total
                <span>R$ {totalPlusDeliver.toFixed(2)}</span>
              </strong>
            </div>

            <Button
              type="button"
              value="Confirmar o pedido"
              width="25rem"
              handleClick={handleSubmitProducts}
            />

            <Button
              type="button"
              value="Limpar carrinho"
              width="25rem"
              color="red"
              handleClick={() => resetAll()}
            />
          </Order>
        </Content>
      </BodyContainer>
    </Container>
  )
}
