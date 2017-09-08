import { Haiku } from './../js/haiku.js';

describe('Haiku', function(){

  it('should check if a letter is a vowel', function(){
    let haiku = new Haiku();
    expect(haiku.isVowel("m")).toEqual(false);
    expect(haiku.isVowel("e")).toEqual(true);
  });

  it('should correctly count number of vowels in a word based on syllable rules',function(){
    let haiku = new Haiku();
    expect(haiku.getNumberOfSyllablesInAWord("cat")).toEqual(1);
    expect(haiku.getNumberOfSyllablesInAWord("mate")).toEqual(1);
    expect(haiku.getNumberOfSyllablesInAWord("momma")).toEqual(2);
    expect(haiku.getNumberOfSyllablesInAWord("couch")).toEqual(1);
    expect(haiku.getNumberOfSyllablesInAWord("prepaid")).toEqual(2);
  });

  it('should correctly count number syllables with le ending',function(){
    let haiku = new Haiku();
    expect(haiku.getNumberOfSyllablesInAWord("little")).toEqual(2);
    expect(haiku.getNumberOfSyllablesInAWord("arlene")).toEqual(2);
    expect(haiku.getNumberOfSyllablesInAWord("sparkle")).toEqual(2);
  });


});
