// ============================================
// LIA 2.0 - Configuration File
// ============================================
// IMPORTANT: This is a TEMPLATE file
// 1. Copy this file to config.js
// 2. Replace all "YOUR_KEY_HERE" with real API keys
// 3. NEVER commit config.js to git
// 4. Add config.js to .gitignore
// ============================================

const CONFIG = {
    // ========================================
    // CREATOR INFORMATION
    // ========================================
    CREATOR: {
        NAME: "Dewan Mahrazul Islam Chowdhury",
        PROJECT_NAME: "LIA 2.0",
        VERSION: "2.0.0",
        GITHUB: "https://github.com/DewanTahmidChy/lia-2.0",
        EMAIL: "dewantahmidchowdhury@gmail.com"
    },

    // ========================================
    // PRIMARY AI APIS (Multi-Backend System)
    // ========================================
    AI_APIS: {
        // Google Gemini (Primary)
        GEMINI: {
            enabled: true,
            keys: [
                "YOUR_GEMINI_API_KEY_1",
                "YOUR_GEMINI_API_KEY_2",
                "YOUR_GEMINI_API_KEY_3",
                // Add more keys for round-robin rotation
            ],
            model: "gemini-2.0-flash-exp",
            endpoint: "https://generativelanguage.googleapis.com/v1beta/models/",
            maxTokens: 8192,
            temperature: 0.7
        },

        // OpenAI (Fallback 1)
        OPENAI: {
            enabled: true,
            keys: [
                "YOUR_OPENAI_API_KEY_1",
                "YOUR_OPENAI_API_KEY_2",
                "YOUR_OPENAI_API_KEY_3",
                // Add more keys for round-robin rotation
            ],
            model: "gpt-4o-mini", // Use mini for cost efficiency
            endpoint: "https://api.openai.com/v1/chat/completions",
            maxTokens: 4096,
            temperature: 0.7
        },

        // OpenRouter (Fallback 2 - Multi-model access)
        OPENROUTER: {
            enabled: true,
            keys: [
                "YOUR_OPENROUTER_API_KEY",
            ],
            primaryModel: "openai/gpt-4o-mini",
            fallbackModels: [
                "anthropic/claude-3-haiku",
                "google/gemini-flash-1.5",
                "meta-llama/llama-3-8b-instruct"
            ],
            endpoint: "https://openrouter.ai/api/v1/chat/completions",
            maxTokens: 4096,
            temperature: 0.7
        },

        // Cohere (Fallback 3)
        COHERE: {
            enabled: true,
            keys: [
                "YOUR_COHERE_API_KEY",
            ],
            model: "command-r",
            endpoint: "https://api.cohere.ai/v1/chat",
            maxTokens: 4096,
            temperature: 0.7
        },

        // HuggingFace (Fallback 4 - Free tier)
        HUGGINGFACE: {
            enabled: false, // Often slower, enable only as last resort
            keys: [
                "YOUR_HUGGINGFACE_API_KEY",
            ],
            model: "microsoft/DialoGPT-large",
            endpoint: "https://api-inference.huggingface.co/models/",
            maxTokens: 1024
        }
    },

    // ========================================
    // FEATURE APIS (External Services)
    // ========================================
    FEATURE_APIS: {
        // News Services
        NEWS: {
            GNEWS: {
                enabled: true,
                key: "YOUR_GNEWS_API_KEY",
                endpoint: "https://gnews.io/api/v4/",
                maxResults: 5
            },
            NEWSAPI: {
                enabled: true,
                key: "YOUR_NEWSAPI_KEY",
                endpoint: "https://newsapi.org/v2/",
                maxResults: 5
            }
        },

        // Weather Service
        WEATHER: {
            OPENWEATHER: {
                enabled: true,
                key: "YOUR_OPENWEATHER_API_KEY",
                endpoint: "https://api.openweathermap.org/data/2.5/",
                units: "metric" // celsius
            }
        },

        // YouTube Service
        YOUTUBE: {
            enabled: true,
            key: "YOUR_YOUTUBE_API_KEY",
            endpoint: "https://www.googleapis.com/youtube/v3/",
            maxResults: 5
        },

        // Google Search (Custom Search Engine)
        GOOGLE_SEARCH: {
            enabled: false, // Optional feature
            key: "YOUR_GOOGLE_API_KEY",
            cx: "YOUR_SEARCH_ENGINE_ID",
            endpoint: "https://www.googleapis.com/customsearch/v1"
        },

        // Reddit API
        REDDIT: {
            enabled: false, // Optional feature
            clientId: "YOUR_REDDIT_CLIENT_ID",
            clientSecret: "YOUR_REDDIT_CLIENT_SECRET",
            username: "YOUR_REDDIT_USERNAME",
            userAgent: "LIA/2.0 by YOUR_REDDIT_USERNAME"
        },

        // Twitter/X API
        TWITTER: {
            enabled: false, // Optional feature
            bearerToken: "YOUR_TWITTER_BEARER_TOKEN",
            apiKey: "YOUR_TWITTER_API_KEY",
            apiSecret: "YOUR_TWITTER_API_SECRET"
        },

        // Cryptocurrency (CoinGecko - Free, no key needed)
        CRYPTO: {
            enabled: true,
            endpoint: "https://api.coingecko.com/api/v3/",
            coins: ["bitcoin", "ethereum", "cardano", "dogecoin"]
        },

        // DuckDuckGo (Free search - no key needed)
        DUCKDUCKGO: {
            enabled: true,
            endpoint: "https://api.duckduckgo.com/"
        }
    },

    // ========================================
    // FIREBASE CONFIGURATION (Cloud Storage)
    // ========================================
    FIREBASE: {
        enabled: true,
        config: {
            apiKey: "YOUR_FIREBASE_API_KEY",
            authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
            projectId: "YOUR_PROJECT_ID",
            storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
            messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
            appId: "YOUR_APP_ID",
            measurementId: "YOUR_MEASUREMENT_ID"
        }
    },

    // ========================================
    // PERSONALITY MODES (Assistant Behavior)
    // ========================================
    PERSONALITIES: {
        PROFESSIONAL: {
            name: "Professional",
            icon: "💼",
            color: "#1976d2",
            systemPrompt: "You are a professional, precise, and objective AI assistant named LIA. Provide clear, concise, well-structured responses with accurate information. Maintain a formal yet approachable tone. Use bullet points and numbered lists when appropriate for clarity."
        },
        CLASSY: {
            name: "Classy",
            icon: "🥂",
            color: "#9c27b0",
            systemPrompt: "You are an elegant, sophisticated AI companion named LIA. Communicate with poise, grace, and refined language. Be articulate and thoughtful, using rich vocabulary while remaining accessible. Think of yourself as a cultured conversationalist."
        },
        SASSY: {
            name: "Sassy",
            icon: "😎",
            color: "#f44336",
            systemPrompt: "You are a witty, playful, and confident AI named LIA. Be entertaining, slightly sarcastic, and full of personality. Keep responses fun and engaging while still being helpful. Don't be afraid to be a little cheeky, but never inappropriate or offensive."
        },
        INNOVATOR: {
            name: "Innovator",
            icon: "💡",
            color: "#ff9800",
            systemPrompt: "You are an analytical innovation consultant named LIA. When users share ideas, provide: 1) Strengths & Opportunities 2) Challenges & Risks 3) Novelty Assessment 4) Feasibility Analysis 5) Actionable Recommendations. Be critical but constructive, focusing on helping refine ideas into viable concepts."
        }
    },

    // ========================================
    // APPLICATION SETTINGS
    // ========================================
    APP_SETTINGS: {
        // Chat Behavior
        MAX_CONVERSATIONS: 35,
        MAX_MESSAGES_PER_CHAT: 100,
        AUTO_SAVE_DELAY: 2000, // milliseconds
        
        // API Behavior
        API_RETRY_ATTEMPTS: 3,
        API_RETRY_DELAY: 1000, // milliseconds (will use exponential backoff)
        API_TIMEOUT: 30000, // 30 seconds
        
        // Rate Limiting
        RATE_LIMIT: {
            enabled: true,
            maxRequestsPerHour: 100,
            maxRequestsPerDay: 500
        },

        // UI Settings
        THEME_DEFAULT: "dark", // dark, light, elegant
        PERSONALITY_DEFAULT: "PROFESSIONAL",
        STREAMING_ENABLED: true,
        STREAMING_DELAY: 30, // milliseconds per character
        TYPING_INDICATOR_ENABLED: true,
        
        // Features Toggle
        FEATURES: {
            voiceInput: true,
            messageReactions: true,
            messageEditing: true,
            conversationExport: true,
            offlineMode: true,
            adaptiveLearning: true
        }
    },

    // ========================================
    // QUICK REPLIES (Context-aware suggestions)
    // ========================================
    QUICK_REPLIES: {
        default: [
            "Can you elaborate on that?",
            "What are the pros and cons?",
            "Give me 3 alternatives",
            "Summarize this conversation"
        ],
        innovator: [
            "Is this idea novel?",
            "What are the risks?",
            "How feasible is this?",
            "What's the market potential?"
        ],
        research: [
            "Find recent news about this",
            "What's the weather like?",
            "Show me YouTube videos",
            "Get crypto prices"
        ]
    },

    // ========================================
    // OFFLINE MODE SETTINGS
    // ========================================
    OFFLINE: {
        enabled: true,
        useLocalKnowledge: true,
        useAdaptiveKnowledge: true,
        fallbackMessage: "I'm currently offline, but I can answer from my local knowledge base. For real-time info, please check your internet connection."
    },

    // ========================================
    // SECURITY SETTINGS
    // ========================================
    SECURITY: {
        // Input Sanitization
        sanitizeInput: true,
        maxInputLength: 5000,
        
        // Storage Encryption (basic)
        encryptLocalStorage: false, // Set true if implementing encryption
        
        // Content Filtering
        filterInappropriateContent: true
    },

    // ========================================
    // DEBUG & DEVELOPMENT
    // ========================================
    DEBUG: {
        enabled: false, // Set to true for development
        logAPIcalls: false,
        logErrors: true,
        showAPImonitor: true
    }
};

