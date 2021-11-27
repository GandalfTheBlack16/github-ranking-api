import { RankingEntry } from "../domain/ranking-entry";

export interface Repository {
  getData(path: string): Promise<RankingEntry[]>;
}
