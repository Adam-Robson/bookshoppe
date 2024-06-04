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
