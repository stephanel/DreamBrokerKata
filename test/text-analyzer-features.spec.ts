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
            expect(actual.characterCount[0].e).toBe(2);
            expect(actual.characterCount[1].h).toBe(1);
            expect(actual.characterCount[2].i).toBe(1);
            expect(actual.characterCount[3].l).toBe(2);
            expect(actual.characterCount[4].m).toBe(1);
            expect(actual.characterCount[5].o).toBe(1);
            expect(actual.characterCount[6].s).toBe(1);
            expect(actual.characterCount[7].t).toBe(1);
        })
    
    })

});