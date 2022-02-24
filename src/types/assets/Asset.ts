import t from 'ts-runtime/lib';
import { ConditionMeter } from "../general/ConditionMeter";
import Source from "../general/Source";
import ISource from "../general/interfaces/ISource";
import AssetAbility from "./AssetAbility";
import AssetType from "./AssetType";
import IAssetAttachment from "./AssetAttachment";

import AssetId from './AssetId';
import IAsset from './interfaces/IAsset';
import IAssetData from './interfaces/IAssetData';
import { is } from 'typescript-is';
import { Input, IInput, INumberInput, NumberInput, ISelectInput, SelectInput, ITextInput, TextInput } from '../general/Input';
import buildLog from '../../utilities/buildLog';

export default class Asset implements IAsset {
  $id: AssetId;
  Name: string;
  Aliases?: string[] | undefined;
  "Asset Type": AssetType;
  Attachments?: IAssetAttachment | undefined;
  Inputs?: IInput[] | undefined;
  Requirement?: string | undefined;
  Abilities: AssetAbility[];
  "Condition Meter"?: ConditionMeter | undefined;
  Source: Source;
  constructor(json: IAssetData, source: ISource) {
    this.$id = `Assets / ${json.Name}`;
    buildLog(this.constructor, `Building ${this.$id}`);
    this.Name = json.Name;
    this.Aliases = json.Aliases;
    this["Asset Type"] = json["Asset Type"];
    this.Attachments = json.Attachments;

    if (json.Inputs) {
      if (!is<IInput[]>(json.Inputs)) {
        throw new Error("[Asset] json.Inputs does not conform to IInput[]")
      }
      this.Inputs = (json.Inputs as IInput[]).map(inputJson => {
        const idString = `${this.$id} / Inputs / ${inputJson.Name}`;
        if (is<INumberInput>(inputJson)) {
          return new NumberInput(inputJson, idString);
        }
        else if (is<ISelectInput>(inputJson)) {
          return new SelectInput(inputJson, idString);
        }
        else if (is<ITextInput>(inputJson)) {
          return new TextInput(inputJson, idString);
        }
        else { new Error("Unable to assign input data to a type - make sure it's correct."); }
      }) as IInput[];
    }
    this.Requirement = json.Requirement;
    this.Abilities = json.Abilities.map((ability, index) => new AssetAbility(ability, this.$id + ` / Abilities / ${index + 1}`));
    this["Condition Meter"] = json["Condition Meter"] ? new ConditionMeter(json["Condition Meter"], this.$id + " / Condition Meter", this["Asset Type"]) : undefined;
    this.Source = new Source(source);
  }
}
