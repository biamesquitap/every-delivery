import {
  BodyContainer,
  ButtonCheckout,
  Column,
  Container,
  Content,
  Order,
  PaymentMethod,
  Type,
} from './styles'

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

import { AddressForm } from './components/AddressForm'
import { SelectedProducts } from './components/SelectedProducts'

export function Checkout() {
  const { user } = useAuth()
  const { items, total, resetAll, handleChangePaymentMethod } =
    useShoppingCart()

  const totalPlusDeliver = total + 3.8
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

  function handleChangePaymentCredit() {
    handleChangePaymentMethod('Cartão de crédito')
  }

  function handleChangePaymentMoney() {
    handleChangePaymentMethod('Dinheiro')
  }

  return (
    <Container>
      <Header />

      <BodyContainer>
        <Column>
          <Content>
            {items.map((item) => (
              <div key={item.id}>
                <SelectedProducts {...item} />
                <hr />
              </div>
            ))}
          </Content>

          <Content>
            <p>Complete seu pedido</p>
            <AddressForm />
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
                <ButtonCheckout
                  value="CARTÃO DE CRÉDITO"
                  onClick={handleChangePaymentCredit}
                >
                  <img src={creditCard} alt="" />
                  <p>cartão</p>
                </ButtonCheckout>

                <ButtonCheckout
                  value="DINHEIRO"
                  onClick={handleChangePaymentMoney}
                >
                  <img src={money} alt="" />
                  <p>dinheiro</p>
                </ButtonCheckout>
              </Type>
            </PaymentMethod>
          </Content>
        </Column>
        <Column>
          <Content>
            <p>Carrinho</p>
            <Order>
              <div>
                Total dos itens
                <span>R${total.toFixed(2)}</span>
              </div>
              <div>
                Entrega <span>R$ 3.80</span>
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
            </Order>
          </Content>
        </Column>
      </BodyContainer>
    </Container>
  )
}
