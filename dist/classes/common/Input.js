import { InputType } from "../../json_out/common/InputType.js";
import { SelectInputOptionType } from "../../json_out/index.js";
import { ClockType } from "../../json_out/index.js";
export class NumberInput {
    constructor(json, id) {
        this.Min = 0;
        this.Step = 1;
        this["Starting Value"] = 0;
        this.Adjustable = true;
        this.$id = id;
        Object.assign(this, json);
    }
}
export class ClockInput {
    constructor(json, id) {
        this["Input Type"] = InputType.Clock;
        this["Clock Type"] = ClockType.Tension;
        this.Filled = 0;
        this.Adjustable = true;
        this.$id = id;
        Object.assign(this, json);
    }
}
export class TextInput {
    constructor(json, id) {
        this.Adjustable = false;
        this.$id = id;
        Object.assign(this, json);
    }
}
export class SelectInput {
    constructor(json, id) {
        this.Adjustable = false;
        console.log(json);
        this.$id = id;
        this.Name = json.Name;
        this["Input Type"] = json["Input Type"];
        this["Option Type"] = json["Option Type"];
        this.Options = json.Options.map(optionJson => {
            switch (json["Option Type"]) {
                case SelectInputOptionType.ConditionMeter:
                    return new SelectInputMeterOption(optionJson, `${this.$id}/Options/${optionJson.Name}`);
                case SelectInputOptionType.Stat:
                    return new AssetSelectInputStatOption(optionJson, `${this.$id}/Options/${optionJson.Name}`);
                case SelectInputOptionType.Custom:
                    return new SelectInputCustomOption(optionJson, `${this.$id}/Options/${optionJson.Name}`);
                default:
                    throw new Error("Unable to construct select input options - check the data!");
            }
        });
        this.Adjustable = json.Adjustable ?? false;
    }
}
export class AssetSelectInputStatOption {
    constructor(json, id) {
        this.$id = id;
        Object.assign(this, json);
    }
}
export class SelectInputMeterOption {
    constructor(json, id) {
        this.$id = id;
        Object.assign(this, json);
    }
}
class SelectInputCustomOption {
    constructor(json, id) {
        this.$id = id;
        Object.assign(this, json);
    }
}
//# sourceMappingURL=Input.js.map