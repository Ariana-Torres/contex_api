import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Tag } from 'src/tags/entities/tag.entity';
import { Category } from 'src/categories/entities/category.entity';
export declare class ProductsService {
    private productRepository;
    private tagRepo;
    private categoryRepo;
    constructor(productRepository: Repository<Product>, tagRepo: Repository<Tag>, categoryRepo: Repository<Category>);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    update(id: number, updateProductDto: UpdateProductDto): string;
    remove(id: number): string;
}
