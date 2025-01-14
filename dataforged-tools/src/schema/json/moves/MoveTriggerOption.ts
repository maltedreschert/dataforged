import type {
  ConditionMeter, CustomStat, LegacyTypeClassic, LegacyTypeStarforged, MixinId, MixinText, PcConditionMeterType, ProgressTypeClassic, ProgressTypeStarforged, RollMethod, RollType,
  Stat
} from '@schema'

/**
 * Standard player character stats or condition meters that can be used as +stat in an action roll.
 * @public
 */
export type RollableStat = Stat | CustomStat['$id'] | PcConditionMeterType | ConditionMeter['$id']

/**
 * @public
 */
export interface MoveTriggerOptionBase extends MixinId, Partial<MixinText> {
  /**
   * @pattern ^(starforged|ironsworn)/(moves/[a-z_]+/[a-z_]+|assets/[a-z_]+/[a-z_]+/[1-3]/alter/moves/[0-9]+|moves/assets/[a-z_]+/[a-z_]+/[1-3]/[a-z_]+)/trigger/options/[0-9]+$
   */
  $id: string
  /**
   * Whether this option is an action roll or progress roll.
   */
  roll_type: RollType
  /**
   * The method used to choose the stat or track in the `Using` array.
   */
  method: RollMethod
  /**
   * The stat(s) or progress track(s) that may be rolled with this move trigger option.
   */
  using: (RollableStat | ProgressTypeStarforged | ProgressTypeClassic | LegacyTypeStarforged | LegacyTypeClassic)[]
  /**
   * Defines a custom stat, if one is included in this object's `With` array.
   */
  custom_stat?: CustomStat | undefined
}

/**
 * @public
 */
export interface MoveTriggerOptionAction extends MoveTriggerOptionBase {
  roll_type: RollType.Action
  using: RollableStat[]
}

/**
 * @public
 */
export interface MoveTriggerOptionProgress extends MoveTriggerOptionBase {
  roll_type: RollType.Progress
  using: (ProgressTypeStarforged | ProgressTypeClassic | LegacyTypeClassic | LegacyTypeStarforged)[]
}
