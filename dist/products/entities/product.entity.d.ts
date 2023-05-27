import { Category } from "src/categories/entities/category.entity";
import { Tag } from "src/tags/entities/tag.entity";
export declare class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    color: string;
    categories: Category[];
    tags: Tag[];
}
