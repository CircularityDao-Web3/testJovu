import { Module } from "@nestjs/common";
import { EthersService } from "./ethers.service";
import { EthersController } from "./ethers.controller";
import { EthersResolver } from "./ethers.resolver";

@Module({
  controllers: [EthersController],
  providers: [EthersService, EthersResolver],
  exports: [EthersService],
})
export class EthersModule {}
