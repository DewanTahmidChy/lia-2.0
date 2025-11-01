// ============================================
// LIA 2.0 - Adaptive Knowledge System
// ============================================
// This system learns from conversations and user behavior
// to provide personalized, context-aware responses
// ============================================

// ========================================
// ADAPTIVE KNOWLEDGE STORAGE
// ========================================
const ADAPTIVE_KNOWLEDGE = {
    // Learned Q&A pairs from conversations
    learned: {},
    
    // User preferences and behavior patterns
    userPreferences: {
        favoriteTopics: [],
        conversationStyle: 'balanced', // casual, formal, balanced
        responseLength: 'medium', // short, medium, long
        preferredPersonality: null, // Will be set based on usage
        timezone: null,
        language: 'en'
    },
    
    // Conversation context and history
    context: {
        recentTopics: [], // Last 10 topics discussed
        currentTopic: null,
        lastQuestionTime: null,
        conversationCount: 0
    },
    
    // Analytics and usage patterns
    analytics: {
        mostAskedQuestions: {},
        questionsByCategory: {},
        responseRatings: {},
        featureUsage: {},
        apiUsageStats: {
            gemini: 0,
            openai: 0,
            openrouter: 0,
            cohere: 0,
            offline: 0
        }
    },
    
    // User corrections and feedback
    corrections: {},
    
    // Custom commands and shortcuts
    customCommands: {},
    
    // Metadata
    metadata: {
        version: '2.0.0',
        lastUpdated: null,
        totalLearned: 0
    }
};

// ========================================
// LEARNING FUNCTIONS
// ========================================

/**
 * Add a new Q&A pair to adaptive knowledge
 * @param {string} question - The question
 * @param {string} answer - The answer
 * @param {string} source - Where this came from (user, api, correction)
 */
function learnNewQA(question, answer, source = 'conversation') {
    const normalized = question.toLowerCase().trim();
    
    // Don't overwrite existing knowledge unless it's a correction
    if (ADAPTIVE_KNOWLEDGE.learned[normalized] && source !== 'correction') {
        return false;
    }
    
    ADAPTIVE_KNOWLEDGE.learned[normalized] = {
        answer: answer,
        source: source,
        learnedAt: new Date().toISOString(),
        usageCount: 0,
        lastUsed: null,
        rating: null
    };
    
    ADAPTIVE_KNOWLEDGE.metadata.totalLearned++;
    ADAPTIVE_KNOWLEDGE.metadata.lastUpdated = new Date().toISOString();
    
    saveAdaptiveKnowledge();
    return true;
}

/**
 * Search adaptive knowledge for an answer
 * @param {string} question - User's question
 * @returns {Object|null} - Answer object if found, null otherwise
 */
function searchAdaptiveKnowledge(question) {
    const normalized = question.toLowerCase().trim();
    
    if (ADAPTIVE_KNOWLEDGE.learned[normalized]) {
        const qa = ADAPTIVE_KNOWLEDGE.learned[normalized];
        qa.usageCount++;
        qa.lastUsed = new Date().toISOString();
        saveAdaptiveKnowledge();
        return qa;
    }
    
    return null;
}

/**
 * Record a user correction
 * @param {string} question - Original question
 * @param {string} wrongAnswer - The incorrect answer given
 * @param {string} correctAnswer - User's correction
 */
function recordCorrection(question, wrongAnswer, correctAnswer) {
    const normalized = question.toLowerCase().trim();
    
    ADAPTIVE_KNOWLEDGE.corrections[normalized] = {
        wrongAnswer: wrongAnswer,
        correctAnswer: correctAnswer,
        correctedAt: new Date().toISOString()
    };
    
    // Learn the corrected version
    learnNewQA(question, correctAnswer, 'correction');
}

// ========================================
// USER PREFERENCE LEARNING
// ========================================

/**
 * Track user's personality mode preferences
 * @param {string} personality - The personality mode used
 */
function trackPersonalityUsage(personality) {
    if (!ADAPTIVE_KNOWLEDGE.analytics.featureUsage.personalities) {
        ADAPTIVE_KNOWLEDGE.analytics.featureUsage.personalities = {};
    }
    
    if (!ADAPTIVE_KNOWLEDGE.analytics.featureUsage.personalities[personality]) {
        ADAPTIVE_KNOWLEDGE.analytics.featureUsage.personalities[personality] = 0;
    }
    
    ADAPTIVE_KNOWLEDGE.analytics.featureUsage.personalities[personality]++;
    
    // Determine preferred personality (most used)
    const personalities = ADAPTIVE_KNOWLEDGE.analytics.featureUsage.personalities;
    const mostUsed = Object.keys(personalities).reduce((a, b) => 
        personalities[a] > personalities[b] ? a : b
    );
    
    ADAPTIVE_KNOWLEDGE.userPreferences.preferredPersonality = mostUsed;
    saveAdaptiveKnowledge();
}

