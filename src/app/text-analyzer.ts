import { TextAnalyzerResult } from "./text-analyzer-result";

export class TextAnalyzer {

    analyzeText(text: string): TextAnalyzerResult {

        const arrayOfWords = this.getArrayOfWords(text);
        const textWithoutSpaces = this.getTextWithoutWhiteSpaces(text);

        const characterCount = this.transformArrayOfLettersToObjectContainingLettersCount(textWithoutSpaces);

        return {
            textLength: {
                withSpaces: text.length,
                withoutSpaces: textWithoutSpaces.length
            },
            wordCount: arrayOfWords.length,
            characterCount: characterCount
        };
    }

    private getTextWithoutWhiteSpaces(text: string): string{
        return text.replace(/ /g, '');
    }

    private getArrayOfWords(text: string): string[] {
        return text.match(/[^ ]+/g) || [ ];
    }

    private transformArrayOfLettersToObjectContainingLettersCount(textWithoutSpaces: string): { [key: string]: number }[] {
        const emptyArray: { [key: string]: number }[] = [];
        const result = Array.from(textWithoutSpaces)
            // excluding digit
            .filter(this.isLetter)
            // sorting asc by letter
            .sort((a, b) => a > b ? 1 : -1)
            // transforming array of letters into an object indexed using letters
            .reduce((arrayOfLetterObjects, c) => {
                if(arrayOfLetterObjects.filter(x => x[c]).length == 0) {
                    const objLetter: { [key: string]: number } = { };
                    objLetter[c] = 0;
                    arrayOfLetterObjects.push(objLetter);
                }
                
                arrayOfLetterObjects[arrayOfLetterObjects.length-1][c]++;
                
                return arrayOfLetterObjects;
            }, emptyArray)
            ;

        return result;
    }

    private isLetter(value: string): boolean {
        return (value.length === 1) && /[a-zA-Z]/.test(value);
    }

}