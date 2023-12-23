//Exporting
export { generateProof } from "./generateProof";
export { validateProof } from "./validateProof";

/************************************************************************************************************************ 
A proof is a set of input sentences 'axioms' combined with a set of input production rules called 'productionRules' 
combined with an index set of sentences 'derivedSentences'. Each sentence s_i in 'derivedSentences' is either

a) an axiom (element of 'axioms'), or
b) the result of the application of a production rule in 'productionRules' applied to a subset of sentences 
    {s_j: j < i and s_j is in 'derivedSentences'} 

The last sentence in the proof is the conclusion of the proof.
************************************************************************************************************************/

/*******************************************************************************
 *  FranckEinstein90 made this
 *  IProof interface, models a sequential deduction
*******************************************************************************/

import { 
    DerivationArgument, Sentence,
    Sentences, IProof, 
    lastSentence, Derivation, Index
} from "./types";

/******************************************************************************/
const _derivationArguments = ( 
        derivation                      : Derivation, 
        axioms                          : Sentences, 
        previousDerivationConclusions   : Sentences
    ): Sentences => 

    derivation.derivationArguments.map(
        ( arg: DerivationArgument ): Sentence => {
            if( 'axiom' in arg ) return axioms[ arg.axiom ] ;
            return previousDerivationConclusions[ arg.derivedSentence ] ;
        }
    ); 

/******************************************************************************/
const _verifyDerivation = (
    proof               : IProof, 
    derivationIndex     : Index, 
    previousDerivations : Sentences
    ): Sentence => {

    const derivation = proof.derivations[ derivationIndex ] ;
    const productionRule = proof.inferences[ derivation.productionRule ] ;
    const ruleArguments = _derivationArguments(
        derivation,
        proof.axioms,
        previousDerivations
    ) ;
    return productionRule( ruleArguments ) ; 
}; 

/******************************************************************************/
export const verifyProof = (proof: IProof): boolean => {

    const derivedSentences: Sentences = [] ; 
    let derivationIndex = 0 ; 

    while ( derivationIndex < proof.derivations.length ) {
        const derivedSentence = _verifyDerivation( proof, derivationIndex, derivedSentences ) ; 
        derivedSentences.push( derivedSentence ) ;  
        derivationIndex += 1 ; 
    } 

    return lastSentence( derivedSentences ) === proof.conclusion ;
}; 
