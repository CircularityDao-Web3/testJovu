import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UniswapPriceComponentService } from "./uniswappricecomponent.service";

@swagger.ApiTags("uniswapPriceComponents")
@common.Controller("uniswapPriceComponents")
export class UniswapPriceComponentController {
  constructor(protected readonly service: UniswapPriceComponentService) {}

  @common.Post("/uniswap-price-component")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UniswapPriceComponent(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UniswapPriceComponent(body);
      }
}
