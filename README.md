# Challenge Delliv Jr

## Conteúdo
- [Ir para Como executar o programa?](#como-executar-o-programa)
- [Ir para Como o programa funciona?](#como-o-programa-funciona)
- [Ir para Rotas da apicação](#rotas-da-aplicacao)
- [Ir para Contato](#contato)
  

## Como executar o programa?
1. O primeiro passo é clonar o projeto em algum lugar do seu computador: `https://github.com/biamesquitap/challenge-delliv.git`;
2. Agora acesse o terminal dentro da pasta do projeto;
3. Entre na pasta do servidor (`cd backend`), abra o código (`code .`) e copie o arquivo .env.example para um novo arquivo .env;
4. Execute o seguinte comando: `npm run dev`;
5. Para gerar as migrações: `npx prisma migrate dev`
6. Para melhorar a visualização das tabelas: `npx prisma studio`;
7. Agora que o backend está em execução, em outro terminal, vá para a pasta inicial do projeto, vá para a pasta onde está localizado o frontend (`cd frontend`);
8. Digite o seguinte comando para instalar todas as dependências: `npm install`;
9. Agora digite o seguinte comando: `npm run dev`;

## Como o programa funciona?
- A aplicação de catálogo de produtos, utilizando as seguintes funcionalidades:
1. Login e Cadastro;
2. Catálogo de Produtos;
3. Filtragem por Categoria;
4. Busca por Nome do Produto;
5. Adicionar e Remover Produtos;
6. Finalizar Checkout;


## Rotas da aplicação:
### Users
    1. Para listar todos os usuários:  
      -> `http://localhost:3333/users`, (GET)
    
    2. Para listar detalhes de um usuário:   -> `http://localhost:3333/users/:id`, (GET)
    
    3. Para criar um usuário -> `http://localhost:3333/users`, (POST)
      3.1 body ->
      
  ```
      {
        "name": "Beatriz",
        "email": "biamesquitap@gmail.com",
        "password": "12345678"		
      }
  ```
  
    4. Para deletar usuário -> `http://localhost:3333/users/:id`, (DELETE)
    
    5. Para fazer login do usuário -> `http://localhost:3333/users/sessions`, (POST)
      5.1 body ->
      
  ```
      {
        "email": "biamesquitap@gmail.com",
        "password": "12345678"		
      }
  ```

  ### Products
    1. Para listar todos os produtos:  
      -> `http://localhost:3333/products`, (GET)

    2. Para listar detalhes de um produto:   -> `http://localhost:3333/products/:id`, (GET)
    
    3. Para criar um produto -> `http://localhost:3333/products`, (POST)
      3.1 body ->
      (OBS: type: só poderá receber os valores: 'eletronicos', 'comidas', 'livros', 'vestuario')
  ```
    {
      "name": "Camiseta",
      "description": "Camiseta manga curta com estampa, gola careca.",
      "price": 80,
      "type": "vestuarios"
    }  
  ```
  
    4. Para deletar usuário -> `http://localhost:3333/products/:id`, (DELETE)

   ### Pedidos
    1. Para listar todos os pedidos:  
      -> `http://localhost:3333/purchase`, (GET)

    2. Para listar detalhes de um pedido:   -> `http://localhost:3333/purchase/:id`, (GET)
    
    3. Para criar um pedido -> `http://localhost:3333/purchase`, (POST)
      3.1 body ->
      
  ```
      {
        "totalAmount": 521,
        "userId": "db808eb6-01b3-4fee-97d6-a763b5c650b7",
        "products": ["8eed85a9-f154-441b-a5a7-87d049bcbcfa"]
      }
  ```

## Prints do frontend da aplicação
![image](https://github.com/biamesquitap/challenge-delliv/assets/94808375/d9668966-e679-451e-b7d1-a1262905918c)

![image](https://github.com/biamesquitap/challenge-delliv/assets/94808375/b275e447-138b-451a-b4e8-02d697a9734e)

![image](https://github.com/biamesquitap/challenge-delliv/assets/94808375/ec4baa82-ab0a-429a-af95-3ba1f891b921)

![image](https://github.com/biamesquitap/challenge-delliv/assets/94808375/fac6017f-906b-44b7-b321-4d50fe870207)

![image](https://github.com/biamesquitap/challenge-delliv/assets/94808375/a3984246-24f3-4a5b-8f87-41bf15f801f2)


## Melhorias

1. Criar tela de detalhes dos pedidos.
2. Integrar endereço.

# Contato 
Beatriz Mesquita - biamesquitap@gmail.com - [GitHub](https://github.com/biamesquitap) - [LinkedIn](https://www.linkedin.com/in/beatriz-ponte/)