/**
 * Learn user's preferred response style
 * @param {string} question - The question asked
 * @param {string} response - The response given
 */
function analyzeResponsePreference(question, response) {
    const wordCount = response.split(' ').length;
    
    // Classify response length
    let length;
    if (wordCount < 50) length = 'short';
    else if (wordCount < 150) length = 'medium';
    else length = 'long';
    
    // Track preferences
    if (!ADAPTIVE_KNOWLEDGE.userPreferences.responseLengthStats) {
        ADAPTIVE_KNOWLEDGE.userPreferences.responseLengthStats = {
            short: 0,
            medium: 0,
            long: 0
        };
    }
    
    ADAPTIVE_KNOWLEDGE.userPreferences.responseLengthStats[length]++;
    
    // Update preferred length (most common)
    const stats = ADAPTIVE_KNOWLEDGE.userPreferences.responseLengthStats;
    const preferred = Object.keys(stats).reduce((a, b) => 
        stats[a] > stats[b] ? a : b
    );
    
    ADAPTIVE_KNOWLEDGE.userPreferences.responseLength = preferred;
    saveAdaptiveKnowledge();
}

/**
 * Track topics user is interested in
 * @param {string} topic - Topic category (science, tech, history, etc.)
 */
function trackTopicInterest(topic) {
    if (!ADAPTIVE_KNOWLEDGE.userPreferences.favoriteTopics.includes(topic)) {
        ADAPTIVE_KNOWLEDGE.userPreferences.favoriteTopics.push(topic);
    }
    
    // Keep only top 10 topics
    if (ADAPTIVE_KNOWLEDGE.userPreferences.favoriteTopics.length > 10) {
        ADAPTIVE_KNOWLEDGE.userPreferences.favoriteTopics.shift();
    }
    
    saveAdaptiveKnowledge();
}

// ========================================
// CONTEXT MANAGEMENT
// ========================================

/**
 * Update conversation context
 * @param {string} topic - Current topic being discussed
 * @param {string} question - Latest question
 */
function updateContext(topic, question) {
    ADAPTIVE_KNOWLEDGE.context.currentTopic = topic;
    ADAPTIVE_KNOWLEDGE.context.lastQuestionTime = new Date().toISOString();
    
    // Add to recent topics (keep last 10)
    if (!ADAPTIVE_KNOWLEDGE.context.recentTopics.includes(topic)) {
        ADAPTIVE_KNOWLEDGE.context.recentTopics.push(topic);
        if (ADAPTIVE_KNOWLEDGE.context.recentTopics.length > 10) {
            ADAPTIVE_KNOWLEDGE.context.recentTopics.shift();
        }
    }
    
    saveAdaptiveKnowledge();
}

/**
 * Get contextual information for better responses
 * @returns {Object} - Current context
 */
function getContext() {
    return {
        currentTopic: ADAPTIVE_KNOWLEDGE.context.currentTopic,
        recentTopics: ADAPTIVE_KNOWLEDGE.context.recentTopics,
        conversationCount: ADAPTIVE_KNOWLEDGE.context.conversationCount,
        preferredPersonality: ADAPTIVE_KNOWLEDGE.userPreferences.preferredPersonality,
        favoriteTopics: ADAPTIVE_KNOWLEDGE.userPreferences.favoriteTopics
    };
}

// ========================================
// ANALYTICS & TRACKING
// ========================================

/**
 * Track question frequency
 * @param {string} question - The question asked
 */
function trackQuestionFrequency(question) {
    const normalized = question.toLowerCase().trim();
    
    if (!ADAPTIVE_KNOWLEDGE.analytics.mostAskedQuestions[normalized]) {
        ADAPTIVE_KNOWLEDGE.analytics.mostAskedQuestions[normalized] = 0;
    }
    
    ADAPTIVE_KNOWLEDGE.analytics.mostAskedQuestions[normalized]++;
    saveAdaptiveKnowledge();
}

/**
 * Track API usage for monitoring
 * @param {string} apiName - Name of API used (gemini, openai, etc.)
 */
function trackAPIUsage(apiName) {
    if (ADAPTIVE_KNOWLEDGE.analytics.apiUsageStats[apiName] !== undefined) {
        ADAPTIVE_KNOWLEDGE.analytics.apiUsageStats[apiName]++;
        saveAdaptiveKnowledge();
    }
}

/**
 * Get API usage statistics
 * @returns {Object} - API usage stats
 */
function getAPIUsageStats() {
    return ADAPTIVE_KNOWLEDGE.analytics.apiUsageStats;
}

