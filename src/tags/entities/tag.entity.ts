import { Product } from "src/products/entities/product.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tags' })
export class Tag {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    slug: string;

    @ManyToMany(() => Product, (product) => product.tags)
    products: Product[];
}
