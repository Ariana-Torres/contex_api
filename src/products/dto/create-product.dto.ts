import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength, isString } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    description: string;

    @IsNotEmpty()
    @IsNumber()
    rating: number;

    @IsOptional()
    color: string;

    @IsArray({ always: true })
    @IsString({ each: true })
    @IsOptional()
    tags: string[]

    @IsArray({ always: true })
    @IsString({ each: true })
    @IsOptional()
    categories: string[]
}
