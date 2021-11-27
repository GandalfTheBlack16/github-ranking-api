export class RankingEntry {
  readonly rank: number;
  readonly item: string;
  readonly repo_name: string;
  readonly stars: number;
  readonly forks: number;
  readonly language: string;
  readonly repo_url: string;
  readonly username: string;
  readonly issues: number;
  readonly last_commit: Date;
  readonly description: string;

  constructor(_data: any) {
    this.rank = _data.rank;
    this.item = _data.item;
    this.repo_name = _data.repo_name;
    this.stars = _data.stars;
    this.forks = _data.forks;
    this.language = _data.language;
    this.repo_url = _data.repo_url;
    this.username = _data.username;
    this.issues = _data.issues;
    this.last_commit = _data.last_commit;
    this.description = _data.description;
  }

  getRank(): number {
    return this.rank;
  }

  getItem(): string {
    return this.item;
  }
}
