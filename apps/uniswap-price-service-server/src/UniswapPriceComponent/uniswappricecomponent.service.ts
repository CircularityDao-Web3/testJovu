import { Injectable } from "@nestjs/common";

@Injectable()
export class UniswapPriceComponentService {
  constructor() {}
  async UniswapPriceComponent(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
