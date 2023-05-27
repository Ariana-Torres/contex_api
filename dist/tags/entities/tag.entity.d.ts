import { Product } from "src/products/entities/product.entity";
export declare class Tag {
    id: string;
    name: string;
    slug: string;
    products: Product[];
}
