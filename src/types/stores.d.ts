declare module '@/stores/cart' {
  import { Store } from 'pinia';

  export interface CartItem {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
  }

  export interface CartState {
    items: CartItem[];
    total: number;
  }

  export interface CartStore extends Store {
    items: CartItem[];
    total: number;
    addItem: (item: CartItem) => void;
  }

  export const useCartStore: () => CartStore;
}
