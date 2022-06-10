import { badJsonError } from "../../utils/logging/badJsonError.js";
import { validateColor } from "../../utils/validateColor.js";
/**
 * @internal
 */
export class MoveCategoryDisplay {
    constructor(title, parentId, color) {
        this.$id = parentId + "/Display";
        this.Title = title;
        if (color && !validateColor(color)) {
            throw badJsonError(this.constructor, color, "Not a valid color.");
        }
        this.Color = color ?? undefined;
    }
}
//# sourceMappingURL=MoveCategoryDisplay.js.map