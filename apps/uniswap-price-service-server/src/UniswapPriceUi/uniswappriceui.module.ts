import { Module } from "@nestjs/common";
import { UniswapPriceUiService } from "./uniswappriceui.service";
import { UniswapPriceUiController } from "./uniswappriceui.controller";
import { UniswapPriceUiResolver } from "./uniswappriceui.resolver";

@Module({
  controllers: [UniswapPriceUiController],
  providers: [UniswapPriceUiService, UniswapPriceUiResolver],
  exports: [UniswapPriceUiService],
})
export class UniswapPriceUiModule {}
