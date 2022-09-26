import BaseController from './base-controller';
import { Product } from '../interfaces/product.interface';
import { ProductsRepository } from '../repositorys/products-repository';

class ProductsController extends BaseController<Product> {
  constructor(private productsRepository: ProductsRepository) {
    super(productsRepository);
  }

  findProductByName(name: string): Product {
    return this.productsRepository.findProductByName(name);
  }
}

export default ProductsController;
