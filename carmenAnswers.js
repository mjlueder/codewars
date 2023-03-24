// -- Example Query:
// -- SELECT * FROM city WHERE name = 'San Diego';


// -- Clue #1: We recently got word that someone fitting Carmen Sandiego's
// -- description has been traveling through Southern Europe. She's most
// -- likely traveling someplace where she won't be noticed, so find the least
// -- populated country in Southern Europe, and we'll start looking for her there.

// -- SELECT * FROM country WHERE region = 'Southern Europe' ORDER BY population ASC;

// -- SELECT MIN(population) FROM country WHERE region = 'Southern Europe' 

// --SELECT * FROM country WHERE population = (SELECT MIN(population) FROM country WHERE region = 'Southern Europe'); 

// -- Answer #1 country code: _VAT__


// -- Clue #2: Now that we're here, we have insight that Carmen was seen attending
// -- a geography class. Our gumshoes figured out that she's headed to the second
// -- smallest country in the world (by surface area). Once we arrive, we should 
// -- set up a meeting with the head of state and see if they know anything.
// -- Who is that? 

// -- SELECT * FROM country ORDER BY surfacearea ASC;
// -- Monaco, MCO
// -- SELECT * FROM country WHERE code = 'MCO'

// -- Answer #2 head of state: __Rainier III______


// -- Clue #3: After talking with the head of state, we found out that Carmen  
// -- wants to build a vacation home in a new country! She is headed to the only  
// -- country in the same region we're currently in that was established in the
// -- 1500's.

// --SELECT * FROM country WHERE region = 'Western Europe' AND indepyear BETWEEN 1500 AND 1599;

// -- Answer #3 country name: _Netherlands, NLD__


// -- Clue #4: While in this country she started to learn the least spoken
// -- language here. Oh no she's trying to pull a fast one! Carmen is headed to 
// -- an island country that starts with the same first four letters of that 
// -- language! She is trying to steal the crown of their current head of state
// -- Who is that?

// -- SELECT * FROM countrylanguage WHERE countrycode = 'NLD';
// -- SELECT * FROM country WHERE name LIKE 'Turk%';

// -- Answer #4 head of state: __Elisabeth II______


// -- Clue #5: Carmen is playing mind games with us. Apparently she is learning 
// -- JavaScript so she can manipulate the DOM. Turns out she really likes those  
// -- three letters. Is there a country in the same region we're in now that has
// -- those letters in it's name? She also left behind a piece of paper with
// -- 8495000 written on it! Where did she go?

// -- SELECT * FROM country WHERE region = 'Caribbean' AND name LIKE '%Dom%';

// -- Answer #5 country name: ___Dominican Republic______


// -- Clue #6: Carmen has brushed up on this country's main language. She's   
// -- headed to a country in a different region, but the same current continent
// -- where that language is spoken by 100% of the population. Where is she going?

// -- SELECT * FROM countrylanguage WHERE countrycode = 'DOM';
// -- SELECT * FROM country WHERE continent = 'North America' AND region != 'Caribbean';

// --SELECT * FROM country c JOIN countrylanguage cl ON c.code = cl.countrycode 
// --AND c.continent = 'North America' AND c.region != 'Caribbean' 
// --AND cl.language = 'Spanish' AND cl.percentage = 100

// -- SELECT * FROM countrylanguage WHERE countrycode = 'SLV';

// -- Answer #6 country name: ___El Salvador_______


// -- Clue #7:
// --          Our playdate of late has truly been fun,
// --          but now it's time I go to lay in the sun.
// --          I've left you all of the very best clues,
// --          while sampling all of the local shampoos.
// --          Take a look at the answers you've found,
// --          the first letter of each - jumbled around.
// --          That's where I'm headed. It's where I'll be free,
// --          Which is really nice, as I can't wait to ski.


// -- We're counting on you, gumshoe. Find out where she's headed, send us the
// -- info, and we'll be sure to meet her at the gates with bells on.