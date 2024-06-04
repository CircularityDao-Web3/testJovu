import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { EthersService } from "./ethers.service";

@swagger.ApiTags("ethers")
@common.Controller("ethers")
export class EthersController {
  constructor(protected readonly service: EthersService) {}
}
