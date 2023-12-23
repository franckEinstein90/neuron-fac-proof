import { expect } from 'chai';
import {Formula} from '../src/sentences/types';
import {InferenceRule} from '../src//types';
import { InferenceError } from '../src/rules/inference-errors';

const identity: InferenceRule = (A: Formula) => {
    return A;
}; 


const typeApplication: InferenceRule = (A: Formula, B: Formula) => {
    A.match(/^TT\s*([A-Z]+)\s*\.(.+)\s*$/);
    const boundVariable = RegExp.$1;
    const body = RegExp.$2;

    return body.replace(new RegExp(boundVariable, 'g'), B); 
};

const modusPonens: InferenceRule = (A: Formula, B: Formula) => {

        const AElements = A.split('=>');
        
        if(AElements.length !== 2) return InferenceError.InvalidNumberOfArguments(); 
        if(B === AElements[0]) return AElements[1];

        return InferenceError.NotApplicable();
};  


describe("The 'verifyProof function", () => {

  
/*   it("It returns true when the proof is valid (example 1)", () => {

        const p: ProofTypes.IProof = {

            axioms: ["D", "D=>C"],g
            productionRules: [identity, modusPonens],
            derivations: [ 
                {
                    derivationArguments : [{axiom:0}],
                    productionRule      : 0,
                }
            ],
            conclusion: "D", 
        }; 

        const result = ItemsToTest.verifyProof(p);
        expect(result).to.equal(true);
    });
   
    it("It returns true when the proof is valid (example 2)", () => {

        const p: ProofTypes.IProof = {
            axioms: ["D", "D=>C"],
            productionRules: [modusPonens],
            derivations: [ 
                {
                    derivationArguments: [ {axiom:1}, {axiom:0}],
                    productionRule: 0,
                }
            ],
            conclusion: "C", 
        }; 

        const result = ItemsToTest.verifyProof(p);
        expect(result).to.equal(true);
    });

    it("It returns true when the proof is valid (example 3)", () => {
        const p: ProofTypes.IProof = {
            axioms: ["D", "D=>C", "C=>A"],
            productionRules: [modusPonens],
            derivations: [ 
                {
                    derivationArguments: [{axiom:1},{axiom:0}],
                    productionRule: 0,
                }, 
                {
                    derivationArguments: [{axiom:2}, {derivedSentence:0}],
                    productionRule: 0,
                },
            ],
            conclusion: "A",
        }; 

        const result = ItemsToTest.verifyProof(p);
        expect(result).to.equal(true);
    });

    it("It returns false when the proof is not valid", () => {
        const p: ProofTypes.IProof = {
            axioms: ["A", "A=>E"],
            productionRules: [modusPonens],
            derivations: [ {
                derivationArguments: [{axiom:1},{axiom:0}],
                productionRule: 0,
            }],
            conclusion: "M"
        }; 

        const result = ItemsToTest.verifyProof(p);
        expect(result).to.equal(false);
    });*/ 

}); 