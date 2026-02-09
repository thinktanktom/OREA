
export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

export interface Collection {
  id: string;
  title: string;
  image: string;
  link: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
