import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
export declare class TagsController {
    private readonly tagsService;
    constructor(tagsService: TagsService);
    create(createTagDto: CreateTagDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTagDto: UpdateTagDto): string;
    remove(id: string): string;
}
