import { Row } from "../index.js";
import type { ISettingTruthOption, SettingTruthOptionId } from "../../json_out/index.js";
/**
 * @internal
 */
export declare class SettingTruthOption extends Row implements ISettingTruthOption {
    $id: SettingTruthOptionId;
    Description: string;
    "Quest Starter": string;
    constructor(parentId: string, json: ISettingTruthOption);
}
//# sourceMappingURL=SettingTruthOption.d.ts.map