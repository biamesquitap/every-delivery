import { Header } from '../../components/Header'
import {
  Container,
  HomeContainer,
  IconsGrid,
  MenuContainer,
  MenuContent,
  SearchProduct,
  SelectItem,
} from './styles'
import deliver from '../../assets/entregador.svg'
import CartIcon from '../../assets/cartIcon.svg'
import TimerIcon from '../../assets/timeIcon.svg'
import PackIcon from '../../assets/packIcon.svg'
import { useState, useCallback, useEffect } from 'react'
import { api } from '../../services/api'
import { Card } from '../../components/Card'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

interface CardProps {
  id: string
  type: string
  name: string
  description: string
  price: number
}

export function Home() {
  const { user } = useAuth()
  const [searchProduct, setSearchProduct] = useState('')
  const [selectCategoryProduct, setSelectCategoryProduct] = useState('todos')
  const [productList, setProductList] = useState<CardProps[]>([])
  const [productListFiltered, setProductListFiltered] = useState<CardProps[]>(
    [],
  )
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectCategoryProduct(event.target.value)
  }
  const navigate = useNavigate()

  const fetchProductList = useCallback(async () => {
    try {
      const { data } = await api.get('/products')
      setProductList(data?.products)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    if (selectCategoryProduct !== 'todos') {
      setProductListFiltered(
        productList.filter(
          (product) =>
            product.type === selectCategoryProduct &&
            product.name.toLowerCase().includes(searchProduct.toLowerCase()),
        ),
      )
    } else {
      setProductListFiltered(
        productList.filter((product) =>
          product.name.toLowerCase().includes(searchProduct.toLowerCase()),
        ),
      )
    }
  }, [selectCategoryProduct, productList, searchProduct])

  useEffect(() => {
    fetchProductList()
  }, [fetchProductList])

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate('/login')
    }
  }, [navigate, user])

  return (
    <Container>
      <Header />
      <HomeContainer>
        <img src={deliver} alt="" />
        <div>
          <h1>Encontre o que você precisa, a qualquer hora do dia.</h1>
          <h4>
            Com o Every Delivery você recebe onde estiver, a <br></br>
            qualquer hora!
          </h4>

          <IconsGrid>
            <div>
              <img src={CartIcon} alt="" />
              <p>Compra simples e segura</p>
            </div>
            <div>
              <img src={PackIcon} alt="" />
              <p>Embalagem para deixar seu intacto</p>
            </div>
            <div>
              <img src={TimerIcon} alt="" />
              <p>Entrega rápida e rastreada</p>
            </div>
          </IconsGrid>
        </div>
      </HomeContainer>
      <MenuContent>
        <SearchProduct
          placeholder="Qual item você procura?"
          value={searchProduct}
          onChange={(event) => setSearchProduct(event.target.value)}
        />
        <SelectItem value={selectCategoryProduct} onChange={handleSelectChange}>
          <option value="todos">Todos</option>
          <option value="eletronicos">Eletrônicos</option>
          <option value="comidas">Comida</option>
          <option value="livros">Livros</option>
          <option value="vestuario">Vestuário</option>
        </SelectItem>
      </MenuContent>
      <MenuContainer>
        {productListFiltered
          .map((card) => {
            return <Card key={card.id} {...card} />
          })
          .reverse()}
      </MenuContainer>
    </Container>
  )
}
