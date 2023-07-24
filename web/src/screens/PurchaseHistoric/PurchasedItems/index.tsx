import { PurchaseVariable, PurchasedItem } from './styles'

interface PurchaseItemProps {
  createdAt: string
  totalAmount: string
}

export function PurchasedItems({ createdAt, totalAmount }: PurchaseItemProps) {
  return (
    <PurchasedItem>
      <div>
        <p>Data da compra</p>
        <PurchaseVariable>{createdAt}</PurchaseVariable>
      </div>
      <div>
        <p>Valor total da compra</p>
        <PurchaseVariable>R$ {totalAmount}</PurchaseVariable>
      </div>
    </PurchasedItem>
  )
}
