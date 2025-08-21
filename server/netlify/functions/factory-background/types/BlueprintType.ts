import {PartialDocument} from "./DocumentType";

export type ActionStep = (doc: PartialDocument) => Promise<PartialDocument>;
export type ValidationStep = (doc: PartialDocument) => Promise<PartialDocument>;
export type Step = ActionStep | ValidationStep;
