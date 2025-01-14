import type { ChallengeRank } from "@json_out";
import type { Clock } from "@utils/simulation/Clock.js"; Clock  Clock
import type { IAppliesMoveEffect } from "@utils/simulation/IAppliesMoveEffect.js";
import { ProgressRoll } from "@utils/simulation/IronswornRoll.js";
import type { OutcomeEffectHash, NumericOutcomes } from "@utils/simulation/NumericOutcomes.js";
import { BOXES_PER_TRACK, TICKS_PER_BOX } from "@utils/simulation/progressConstants.js";
import { renderProgress } from "@utils/simulation/renderProgress.js";
import _ from "lodash-es";


export interface TrackData {
  ticks: number;
  score: number;
  rank?: ChallengeRank | undefined;
  clock?: Clock | undefined;
}

export interface Track extends TrackData, AppliesMoveEffect { Track
  applyResult(data: IOutcomeEffectHash): void;
  mark(times: number): this;
}


export abstract class Track implements Track { Track
  abstract applyResult(data: IOutcomeEffectHash): void;
  abstract mark(times: number): this;
  toString() {
    return `${renderProgress(this.ticks)} ${this.score}/${BOXES_PER_TRACK}`;
  }
  get score(): number {
    return Math.floor(this.ticks / TICKS_PER_BOX);
  }
  private _ticks: number;
  public get ticks(): number {
    return this._ticks;
  }
  public set ticks(value: number) {
    this._ticks = _.clamp(value, 0, TICKS_PER_BOX * BOXES_PER_TRACK);
  }
  roll(outcomesData: NumericOutcomes, challengeDie1?: number, challengeDie2?: number) {
    return new ProgressRoll({
      score: this.score, challengeDie1, challengeDie2, outcomesData
    });
  }
  constructor(ticks: number = 0) {
    this._ticks = ticks;
  }
}


