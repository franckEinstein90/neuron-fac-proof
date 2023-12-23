
export type Index  = number;
export type Formula = string;
export type Formulas = Formula[];


// Alpha equivalence is a relationship between two sentences that might be 
// different but can be made the same by renaming bound variables. 
export type AlphaEquivalenceRelationship = (a: Formula, b: Formula) => Promise<boolean>;

//A simple syntactic system is a set of sentences and an 
// alpha equivalence function

export interface SimpleSyntacticSystem {
    alphaEquivalence: AlphaEquivalenceRelationship;
    sentences: Formula;
};
