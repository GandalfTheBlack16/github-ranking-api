import { RankingEntry } from "../domain/ranking-entry";
import { RemoteRankingRepository } from "../repositories/remote-ranking-repository";
import { Repository } from "../repositories/repository";

export class RankingService {
  private rankingRepository: Repository;
  constructor() {
    this.rankingRepository = new RemoteRankingRepository();
  }
  getElementsByCategory(
    rankingDate: string,
    elements: number,
    lang: string
  ): Promise<RankingEntry[]> {
    return this.rankingRepository
      .getData(
        `https://raw.githubusercontent.com/EvanLi/Github-Ranking/master/Data/github-ranking-${rankingDate}.csv`
      )
      .then((data: RankingEntry[]) => {
        const result: RankingEntry[] = [];
        for (const value of data) {
          if (value.getItem() === lang && value.getRank() <= elements)
            result.push(value);
        }
        return result;
      })
      .catch((err: Error) => {
        throw err;
      });
  }
}
