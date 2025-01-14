import type { MixinDescription, MixinId, MixinSummary } from '@schema'

/**
 * Describes the string keys of this item that should be replaced with template strings and filled with the results of one or more oracles.
 * @public
 */
export interface RollTemplate extends MixinId, Partial<MixinSummary & MixinDescription> {
  /**
   * @pattern ^(starforged|ironsworn)/[a-z_]+/.+/roll_template$
   */
  $id: string
  /**
   * A template string for the parent's `Result` property, to be filled with an oracle table roll Result.
   * @localize
   * @example
   * ```json
   * "{{starforged/oracles/factions/affiliation}} of the {{starforged/oracles/factions/legacy}} {{starforged/oracles/factions/identity}}"
   * ```
   */
  result?: string | undefined
  /**
   * A template string for the parent's `summary` property, to be filled with an oracle table roll Result.
   * @localize
   */
  summary?: string | undefined
  /**
   * A template string for the parent's `description` property, to be filled with an oracle table roll Result.
   * @localize
   * @example
   * ```json
   * "Our computers are limited to simple digital systems and the most basic machine intelligence. This is because: {{starforged/setting_truths/artificial_intelligence/1-33/subtable}}.\n\nThe Adepts serve in place of those advanced systems. They utilize mind-altering drugs to see the universe as a dazzling lattice of data, identifying trends and predicting outcomes with uncanny accuracy. But to gain this insight they sacrifice much of themselves."
   * ```
   */
  description?: string | undefined
}
