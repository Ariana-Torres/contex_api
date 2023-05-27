import { Product } from 'src/products/entities/product.entity';
export declare class Category {
    id: string;
    name: string;
    slug: string;
    products: Product[];
}
