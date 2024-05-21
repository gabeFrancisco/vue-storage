import { Request, Response, NextFunction } from "express";
import { ProductDTO } from "../models/DTOs/ProductDTO";
import productService from "../services/product.service";

async function addProduct(req: Request, res: Response, next: NextFunction) {
  try {
    const productDto: ProductDTO = {
      name: req.body.name,
      category: req.body.category,
      quantity: req.body.quantity,
      price: req.body.price,
    };
    await productService.addProduct(productDto, req.userId!).then((result) => {
      return res.json({ data: result, message: "Product added to database!" });
    });
    return res.json(req.userId!);
  } catch (err) {
    next(err);
  }
}

export default { addProduct };
