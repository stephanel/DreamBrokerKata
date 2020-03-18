import { TextAnalyzerResult, TextLength } from "./text-analyzer-result";

export class TextAnalyzer {

    analyzeText(text: string): TextAnalyzerResult {
        const words = text.match(/[^ ]+/g) || [ ];
        const textWithoutSpaces = text.replace(/ /g, '');

        const characterCount = this.transformArrayOfLettersToObjectContainingLettersCount(textWithoutSpaces);

        const textLength: TextLength = {
            withSpaces: text.length,
            withoutSpaces: textWithoutSpaces.length
        };

        return {
            textLength: textLength,
            wordCount: words.length,
            characterCount: characterCount
        } as TextAnalyzerResult;
    }

    private transformArrayOfLettersToObjectContainingLettersCount(textWithoutSpaces: string): { [key: string]: number } {
        return Array.from(textWithoutSpaces)
            // excluding digit
            .filter(this.isLetter)
            // sorting asc by letter
            .sort((a, b) => a > b ? 1 : -1)
            // transforming array of letters into an object indexed using letters
            .reduce((values, c) => {
                values[c] = (values[c] || 0) + 1;
                return values;
            }, Object.create(null))
            ;

    }

    private isLetter(value: string): boolean {
        return (value.length === 1) && /[a-zA-Z]/.test(value);
    }

}