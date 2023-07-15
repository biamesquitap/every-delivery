import {
  expect,
  test,
  beforeAll,
  afterAll,
  it,
  describe,
  beforeEach,
} from 'vitest'
import request from 'supertest'
import { app } from '../src/app'
import { execSync } from 'node:child_process'

describe('users Route', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  beforeEach(async () => {
    execSync('npx prisma migrate reset')
    execSync('npx prisma migrate dev')
  })

  it('should be able to create a new user', async () => {
    await request(app.server)
      .post('/users')
      .send({
        name: 'TESTE',
        email: 'teste1@teste.com',
        password: 'teste123',
      })
      .expect(201)
  })

  it('should be able to list all users', async () => {
    const createUserResponse = await request(app.server).post('/users').send({
      name: 'TESTE',
      email: 'teste2@teste.com',
      password: 'teste123',
    })

    const cookies = createUserResponse.get('Set-Cookie')

    const listUsersResponse = await request(app.server)
      .get('/users')
      .set('Cookie', cookies)
      .expect(200)

    const userId = listUsersResponse.body.users[0].id

    const getUsersResponse = await request(app.server)
      .get(`/users/${userId}`)
      .set('Cookie', cookies)
      .expect(200)

    expect(getUsersResponse.body.users).toEqual([
      {
        id: expect.any(String),
        name: expect.any(String),
        email: expect.any(String),
        password: expect.any(String),
      },
    ])
  })
})
