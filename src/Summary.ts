import { MatchData } from "./MatchData";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface outputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarger: outputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarger.print(output);
  }
}
