import LogoCoffeeDelivery from '../../assets/logo.svg'
import { ShoppingCartSimple } from 'phosphor-react'
import Carrinho from '../../assets/shoppingCart.svg'
import { Button } from '../Button'
import {
  CartContainer,
  HeaderContainer,
  QuantityCart,
  ShoppingCartDiv,
} from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useShoppingCart } from '../../hooks/useShoppingCart'

export function Header() {
  const { items } = useShoppingCart()
  const { user, handleSignOut } = useAuth()
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={LogoCoffeeDelivery} alt="" />
      </Link>

      <div>
        {Object.keys(user).length !== 0 && (
          <Button
            value="sair"
            type="button"
            handleClick={() => handleSignOut()}
          />
        )}
        {Object.keys(user).length !== 0 && (
          <CartContainer>
            <ShoppingCartDiv
              onClick={() => navigate('/checkout')}
              title="Carrinho"
            >
              <ShoppingCartSimple size={24} color="#fff" weight="fill" />
            </ShoppingCartDiv>
            {items?.length > 0 && (
              <QuantityCart>
                <span>{items?.length}</span>
              </QuantityCart>
            )}
          </CartContainer>
        )}
      </div>
    </HeaderContainer>
  )
}
