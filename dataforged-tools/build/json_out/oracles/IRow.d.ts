import type { AttributeKey } from "../game_objects/AttributeKey.js";
import type { IAttributeChoices, IDisplay, IHasDisplay, IHasGameObjects, IHasOracleContent, IHasRollTemplate, IHasSubtable, IHasSuggestions, IHasSummary, IMultipleRolls, IOracle, OracleTableId } from "../index.js";
/**
 * @public
 */
export declare type OracleTableRowId = `${OracleTableId}/${RollRange}`;
/**
 * @public
 */
export declare type RollRange = number | `${number}-${number}`;
/**
 * Display properties for a single row in an oracle table.
 * @public
 */
export declare type IRowDisplay = Omit<IDisplay, "Title">;
/**
 * Interface representing a single row in an oracle table.
 * @public
 */
export interface IRow extends Partial<IHasSummary & IHasRollTemplate<"Result" | "Summary" | "Description"> & IHasSuggestions & IHasDisplay<IRowDisplay> & IHasOracleContent & IHasSubtable & IHasGameObjects> {
    $id?: string | null;
    /**
     * The low end of the dice range for this row.
     */
    Floor: number | null;
    /**
     * The high end of the dice range for this row.
     */
    Ceiling: number | null;
    /**
     * The primary result text for the row, annotated in Markdown.
     * In the book, this is frequently the only column aside from the roll column. Otherwise, it is the first column.
     * Some tables label this column as something other than Result; see the parent (or grandparent) Oracle.Display for more information.
     */
    Result: string;
    /**
     * A secondary markdown string that must be presented to the user for the implementation to be complete, but may benefit from progressive disclosure (such as a collapsible element, popover/tooltip, etc).
     * Some tables label this column as something other than Result; see the parent (or grandparent) Oracle.Display for more information.
     */
    Summary?: string | undefined;
    /**
     * Additional oracle tables that should be rolled when this row is selected.
     */
    "Oracle rolls"?: IOracle["$id"][] | undefined;
    /**
     * A table to be rolled when this row is selected. If this row references an external oracle, the `Oracles` property is used instead.
     */
    Subtable?: IRow[] | undefined;
    /**
     * Data for rows that call for multiple rolls, e.g. on `Roll twice` results.
     */
    "Multiple rolls"?: IMultipleRolls | undefined;
    /**
    * The attributes set by this row.
     */
    Attributes?: IAttributeChoices<AttributeKey>[] | undefined;
}
//# sourceMappingURL=IRow.d.ts.map