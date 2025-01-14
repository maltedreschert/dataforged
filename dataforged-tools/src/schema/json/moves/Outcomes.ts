import type { MixinId, OutcomeMiss, OutcomeStrongHit, OutcomeWeakHit } from '@schema'

/**
 * @public
 */
export interface Outcomes extends MixinId {
  /**
   * @pattern ^(starforged|ironsworn)/(moves/[a-z_]+/[a-z_]+|assets/[a-z_]+/[a-z_]+/[1-3]/alter/moves/[0-9]+|moves/assets/[a-z_]+/[a-z_]+/[1-3]/[a-z_]+)/outcomes$
   */
  $id: string
  strong_hit: OutcomeStrongHit
  weak_hit: OutcomeWeakHit
  miss: OutcomeMiss
}
