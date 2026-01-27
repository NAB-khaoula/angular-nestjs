import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PrismaService } from '../prisma/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {

  constructor(private prisma: PrismaService){

  }

  create(createProductInput: CreateProductInput) {
    // return this.prisma.product.create({
    //   data: createProductInput
    // });
    return 'This action adds a new product';
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: string) {
    return this.prisma.product.findUnique({
      where: {
        id
      }
    });
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

  async searchProducts(keyword: string): Promise<Product[]> {
    const lowercaseKeyword = keyword.toLowerCase();
    return  this.prisma.product.findMany({
      where: {
        OR: [
          {name: {contains: lowercaseKeyword, mode: 'insensitive' }},
          {description: {contains: lowercaseKeyword, mode: 'insensitive'}}
        ]
      }
    }); 
  }
}
