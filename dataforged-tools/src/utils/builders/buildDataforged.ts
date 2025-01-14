
import { DelveCardType, Game, SourceTitle } from '@schema'
import type { Ironsworn, Starforged } from '@schema'
import { buildAssets } from '@utils/builders/buildAssets.js'
import { buildEncounters } from '@utils/builders/buildEncounters.js'
import { buildMoves } from '@utils/builders/buildMoves.js'
import { buildOracles } from '@utils/builders/buildOracles.js'
import { buildTruths } from '@utils/builders/buildTruths.js'
import { dataforgedStats } from '@utils/dataforgedStats.js'
import { buildLog } from '@utils/logging/buildLog.js'
import { buildDelveSiteCards } from '@utils/builders/buildDelveSiteCards.js'
import { IronlandsRegionCollection } from '@builders/cyclopedia/IronlandsRegionCollection.js'
import { SourceBuilder } from '@builders'
import { DelveRarityCollection } from '@builders/rarities/DelveRarityCollection.js'

/**
 * Builds all data for Dataforged.
 * @returns An object keyed with the game data.
*/
export function buildDataforged(game: Game = Game.Starforged) {
  buildLog(buildDataforged, `Building Dataforged for ${game}...`)
  let data: Ironsworn | Starforged
  switch (game) {
    case Game.Starforged: {
      data = {
        asset_types: buildAssets(game),
        encounters: buildEncounters(game),
        move_categories: buildMoves(game),
        oracle_sets: buildOracles(game),
        setting_truths: buildTruths(game)
      } as Starforged
      break
    }
    case Game.Ironsworn: {
      data = {
        asset_types: buildAssets(game),
        encounters: buildEncounters(game),
        move_categories: buildMoves(game),
        oracle_sets: buildOracles(game),
        setting_truths: buildTruths(game),
        delve_rarities: new DelveRarityCollection(SourceBuilder.defaultByTitle(SourceTitle.IronswornDelve)).toJson(),
        delve_site_themes: buildDelveSiteCards(DelveCardType.Theme),
        delve_site_domains: buildDelveSiteCards(DelveCardType.Domain),
        ironlands_regions: new IronlandsRegionCollection(SourceBuilder.defaultByTitle(SourceTitle.Ironsworn)).toJson()
        // "Rarities": new DelveRarityCollection(game).toJson()
        // Rarities
        // Delve Sites (the sample ones from Delve)
      } as Ironsworn
      break
    }
    default:
      throw new Error()
  }

  buildLog(buildDataforged, `Finished building JSON for ${game}:
    ${dataforgedStats(game, data)}`)
  return data
}
