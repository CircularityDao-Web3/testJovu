import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UniswapPriceUiService } from "./uniswappriceui.service";
import { PriceResponseDto } from "../uniswapPriceUi/PriceResponseDto";

@swagger.ApiTags("uniswapPriceUis")
@common.Controller("uniswapPriceUis")
export class UniswapPriceUiController {
  constructor(protected readonly service: UniswapPriceUiService) {}

  @common.Get("/fetch-price")
  @swagger.ApiOkResponse({
    type: PriceResponseDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchUniswapPrice(
    @common.Body()
    body: string
  ): Promise<PriceResponseDto> {
        return this.service.FetchUniswapPrice(body);
      }
}