/**
 * Get most asked questions
 * @param {number} limit - Number of questions to return
 * @returns {Array} - Top questions
 */
function getMostAskedQuestions(limit = 10) {
    const questions = ADAPTIVE_KNOWLEDGE.analytics.mostAskedQuestions;
    
    return Object.entries(questions)
        .sort((a, b) => b[1] - a[1])
        .slice(0, limit)
        .map(([question, count]) => ({ question, count }));
}

/**
 * Rate a response (for learning good vs bad answers)
 * @param {string} question - The question
 * @param {number} rating - Rating from 1-5
 */
function rateResponse(question, rating) {
    const normalized = question.toLowerCase().trim();
    
    ADAPTIVE_KNOWLEDGE.analytics.responseRatings[normalized] = {
        rating: rating,
        ratedAt: new Date().toISOString()
    };
    
    // If rating is high and answer exists in learned knowledge, boost it
    if (rating >= 4 && ADAPTIVE_KNOWLEDGE.learned[normalized]) {
        ADAPTIVE_KNOWLEDGE.learned[normalized].rating = rating;
    }
    
    saveAdaptiveKnowledge();
}

// ========================================
// CUSTOM COMMANDS
// ========================================

/**
 * Add a custom command shortcut
 * @param {string} command - Command trigger (e.g., "/weather")
 * @param {string} action - What the command does
 */
function addCustomCommand(command, action) {
    ADAPTIVE_KNOWLEDGE.customCommands[command] = {
        action: action,
        createdAt: new Date().toISOString(),
        usageCount: 0
    };
    
    saveAdaptiveKnowledge();
}

/**
 * Execute a custom command
 * @param {string} command - Command to execute
 * @returns {string|null} - Command action or null if not found
 */
function executeCustomCommand(command) {
    if (ADAPTIVE_KNOWLEDGE.customCommands[command]) {
        ADAPTIVE_KNOWLEDGE.customCommands[command].usageCount++;
        saveAdaptiveKnowledge();
        return ADAPTIVE_KNOWLEDGE.customCommands[command].action;
    }
    return null;
}

// ========================================
// PERSISTENCE (LocalStorage)
// ========================================

/**
 * Save adaptive knowledge to localStorage
 */
function saveAdaptiveKnowledge() {
    try {
        localStorage.setItem('lia_adaptive_knowledge', JSON.stringify(ADAPTIVE_KNOWLEDGE));
        return true;
    } catch (error) {
        console.error('Error saving adaptive knowledge:', error);
        return false;
    }
}

/**
 * Load adaptive knowledge from localStorage
 */
function loadAdaptiveKnowledge() {
    try {
        const stored = localStorage.getItem('lia_adaptive_knowledge');
        if (stored) {
            const loaded = JSON.parse(stored);
            
            // Merge loaded data with default structure
            Object.assign(ADAPTIVE_KNOWLEDGE, loaded);
            
            console.log(`✅ Loaded ${ADAPTIVE_KNOWLEDGE.metadata.totalLearned} learned Q&A pairs`);
            return true;
        }
    } catch (error) {
        console.error('Error loading adaptive knowledge:', error);
    }
    return false;
}

/**
 * Clear all adaptive knowledge (reset learning)
 */
function clearAdaptiveKnowledge() {
    const confirm = window.confirm('Are you sure you want to clear all learned knowledge? This cannot be undone.');
    
    if (confirm) {
        localStorage.removeItem('lia_adaptive_knowledge');
        
        // Reset to defaults
        ADAPTIVE_KNOWLEDGE.learned = {};
        ADAPTIVE_KNOWLEDGE.corrections = {};
        ADAPTIVE_KNOWLEDGE.customCommands = {};
        ADAPTIVE_KNOWLEDGE.metadata.totalLearned = 0;
        ADAPTIVE_KNOWLEDGE.metadata.lastUpdated = null;
        
        return true;
    }
    
    return false;
}

/**
 * Export adaptive knowledge as JSON
 * @returns {string} - JSON string of learned knowledge
 */
function exportAdaptiveKnowledge() {
    return JSON.stringify(ADAPTIVE_KNOWLEDGE, null, 2);
}

/**
 * Import adaptive knowledge from JSON
 * @param {string} jsonData - JSON string to import
 */
function importAdaptiveKnowledge(jsonData) {
    try {
        const imported = JSON.parse(jsonData);
        Object.assign(ADAPTIVE_KNOWLEDGE, imported);
        saveAdaptiveKnowledge();
        return true;
    } catch (error) {
        console.error('Error importing adaptive knowledge:', error);
        return false;
    }
}

// ========================================
// STATISTICS & INSIGHTS
// ========================================

/**
 * Get comprehensive learning statistics
 * @returns {Object} - Learning stats and insights
 */
