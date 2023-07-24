import { useNavigate } from 'react-router-dom'
import { useCallback, useState, useEffect } from 'react'
import { Header } from '../../components/Header'
import { BackButton, Container, HistoricContainer, Title } from './styles'
import backButton from '../../assets/back.svg'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/useAuth'
import { PurchasedItems } from './PurchasedItems'
import moment from 'moment'

interface ProductProps {
  id: string
  userId: string
  createdAt: string
  totalAmount: string
}

export function PurchaseHistoric() {
  const { user } = useAuth()
  const [productList, setProductList] = useState<ProductProps[]>([])
  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }

  const handlePurchasedProducts = useCallback(async () => {
    try {
      const { data } = await api.get('/purchase', {
        params: {
          userId: user?.id,
        },
      })

      setProductList(data.purchase)
      navigate('/historic')
    } catch (error) {
      console.log(error)
    }
  }, [navigate, user])

  useEffect(() => {
    handlePurchasedProducts()
  }, [handlePurchasedProducts])

  console.log('product list', productList)
  return (
    <>
      <Header />

      <Container>
        <BackButton onClick={handleGoBack}>
          <img src={backButton} alt="" />
        </BackButton>
        <HistoricContainer>
          <Title>Histórico de compras</Title>
          {productList.map((item) => (
            <div key={item.id}>
              <PurchasedItems
                createdAt={moment(item.createdAt).format(
                  'DD/MM/YYYY [às] HH:mm',
                )}
                totalAmount={item.totalAmount}
              />
              <hr />
            </div>
          ))}
        </HistoricContainer>
      </Container>
    </>
  )
}
