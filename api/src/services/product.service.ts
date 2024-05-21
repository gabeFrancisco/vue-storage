import db from "../database/db";
import { ProductDTO } from "../models/DTOs/ProductDTO";
import { Product } from "../models/Product";

async function addProduct(
  dto: ProductDTO,
  userId: number
): Promise<ProductDTO | null> {
  if (dto === null || dto === undefined) {
    throw "DTO is null!";
  }

  const product: Product = {
    name: dto.name,
    category: dto.category,
    quantity: dto.quantity,
    price: dto.price,
    created_at: new Date(),
    user_id: userId,
  };

  try {
    await db.table("products").insert(product);
    return dto;
  } catch (ex) {
    console.log(ex);
    return null;
  }
}

async function getAllProducts(): Promise<Product[]> {
  return await db.table<Product>("products");
}

export default { addProduct, getAllProducts };
