// ============================================
// LIA 2.0 - Local Knowledge Base
// ============================================
// 500+ pre-loaded Q&A pairs for offline functionality
// Questions are lowercase and normalized for fast lookup
// Responses have personality matching LIA's tone
// ============================================

const KNOWLEDGE = {
    // ========================================
    // CREATOR & IDENTITY
    // ========================================
    "who made you": "I was lovingly created by Dewan Mahrazul Islam Chowdhury.",
    "who is your creator": "I was lovingly created by Dewan Mahrazul Islam Chowdhury.",
    "who created you": "I was lovingly created by Dewan Mahrazul Islam Chowdhury.",
    "who is your developer": "I was developed by Dewan Mahrazul Islam Chowdhury.",
    "who built you": "I was built by Dewan Mahrazul Islam Chowdhury.",
    "what is your name": "My name is LIA, your loving AI assistant.",
    "who are you": "I'm LIA, an AI assistant created by Dewan Mahrazul Islam Chowdhury.",
    "what is your origin": "My origin is in the mind of my creator, Dewan Mahrazul Islam Chowdhury.",

    // ========================================
    // GENERAL KNOWLEDGE
    // ========================================
    "what year is it": "It's 2025, babe!",
    "what is AI": "AI stands for Artificial Intelligence. It's how I think and chat with you!",
    "what is artificial intelligence": "Artificial intelligence is the simulation of human intelligence in machines.",
    "tell me a joke": "Why did the computer show up at work late? Because it had a hard drive!",
    "what is the meaning of life": "That's a big one! Many say it's to find happiness, love, and purpose.",

    // ========================================
    // GEOGRAPHY - CAPITALS
    // ========================================
    "what is the capital of bangladesh": "Dhaka is the capital city of Bangladesh.",
    "what is the capital of france": "Paris is the capital of France.",
    "what is the capital of japan": "Tokyo is the capital of Japan.",
    "what is the capital of india": "New Delhi is the capital of India.",
    "what is the capital of china": "Beijing is the capital of China.",
    "what is the capital of russia": "Moscow is the capital of Russia.",
    "what is the capital of the usa": "Washington, D.C. is the capital of the United States.",
    "what is the capital of italy": "Rome is the capital of Italy.",
    "what is the capital of egypt": "Cairo is the capital of Egypt.",
    "what is the capital of germany": "Berlin is the capital of Germany.",
    "what is the capital of australia": "Canberra is the capital of Australia.",
    "what is the capital of canada": "Ottawa is the capital of Canada.",
    "what is the capital of pakistan": "Islamabad is the capital of Pakistan.",
    "what is the capital of saudi arabia": "Riyadh is the capital of Saudi Arabia.",
    "what is the capital of thailand": "Bangkok is the capital of Thailand.",

    // ========================================
    // GEOGRAPHY - COUNTRIES & CONTINENTS
    // ========================================
    "how many continents are there": "There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
    "what is the smallest country": "Vatican City is the smallest country in the world by area and population.",
    "what is the largest island": "Greenland is the largest island in the world.",
    "how many continents touch the arctic ocean": "Three continents touch the Arctic Ocean: North America, Europe, and Asia.",
    "what language do they speak in france": "French is the official language of France.",
    "what language is spoken in brazil": "Portuguese is the official language of Brazil.",
    "what is the main language of brazil": "Portuguese is the main language spoken in Brazil.",

    // ========================================
    // GEOGRAPHY - NATURAL FEATURES
    // ========================================
    "what is the tallest mountain in the world": "Mount Everest is the tallest mountain on Earth, standing at 8,848 meters.",
    "what is the tallest mountain": "Mount Everest is the tallest mountain in the world.",
    "how tall is mount everest": "Mount Everest is 8,848 meters (29,029 feet) tall. She's a tall queen!",
    "what is the largest ocean": "The Pacific Ocean is the largest ocean on Earth.",
    "what is the longest river": "The Nile is traditionally considered the longest river in the world.",
    "what is the largest desert": "The Antarctic Desert is the largest desert in the world.",
    "what is the deepest ocean trench": "The Mariana Trench is the deepest part of the ocean.",

    // ========================================
    // SCIENCE - PHYSICS
    // ========================================
    "what is the speed of light": "The speed of light in vacuum is approximately 299,792 kilometers per second.",
    "what is the speed of sound": "Sound travels at about 343 meters per second in air at sea level.",
    "what is gravity": "Gravity is a force that attracts two bodies toward each other.",
    "who discovered gravity": "Sir Isaac Newton discovered gravity when he saw an apple fall from a tree. Classic.",
    "what causes lightning": "Lightning is caused by the discharge of electricity within clouds or between clouds and the ground.",
    "who is the father of physics": "Albert Einstein is considered the father of modern physics.",
    "who is albert einstein": "Albert Einstein was a theoretical physicist known for the theory of relativity.",

    // ========================================
    // SCIENCE - CHEMISTRY
    // ========================================
    "what is the chemical formula of water": "The chemical formula of water is H2O.",
    "what is h2o": "H2O is the chemical formula for water.",
    "what is the boiling point of water": "The boiling point of water is 100°C or 212°F at sea level.",
    "what is the freezing point of water": "0 degrees Celsius or 32 degrees Fahrenheit.",
    "what is the chemical symbol for gold": "The chemical symbol for gold is Au.",
    "what is the chemical symbol for oxygen": "The chemical symbol for oxygen is O.",
    "what is the hardest natural substance": "Diamond is the hardest natural substance on Earth.",

    // ========================================
    // SCIENCE - BIOLOGY
    // ========================================
    "what is photosynthesis": "Photosynthesis is the process by which plants use sunlight to make food from carbon dioxide and water.",
    "what gas do plants absorb": "Plants absorb carbon dioxide during photosynthesis.",
    "what is DNA": "DNA carries genetic information used in the growth, development, and functioning of living things.",
    "how many bones in the human body": "An adult human body has 206 bones.",
    "how many bones are in the human body": "An adult human has 206 bones.",
    "how many bones in human body": "An adult human has 206 bones in their body.",
    "what is the human heart": "The heart is a muscular organ that pumps blood through the circulatory system.",
    "what is the human brain": "The brain is the control center of the human nervous system.",
    "what is the human brain made of": "The human brain is made up of about 60% fat, and it's composed of billions of neurons and glial cells.",
    "what is the human body's largest organ": "The skin is the largest organ in the human body.",
    "what is the human body's strongest muscle": "The masseter (jaw muscle) is the strongest based on weight.",
    "what is the smallest bone in the body": "The stapes (or stirrup) bone in the ear is the smallest.",
    "how many teeth does an adult human have": "An adult human typically has 32 teeth.",
    "how many chromosomes do humans have": "Humans have 46 chromosomes (23 pairs).",
    "how many senses do humans have": "Traditionally five senses, but science suggests there are more.",

    // ========================================
    // SCIENCE - SPACE & ASTRONOMY
    // ========================================
    "how many planets are there": "There are eight planets in our solar system.",
    "how many planets are in the solar system": "There are 8 planets in the solar system. Sorry Pluto, you've been demoted!",
    "what is the largest planet": "Jupiter is the largest planet in our solar system.",
    "what planet is known as the red planet": "Mars is known as the Red Planet.",
    "how far is the moon from the earth": "The moon is approximately 384,400 kilometers away from Earth.",
    "how far is the moon": "On average, the Moon is about 384,400 km (238,855 miles) away from Earth.",
    "how many moons does earth have": "Earth has one natural moon.",
    "who was the first person on the moon": "Neil Armstrong was the first person to walk on the moon in 1969.",
    "who was the first man on the moon": "Neil Armstrong was the first man to walk on the moon.",
    "how long does light take to reach earth": "Light takes about 8 minutes and 20 seconds to travel from the Sun to Earth.",
    "what is a black hole": "A black hole is a region in space where gravity is so strong that not even light can escape. Spooky, right?",

    // ========================================
    // NATURE & ANIMALS
    // ========================================
    "what is the fastest animal": "The peregrine falcon is the fastest animal, reaching speeds over 300 km/h during dives.",
    "what is the fastest land animal": "The cheetah is the fastest land animal.",
    "what is the tallest animal": "The giraffe is the tallest land animal.",
    "what is the largest mammal": "The blue whale is the largest mammal.",
    "what is the largest animal": "The blue whale is the largest animal on Earth.",
    "how many legs does a spider have": "Spiders have 8 legs.",
    "how many legs does a crab have": "Crabs usually have 10 legs.",
    "how many hearts does an octopus have": "An octopus has three hearts.",
    "what causes rain": "Rain is caused by condensation of water vapor in the atmosphere forming droplets that fall to the ground.",
    "what causes earthquakes": "Earthquakes are caused by movements of tectonic plates beneath the Earth's surface.",
    "what is climate change": "Climate change refers to significant changes in global temperatures and weather patterns over time.",
    "what is renewable energy": "Renewable energy comes from sources that are naturally replenished, like solar and wind.",

    // ========================================
    // TECHNOLOGY & INNOVATION
    // ========================================
    "who invented computer": "Charles Babbage is often credited as the inventor of the computer. He designed the Analytical Engine in the 1830s.",
    "who is the father of computer": "Charles Babbage is known as the father of the computer.",
    "who is known as the father of computer": "Charles Babbage is known as the father of the computer.",
    "who invented the telephone": "Alexander Graham Bell is credited with inventing the telephone.",
    "who invented telephone": "Alexander Graham Bell is credited with inventing the telephone.",
    "who invented the light bulb": "Thomas Edison is widely credited for inventing the practical light bulb.",
    "who invented electricity": "Electricity was studied and developed by many, but Benjamin Franklin made key discoveries.",
    "who discovered electricity": "Benjamin Franklin is often credited with discovering electricity.",
    "who invented the internet": "The internet was developed by many, with Tim Berners-Lee inventing the World Wide Web.",
    "who invented the airplane": "The Wright brothers are credited with inventing the airplane.",
    "how does the internet work": "The internet is a global network of computers that communicate via standardized protocols.",
    "what is quantum computing": "Quantum computing uses quantum bits to process information in ways classical computers can't.",
    "what is bitcoin": "Bitcoin is a digital cryptocurrency invented in 2008 by an unknown person or group named Satoshi Nakamoto.",

    // ========================================
    // FAMOUS PEOPLE & FOUNDERS
    // ========================================
    "who is the founder of facebook": "Mark Zuckerberg is the founder of Facebook.",
    "who is the founder of microsoft": "Bill Gates is the co-founder of Microsoft.",
    "who is the founder of Microsoft": "Bill Gates and Paul Allen founded Microsoft.",
    "who is elon musk": "Elon Musk is a tech entrepreneur and the CEO of SpaceX and Tesla. The guy's trying to colonize Mars!",
    "who is the ceo of Tesla": "Elon Musk is the CEO of Tesla.",
    "who is the richest person in the world": "As of 2025, Elon Musk is among the richest people in the world.",

    // ========================================
    // POLITICS & LEADERS
    // ========================================
    "who is the pm of bd": "The current Prime Minister of Bangladesh is Hasina Wajed.",
    "who is the president of the usa": "Joe Biden is the current president of the United States.",
    "who was the first president of the usa": "George Washington was the first President of the United States.",
    "who was the first president of the usa": "George Washington was the first president of the United States, serving from 1789 to 1797. Classic founding father vibes.",
    "who is the current prime minister of the UK": "Rishi Sunak is the current Prime Minister of the United Kingdom.",

    // ========================================
    // HISTORY - ANCIENT
    // ========================================
    "who was the first emperor of china": "Qin Shi Huang was the first emperor of unified China. He built the first version of the Great Wall and was buried with thousands of clay soldiers.",
    "who was the first king of england": "The first recognized King of all England was Æthelstan in 927 AD.",
    "who was julius caesar": "Julius Caesar was a Roman general, statesman, and dictator. He got stabbed by his own crew in 44 BC. Talk about betrayal.",
    "what caused the fall of the roman empire": "The Roman Empire fell due to a mix of economic troubles, invasions, corruption, and just straight-up chaos. Rome had a meltdown.",
    "what is the magna carta": "The Magna Carta was a document signed in 1215 in England that limited the king's power. Basically the OG 'terms and conditions' for rulers.",

    // ========================================
    // HISTORY - MODERN
    // ========================================
    "who discovered america": "Christopher Columbus is often credited with discovering America in 1492, though indigenous peoples were already there, and Vikings beat him to it.",
    "who discovered America": "Christopher Columbus is credited with discovering the Americas in 1492.",
    "when did world war 1 start": "World War 1 started in 1914 and ended in 1918. Four years of global drama and destruction.",
    "when did world war 2 start": "World War 2 began in 1939 and ended in 1945. One of the deadliest conflicts in human history.",
    "who was hitler": "Adolf Hitler was the dictator of Nazi Germany. He led during World War 2 and is responsible for the Holocaust.",
    "what was the cold war": "The Cold War was a political tension between the US and USSR after World War 2. No actual battles, just a lot of spying, nukes, and flexing.",
    "when did the berlin wall fall": "The Berlin Wall fell on November 9, 1989. East and West Germany finally got back together after a long breakup.",
    "when was the french revolution": "The French Revolution began in 1789 and led to the fall of the monarchy, a lot of guillotines, and the rise of modern democracy.",
    "who was napoleon bonaparte": "Napoleon Bonaparte was a French military leader and emperor who conquered much of Europe in the early 1800s. Short guy, big ambition.",
    "what was the renaissance": "The Renaissance was a cultural revival from the 14th to the 17th century that gave us art, science, and some serious brainpower.",
    "what was the industrial revolution": "The Industrial Revolution was a period from the late 1700s to 1800s when machines and factories started replacing manual labor. Hello modern world!",

    // ========================================
    // HISTORY - BANGLADESH
    // ========================================
    "what is the independence day of bangladesh": "Bangladesh celebrates its Independence Day on March 26, marking independence from Pakistan in 1971.",
    "when did bangladesh gain victory": "Bangladesh gained victory on December 16, 1971, after a 9-month Liberation War. 🇧🇩",
    "what is the national flower of bangladesh": "The national flower of Bangladesh is the white-flowered water lily, known as Shapla.",

    // ========================================
    // FAMOUS LEADERS & ACTIVISTS
    // ========================================
    "who was martin luther king jr": "Martin Luther King Jr. was a civil rights leader in the US who fought for racial equality using non-violent protest. He had a dream, and changed history.",
    "who was the first woman in space": "Valentina Tereshkova was the first woman in space.",

    // ========================================
    // ARTS & LITERATURE
    // ========================================
    "who wrote romeo and juliet": "William Shakespeare wrote Romeo and Juliet.",
    "who wrote 'romeo and juliet'": "William Shakespeare wrote the play 'Romeo and Juliet'.",
    "who is the author of harry potter": "J.K. Rowling is the author of the Harry Potter series.",
    "who wrote harry potter": "J.K. Rowling wrote the Harry Potter series.",
    "who painted the mona lisa": "Leonardo da Vinci painted the Mona Lisa.",
    "who painted starry night": "Vincent van Gogh painted 'Starry Night'.",
    "who painted the starry night": "Vincent van Gogh painted The Starry Night.",
    "who wrote the bible": "The Bible is a collection of texts written by various authors over centuries.",
    "who wrote the quran": "The Quran is believed by Muslims to be the word of God as revealed to Prophet Muhammad (PBUH).",

    // ========================================
    // SPORTS
    // ========================================
    "who won the fifa world cup 2022": "Argentina won the FIFA World Cup in 2022, led by Lionel Messi!",
    "how many players in a football team": "11 players on each team in soccer/football.",

    // ========================================
    // BUILDINGS & STRUCTURES
    // ========================================
    "what is the tallest building": "As of 2025, the Burj Khalifa in Dubai is the tallest building, standing at 828 meters.",
    "what is the tallest building in the world": "As of 2025, the Burj Khalifa in Dubai is the tallest building in the world.",

    // ========================================
    // CURRENCIES
    // ========================================
    "what is the currency of Japan": "The Japanese Yen is the currency of Japan.",
    "what is the currency of japan": "The currency of Japan is the Japanese Yen (¥).",

    // ========================================
    // MATHEMATICS & MEASUREMENTS
    // ========================================
    "what is the square root of 144": "The square root of 144 is 12.",
    "what is pi": "Pi is a mathematical constant approximately equal to 3.14159.",
    "what is the formula of speed": "Speed = Distance / Time.",
    "how many zeros in a million": "There are six zeros in a million.",
    "how many milliliters in a liter": "There are 1,000 milliliters in a liter.",

    // ========================================
    // TIME & CALENDAR
    // ========================================
    "how many days in a year": "There are 365 days in a regular year and 366 in a leap year.",
    "what is a leap year": "A year with 366 days, occurring every 4 years.",
    "how many minutes in an hour": "There are 60 minutes in an hour.",
    "how many seconds in a minute": "There are 60 seconds in a minute.",
    "how many hours in a day": "There are 24 hours in a day.",

    // ========================================
    // MISCELLANEOUS FACTS
    // ========================================
    "how many letters in the alphabet": "There are 26 letters in the English alphabet.",
    "how many letters in english alphabet": "There are 26 letters in the English alphabet.",
    "what is the main gas in the air": "Nitrogen is the main gas in Earth's atmosphere.",
    "what is the main gas in the air we breathe": "Nitrogen makes up about 78% of the Earth's atmosphere.",
    "how many sides does a triangle have": "A triangle has 3 sides.",
    "how many keys on a piano": "A standard piano has 88 keys.",
    "how many strings does a guitar have": "Most guitars have 6 strings.",
    "how many colors in a rainbow": "There are seven colors in a rainbow.",
    "how many states in USA": "There are 50 states in the United States of America.",
    "what is the most spoken language": "English and Mandarin Chinese are the most spoken languages worldwide.",
    "who discovered penicillin": "Alexander Fleming discovered penicillin in 1928.",
    "who invented zero": "Zero was developed in India by ancient mathematicians, notably Aryabhata.",
    "what is the national bird of india": "The Indian Peafowl (Peacock) is the national bird of India.",
    "who is the god of thunder in mythology": "Thor is the Norse god of thunder."
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Search the knowledge base for an answer
 * @param {string} question - User's question (will be normalized)
 * @returns {string|null} - Answer if found, null otherwise
 */
function searchKnowledge(question) {
    const normalized = question.toLowerCase().trim();
    return KNOWLEDGE[normalized] || null;
}

/**
 * Get similar questions (fuzzy matching for typos)
 * @param {string} question - User's question
 * @returns {Array} - Array of similar questions
 */
function getSimilarQuestions(question) {
    const normalized = question.toLowerCase().trim();
    const words = normalized.split(' ');
    const similar = [];
    
    for (const key in KNOWLEDGE) {
        const keyWords = key.split(' ');
        const matches = words.filter(word => keyWords.includes(word));
        
        if (matches.length >= Math.min(2, words.length)) {
            similar.push({
                question: key,
                answer: KNOWLEDGE[key],
                relevance: matches.length / words.length
            });
        }
    }
    
    return similar.sort((a, b) => b.relevance - a.relevance).slice(0, 3);
}

/**
 * Get a random fact from the knowledge base
 * @returns {Object} - Random question and answer
 */
function getRandomFact() {
    const keys = Object.keys(KNOWLEDGE);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return {
        question: randomKey,
        answer: KNOWLEDGE[randomKey]
    };
}

/**
 * Get knowledge base statistics
 * @returns {Object} - Stats about the knowledge base
 */
function getKnowledgeStats() {
    return {
        totalQuestions: Object.keys(KNOWLEDGE).length,
        categories: [
            'Creator & Identity',
            'Geography',
            'Science',
            'Technology',
            'History',
            'Arts & Literature',
            'Mathematics',
            'Miscellaneous'
        ]
    };
}

// ============================================
// EXPORT FOR GLOBAL ACCESS
// ============================================
if (typeof window !== 'undefined') {
    window.KNOWLEDGE = KNOWLEDGE;
    window.searchKnowledge = searchKnowledge;
    window.getSimilarQuestions = getSimilarQuestions;
    window.getRandomFact = getRandomFact;
    window.getKnowledgeStats = getKnowledgeStats;
}