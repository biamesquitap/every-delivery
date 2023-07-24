import { ChangeEvent, useState } from 'react'
import ShoppingCart from '../../assets/shoppingCart.svg'
import Add from '../../assets/add.svg'
import Remove from '../../assets/remove.svg'
import {
  CardContainer,
  CardFooter,
  CardTop,
  Description,
  PriceContainer,
  QuantityContainer,
  SelectItem,
  Title,
  Type,
} from './styles'
import { useShoppingCart } from '../../hooks/useShoppingCart'

interface CardProps {
  id: string
  type: string
  name: string
  description: string
  price: number
}

export function Card({ id, type, name, description, price }: CardProps) {
  const [quantity, setQuantity] = useState(0)
  const { addNewItem } = useShoppingCart()

  function handleAddItemToCart() {
    const newItem = {
      id,
      name,
      amount: quantity,
      description,
      price: price.toString(),
      type,
    }
    addNewItem(newItem)
  }

  function handleQuantityChange(e: ChangeEvent<HTMLInputElement>) {
    setQuantity(parseInt(e.target.value))
  }

  function SumQuantityProduct() {
    setQuantity((state) => state + 1)
  }

  function SubQuantityProduct() {
    if (quantity > 0) {
      setQuantity((state) => state - 1)
    }
  }

  return (
    <>
      <CardContainer>
        <CardTop>
          <Type>{type}</Type>
          <Title>{name}</Title>
          <Description>{description}</Description>
        </CardTop>

        <CardFooter>
          <PriceContainer>
            <p>
              R$ <span>{price}</span>
            </p>
          </PriceContainer>
          <SelectItem>
            <QuantityContainer>
              <button onClick={SubQuantityProduct}>
                <img src={Remove} alt="" />
              </button>
              <input
                placeholder="0"
                id="QuantInput"
                value={quantity}
                onChange={handleQuantityChange}
              />
              <button onClick={SumQuantityProduct}>
                <img src={Add} alt="" />
              </button>
            </QuantityContainer>
            <button onClick={handleAddItemToCart}>
              <img src={ShoppingCart} alt="" />
            </button>
          </SelectItem>
        </CardFooter>
      </CardContainer>
    </>
  )
}
