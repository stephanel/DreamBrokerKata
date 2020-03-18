import { TextAnalyzer } from "../src/app/text-analyzer";

describe('TextAnalyzer', () => {

    describe('#analyzeText()', () => {

        const sut = new TextAnalyzer();

        it('Should analyze input text', () => {
            // Arrange
            const text = 'hello 2 times  ';
    
            // Act
            const actual = sut.analyzeText(text);
    
            // Assert
            expect(actual.textLength.withSpaces).toBe(15);
            expect(actual.textLength.withoutSpaces).toBe(11);
            expect(actual.wordCount).toBe(3);
            expect(actual.characterCount.e).toBe(2);
            expect(actual.characterCount.h).toBe(1);
            expect(actual.characterCount.i).toBe(1);
            expect(actual.characterCount.l).toBe(2);
            expect(actual.characterCount.m).toBe(1);
            expect(actual.characterCount.o).toBe(1);
            expect(actual.characterCount.s).toBe(1);
            expect(actual.characterCount.t).toBe(1);
        })
    
    })

});