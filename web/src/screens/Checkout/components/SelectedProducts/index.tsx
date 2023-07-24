import {
  Container,
  Item,
  ItemContent,
  ItemDiv,
  QuantityContainer,
  SelectItem,
} from './styles'
import Add from '../../../../assets/add.svg'
import Trash from '../../../../assets/trash.svg'
import Remove from '../../../../assets/remove.svg'
import { ChangeEvent, useState } from 'react'
import { useShoppingCart } from '../../../../hooks/useShoppingCart'
import { ProductItem } from '../../../../reducers/reducer'

export function SelectedProducts({
  id,
  name,
  description,
  price,
  amount,
}: ProductItem) {
  const [quantity, setQuantity] = useState(1)
  const { addItem, subItem, removeItem } = useShoppingCart()
  function handleQuantityChange(e: ChangeEvent<HTMLInputElement>) {
    setQuantity(parseInt(e.target.value))
  }

  function SumQuantityProduct() {
    setQuantity((state) => state + 1)
    addItem(id)
  }

  function SubQuantityProduct() {
    if (quantity > 1) {
      subItem(id)
      setQuantity((state) => {
        return state - 1
      })
    } else {
      removeItem(id)
      setQuantity(0)
    }
  }

  function handleRemoveItem() {
    removeItem(id)
  }

  return (
    <Container>
      <ItemContent>
        <Item>
          <ItemDiv>
            <p>{name}</p>
            <p>{description}</p>
          </ItemDiv>
          <ItemDiv>
            <p>R$ {price}</p>
            <SelectItem>
              <QuantityContainer>
                <button onClick={SubQuantityProduct}>
                  <img src={Remove} alt="" />
                </button>
                <input
                  placeholder="1"
                  id="QuantInput"
                  value={amount}
                  onChange={handleQuantityChange}
                />
                <button onClick={SumQuantityProduct}>
                  <img src={Add} alt="" />
                </button>
              </QuantityContainer>

              <button onClick={handleRemoveItem}>
                <img src={Trash} alt="" />
              </button>
            </SelectItem>
          </ItemDiv>
        </Item>
      </ItemContent>
    </Container>
  )
}
