import * as graphql from "@nestjs/graphql";
import { PriceResponseDto } from "../uniswapPriceUi/PriceResponseDto";
import { UniswapPriceUiService } from "./uniswappriceui.service";

export class UniswapPriceUiResolver {
  constructor(protected readonly service: UniswapPriceUiService) {}

  @graphql.Query(() => PriceResponseDto)
  async FetchUniswapPrice(
    @graphql.Args()
    args: string
  ): Promise<PriceResponseDto> {
    return this.service.FetchUniswapPrice(args);
  }
}
