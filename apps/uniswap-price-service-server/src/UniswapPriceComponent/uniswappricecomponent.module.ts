import { Module } from "@nestjs/common";
import { UniswapPriceComponentService } from "./uniswappricecomponent.service";
import { UniswapPriceComponentController } from "./uniswappricecomponent.controller";
import { UniswapPriceComponentResolver } from "./uniswappricecomponent.resolver";

@Module({
  controllers: [UniswapPriceComponentController],
  providers: [UniswapPriceComponentService, UniswapPriceComponentResolver],
  exports: [UniswapPriceComponentService],
})
export class UniswapPriceComponentModule {}
