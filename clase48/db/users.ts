import type { User } from '../types/users.ts'

const users: User[] = [{
  id: 1,
  name: 'Iram',
  birthDate: new Date('1989-03-06')
}]

export const getUsers = async (): Promise<User[]> => {
  return await Promise.resolve(users)
}

export const getUser = async (id: string): Promise<User> => {
  const user = users.find(user => user.id === Number(id))

  if (user) {
    return await Promise.resolve(user)
  }

  throw new Error('User not found')
}

export const createUser = async (name: string, birthDate: Date): Promise<User> => {
  const user: User = {
    id: users.length + 1,
    name,
    birthDate
  }

  users.push(user)

  return await Promise.resolve(user)
}