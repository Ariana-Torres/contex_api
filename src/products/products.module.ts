import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { TagsService } from 'src/tags/tags.service';
import { CategoriesModule } from 'src/categories/categories.module';
import { TagsModule } from 'src/tags/tags.module';
import { Tag } from 'src/tags/entities/tag.entity';
import { Category } from 'src/categories/entities/category.entity';

@Module({
  imports: [
    // TagsModule,
    // CategoriesModule,
    TypeOrmModule.forFeature([Product, Tag, Category]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule { }
