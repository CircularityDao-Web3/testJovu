import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("PriceResponseDtoObject")
class PriceResponseDto {
    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    price!: number;

    @Field(() => Date)
    @Type(() => Date)
    timestamp!: Date;
}

export { PriceResponseDto as PriceResponseDto };