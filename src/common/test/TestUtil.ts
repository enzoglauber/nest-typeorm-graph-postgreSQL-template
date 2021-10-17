import { CreateUserInput } from 'src/app/user/dto/create-user.input';
import { UpdateUserInput } from 'src/app/user/dto/update-user.input';
import User from 'src/app/user/user.entity';




export const mockAddAccountParams: CreateUserInput = {
  name: 'Test User',
  email: 'user@email.com',
  password: '123456'
};

export const mockUpdateUserParams: UpdateUserInput = {
  id: '1',
  email: 'email-updated@email.com',
};

export const mockUserModel: User = {
  id: '1',
  active: true,
  archived: false,
  createdAt: new Date(),
  updatedAt: new Date(),
  ...mockAddAccountParams,
};

export const mockUpdatedUserModel: User = {
  ...mockUserModel,
  email: 'updated-email@email.com',
};

export const mockUserArrayModel: User[] = [
  mockUserModel,
  {
    id: '2',
    name: 'Test User 2',
    email: 'email2@email.com',
    password: '123456',
    active: true,
    archived: false,
    createdAt: new Date(),
    updatedAt: new Date(),

  },
  {
    id: '3',
    name: 'Test User 3',
    email: 'email3@email.com',
    password: '123456',
    active: true,
    archived: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
