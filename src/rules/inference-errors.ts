

export const InferenceError = (() => {

    const _refError = new Error('ReferenceError');
    _refError.name = 'ReferenceError';

    return {
        InvalidNumberOfArguments: (errMsg?: string) => {
            return null;
        },
        NotApplicable: (errMsg?: string) => {
            return null;
        }
    } 

})();