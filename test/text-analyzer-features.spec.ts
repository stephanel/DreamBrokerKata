import { TextAnalyzer } from "../src/app/text-analyzer";

describe('TextAnalyzer', () => {

    describe('#analyzeText()', () => {

        const sut = new TextAnalyzer();

        it.each`
            inputText           | expected
            ${'hello 2 times  '}| ${{"textLength":{"withSpaces":15,"withoutSpaces":11},"wordCount":3,"characterCount":[{"e":2},{"h":1},{"i":1},{"l":2},{"m":1},{"o":1},{"s":1},{"t":1}]}}
            ${'aa bb cc kk ii gg kl 11 23 times  '}| ${{"textLength":{"withSpaces":34,"withoutSpaces":23},"wordCount":10,"characterCount":[{"a":2},{"b":2},{"c":2},{"e":1},{"g":2},{"i":3},{"k":3},{"l":1},{"m":1},{"s":1},{"t":1}]}}
        `('Should analyze input text', ({inputText, expected}) => {
                // Arrange
                const text = inputText;
                    
                // Act
                const actual = sut.analyzeText(text);

                // Assert
                expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
        });
    
    })

});