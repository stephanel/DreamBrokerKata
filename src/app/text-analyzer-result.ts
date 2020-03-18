export interface TextAnalyzerResult {
    textLength: TextLength;
    wordCount: number;
    characterCount: { [key: string]: number };
}

export interface TextLength {
    withSpaces: number;
    withoutSpaces: number;
}