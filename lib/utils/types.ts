export type TBook = {
  id: number;
  title: string;
  released: Date;
  author: TAuthor;
}

export type TAuthor = {
  id: number;
  name: string;
  dob: Date;
  pob: string;
  books: TBook[];
}

export type TUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  passwordHash?: string;
  password_hash?: string;
}
