import { Request, Response, NextFunction } from "express";
import { ArrayService } from "../../../services/ArrayService";

export class ArrayController {
  #service: ArrayService;

  constructor() {
    this.#service = new ArrayService();
  }

  postEx002 = (req: Request<string[] | number[] | undefined>, res: Response, next: NextFunction) => {
    const array = Array.isArray(req.body) ? req.body : [];
    const sort = req.query?.sort?.toString() ?? 'asc';
    const allowDuplicates = req.query?.allowDuplicates?.toString() ?? 'yes';

    return res.status(200).json(
      this.#service.tratarArrayEx002(array, sort, allowDuplicates),
    );
  };
}
