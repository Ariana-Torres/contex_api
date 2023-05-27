import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { In, Repository } from 'typeorm';
import { Tag } from 'src/tags/entities/tag.entity';
import { Category } from 'src/categories/entities/category.entity';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Tag)
    private tagRepo: Repository<Tag>,
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>
  ) { }

  async create(createProductDto: CreateProductDto) {
    const { tags, categories, ...productData } = createProductDto

    let tagsModels = [];
    let categoriesModels = [];
    if (createProductDto.tags) {
      tagsModels = await this.tagRepo.find({
        where: { name: In([...createProductDto.tags]) }
      })
    }
    if (createProductDto.categories) {
      categoriesModels = await this.categoryRepo.find({
        where: { name: In([...createProductDto.categories]) }
      })
    }

    const model = this.productRepository.create({
      ...productData,
      categories: categoriesModels,
      tags: tagsModels
    })
    await this.productRepository.save(model);

    return model;
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: string) {
    return this.productRepository.findOneBy({ id })
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
