import * as graphql from "@nestjs/graphql";
import { EthersService } from "./ethers.service";

export class EthersResolver {
  constructor(protected readonly service: EthersService) {}
}