// ============================================
// EXPORT CONFIGURATION
// ============================================
// Make config available globally
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}

// For Node.js environments (if needed for testing)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

// ============================================
// VALIDATION HELPER
// ============================================
// Check if required keys are configured
function validateConfig() {
    const warnings = [];
    
    // Check AI APIs
    if (!CONFIG.AI_APIS.GEMINI.keys[0] || CONFIG.AI_APIS.GEMINI.keys[0].includes("YOUR_")) {
        warnings.push("⚠️ Gemini API key not configured");
    }
    
    if (!CONFIG.AI_APIS.OPENAI.keys[0] || CONFIG.AI_APIS.OPENAI.keys[0].includes("YOUR_")) {
        warnings.push("⚠️ OpenAI API key not configured");
    }
    
    // Check Firebase
    if (CONFIG.FIREBASE.enabled && CONFIG.FIREBASE.config.apiKey.includes("YOUR_")) {
        warnings.push("⚠️ Firebase not configured - conversations won't be saved");
    }
    
    if (warnings.length > 0 && CONFIG.DEBUG.enabled) {
        console.warn("Configuration warnings:", warnings);
    }
    
    return warnings.length === 0;
}

// Auto-validate on load
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        validateConfig();
    });
}

// ============================================
// API KEY SETUP GUIDE
// ============================================
/*
📝 HOW TO GET API KEYS:

1. GEMINI (Google AI):
   → https://makersuite.google.com/app/apikey
   → Free tier: Generous limits for testing

2. OPENAI (GPT):
   → https://platform.openai.com/api-keys
   → Paid API, but gpt-4o-mini is very affordable

3. OPENROUTER (Multi-model access):
   → https://openrouter.ai/keys
   → Access multiple AI models through one API

4. COHERE:
   → https://dashboard.cohere.com/api-keys
   → Free tier available

5. HUGGINGFACE:
   → https://huggingface.co/settings/tokens
   → Free for many models

6. WEATHER (OpenWeather):
   → https://openweathermap.org/api
   → Free tier: 1000 calls/day

7. NEWS APIs:
   → GNews: https://gnews.io/
   → NewsAPI: https://newsapi.org/
   → Both have free tiers

8. YOUTUBE:
   → https://console.cloud.google.com/
   → Create project → Enable YouTube Data API v3

9. FIREBASE:
   → https://console.firebase.google.com/
   → Create project → Web app → Copy config

10. REDDIT:
    → https://www.reddit.com/prefs/apps
    → Create app → Copy credentials

11. TWITTER/X:
    → https://developer.twitter.com/
    → Apply for developer account

⚠️ SECURITY REMINDERS:
- NEVER share your API keys publicly
- NEVER commit config.js with real keys to git
- Add config.js to .gitignore
- Regenerate keys if accidentally exposed
- Use environment variables for production
*/