function getLearningStats() {
    return {
        totalLearned: ADAPTIVE_KNOWLEDGE.metadata.totalLearned,
        totalCorrections: Object.keys(ADAPTIVE_KNOWLEDGE.corrections).length,
        customCommands: Object.keys(ADAPTIVE_KNOWLEDGE.customCommands).length,
        conversationCount: ADAPTIVE_KNOWLEDGE.context.conversationCount,
        favoriteTopics: ADAPTIVE_KNOWLEDGE.userPreferences.favoriteTopics,
        preferredPersonality: ADAPTIVE_KNOWLEDGE.userPreferences.preferredPersonality,
        preferredResponseLength: ADAPTIVE_KNOWLEDGE.userPreferences.responseLength,
        topQuestions: getMostAskedQuestions(5),
        apiUsage: ADAPTIVE_KNOWLEDGE.analytics.apiUsageStats,
        lastUpdated: ADAPTIVE_KNOWLEDGE.metadata.lastUpdated
    };
}

/**
 * Generate a learning report for user
 * @returns {string} - Human-readable report
 */
function generateLearningReport() {
    const stats = getLearningStats();
    
    return `
📊 LIA Learning Report
━━━━━━━━━━━━━━━━━━━━
📚 Total Knowledge Learned: ${stats.totalLearned} Q&A pairs
✏️ Corrections Made: ${stats.totalCorrections}
⚡ Custom Commands: ${stats.customCommands}
💬 Conversations: ${stats.conversationCount}

🎭 Your Preferences:
   • Favorite Personality: ${stats.preferredPersonality || 'Not determined yet'}
   • Response Length: ${stats.preferredResponseLength}
   • Favorite Topics: ${stats.favoriteTopics.join(', ') || 'Learning your interests...'}

🔝 Most Asked Questions:
${stats.topQuestions.map((q, i) => `   ${i + 1}. ${q.question} (${q.count}x)`).join('\n')}

🤖 API Usage:
   • Gemini: ${stats.apiUsage.gemini}
   • OpenAI: ${stats.apiUsage.openai}
   • OpenRouter: ${stats.apiUsage.openrouter}
   • Cohere: ${stats.apiUsage.cohere}
   • Offline: ${stats.apiUsage.offline}

📅 Last Updated: ${stats.lastUpdated ? new Date(stats.lastUpdated).toLocaleString() : 'Never'}
    `.trim();
}

// ========================================
// INITIALIZATION
// ========================================

/**
 * Initialize adaptive knowledge system
 */
function initializeAdaptiveKnowledge() {
    // Try to load from localStorage
    const loaded = loadAdaptiveKnowledge();
    
    if (!loaded) {
        console.log('🆕 Initializing new adaptive knowledge system');
        saveAdaptiveKnowledge();
    }
    
    // Set up auto-save interval (every 30 seconds)
    setInterval(() => {
        saveAdaptiveKnowledge();
    }, 30000);
    
    console.log('✅ Adaptive knowledge system initialized');
}

// ========================================
// EXPORT FOR GLOBAL ACCESS
// ========================================
if (typeof window !== 'undefined') {
    window.ADAPTIVE_KNOWLEDGE = ADAPTIVE_KNOWLEDGE;
    window.learnNewQA = learnNewQA;
    window.searchAdaptiveKnowledge = searchAdaptiveKnowledge;
    window.recordCorrection = recordCorrection;
    window.trackPersonalityUsage = trackPersonalityUsage;
    window.analyzeResponsePreference = analyzeResponsePreference;
    window.trackTopicInterest = trackTopicInterest;
    window.updateContext = updateContext;
    window.getContext = getContext;
    window.trackQuestionFrequency = trackQuestionFrequency;
    window.trackAPIUsage = trackAPIUsage;
    window.getAPIUsageStats = getAPIUsageStats;
    window.getMostAskedQuestions = getMostAskedQuestions;
    window.rateResponse = rateResponse;
    window.addCustomCommand = addCustomCommand;
    window.executeCustomCommand = executeCustomCommand;
    window.saveAdaptiveKnowledge = saveAdaptiveKnowledge;
    window.loadAdaptiveKnowledge = loadAdaptiveKnowledge;
    window.clearAdaptiveKnowledge = clearAdaptiveKnowledge;
    window.exportAdaptiveKnowledge = exportAdaptiveKnowledge;
    window.importAdaptiveKnowledge = importAdaptiveKnowledge;
    window.getLearningStats = getLearningStats;
    window.generateLearningReport = generateLearningReport;
    window.initializeAdaptiveKnowledge = initializeAdaptiveKnowledge;
    
    // Auto-initialize on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeAdaptiveKnowledge);
    } else {
        initializeAdaptiveKnowledge();
    }
}