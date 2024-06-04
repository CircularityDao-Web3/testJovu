import { Injectable } from "@nestjs/common";
import { PriceResponseDto } from "../uniswapPriceUi/PriceResponseDto";

@Injectable()
export class UniswapPriceUiService {
  constructor() {}
  async FetchUniswapPrice(args: string): Promise<PriceResponseDto> {
    throw new Error("Not implemented");
  }
}
