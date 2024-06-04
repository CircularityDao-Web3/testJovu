import * as graphql from "@nestjs/graphql";
import { UniswapPriceComponentService } from "./uniswappricecomponent.service";

export class UniswapPriceComponentResolver {
  constructor(protected readonly service: UniswapPriceComponentService) {}

  @graphql.Mutation(() => String)
  async UniswapPriceComponent(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UniswapPriceComponent(args);
  }
}
