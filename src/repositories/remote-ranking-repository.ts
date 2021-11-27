import axios from "axios";
import csvParser from "csv-parser";

import { RankingEntry } from "../domain/ranking-entry";
import { Repository } from "./repository";

export class RemoteRankingRepository implements Repository {
  getData(csvUrl: string): Promise<RankingEntry[]> {
    return new Promise<RankingEntry[]>((resolve, reject) => {
      const result: RankingEntry[] = [];
      axios({
        url: csvUrl,
        method: "GET",
        responseType: "stream",
      })
        .then((response) => {
          response.data
            .pipe(csvParser())
            .on("data", (data: any) => {
              const entry: RankingEntry = new RankingEntry(data);
              result.push(entry);
            })
            .on("error", (err: Error) => reject(err))
            .on("end", () => {
              return resolve(result);
            });
        })
        .catch((err: Error) => reject(err));
    });
  }
}
