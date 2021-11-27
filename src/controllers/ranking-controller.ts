import { Application, Request, Response } from "express";

import { RankingService } from "../services/ranking-service";

export const loadApiEndpoints = (app: Application): void => {
  app.get("/api/ranking/:rankingDate", async (req: Request, res: Response) => {
    const rankingService = new RankingService();
    try {
      const response = await rankingService.getElementsByCategory(
        req.params.rankingDate,
        Number(req.query.num as string),
        req.query.lang as string
      );
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json({ status: err, message: err });
    }
  });
};
