import { BaseEntity } from "./BaseEntity";

export interface Product extends BaseEntity {
  name: string;
  category: string;
  quantity: number;
  price: number;
  user_id: number;
}
