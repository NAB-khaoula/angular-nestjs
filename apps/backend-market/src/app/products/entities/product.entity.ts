import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int)
  id!: number;

  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field(() => Float)
  price!: number;

  @Field()
  image!: string;

  @Field()
  stripePriceId!: string;

  @Field()
  isFeatured!: boolean;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
