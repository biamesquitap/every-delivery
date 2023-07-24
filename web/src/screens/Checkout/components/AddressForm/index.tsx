import { Address, AddressInput } from './styles'
import Spot from '../../../../assets/spot.svg'
import { useShoppingCart } from '../../../../hooks/useShoppingCart'

export function AddressForm() {
  const { handleChangeAddress, userAddress } = useShoppingCart()

  return (
    <Address>
      <div>
        <img src={Spot} alt="Local" />
        <div>
          <p>Endereço</p>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </div>
      <AddressInput
        name="zipCode"
        type="textarea"
        placeholder="CEP"
        onChange={handleChangeAddress}
        value={userAddress.zipCode}
      />
      <AddressInput
        name="street"
        type="text"
        placeholder="Endereço"
        onChange={handleChangeAddress}
        value={userAddress.street}
      />
      <div>
        <AddressInput
          name="number"
          type="text"
          placeholder="Número"
          onChange={handleChangeAddress}
          value={userAddress.number}
        />
        <AddressInput
          name="complement"
          type="text"
          placeholder="Complemento"
          onChange={handleChangeAddress}
          value={userAddress.complement}
        />
      </div>
      <div>
        <AddressInput
          name="neighborhood"
          type="text"
          placeholder="Bairro"
          onChange={handleChangeAddress}
          value={userAddress.neighborhood}
        />
        <AddressInput
          name="city"
          type="text"
          placeholder="Cidade"
          onChange={handleChangeAddress}
          value={userAddress.city}
        />
        <AddressInput
          name="state"
          type="text"
          placeholder="Estado"
          onChange={handleChangeAddress}
          value={userAddress.state}
        />
      </div>
    </Address>
  )
}
