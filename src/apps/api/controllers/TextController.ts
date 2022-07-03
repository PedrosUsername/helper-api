import { Request, Response, NextFunction } from "express";
import { LoremIpsumService } from "../../../services/LorenIpsumService";


interface TextRequest {
  size: number;
}

export class TextController {
  #loremIpsumService: LoremIpsumService;

  constructor() {
    this.#loremIpsumService = new LoremIpsumService();
  }

  getLorenIpsum = (req: Request<TextRequest>, res: Response, next: NextFunction) => {
    const qtd = Number(req.query.size ?? 5);

    return res.status(200).json({
      data: this.#loremIpsumService.generate(qtd),
    });
  };
}
