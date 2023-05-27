import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';
export declare class MenuService {
    private menuRepository;
    constructor(menuRepository: Repository<Menu>);
    create(createMenuDto: CreateMenuDto): string;
    findAll(): Promise<Menu[]>;
    findOne(id: number): string;
    update(id: number, updateMenuDto: UpdateMenuDto): string;
    remove(id: number): string;
}
