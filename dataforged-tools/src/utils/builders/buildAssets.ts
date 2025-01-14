import { MASTER_DATA_PATH } from '@constants'
import { Asset, Game, YamlAssetType, YamlAssetRoot } from '@schema'
import { buildLog } from '@utils/logging/buildLog.js'
import yaml from 'js-yaml'
import _ from 'lodash-es'
import fs from 'fs'
import { AssetTypeBuilder } from '@builders'

/**
 * Build and validate all asset objects from YAML.
 * @returns An array of Asset objects.
 */
export function buildAssets(game: Game = Game.Starforged) {
  const assetPath = `${MASTER_DATA_PATH as string}/${game}/Assets.yaml`
  const data = fs.readFileSync(assetPath, { encoding: 'utf-8' })
  const json = yaml.load(data) as YamlAssetRoot
  const result = _.mapValues(json['asset_types'],
    (assetTypeYaml, key) => new AssetTypeBuilder(assetTypeYaml, key, game, json.source))
  buildLog(buildAssets, `Finished building ${result.length} asset types containing a total of ${_.sum(_.map(result, type => Object.keys(type.assets).length))} assets.`)
  return result
}
