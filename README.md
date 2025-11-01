# LIA 2.0 - Living Intelligence Assistant

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://lia20.netlify.app/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> A production-grade AI assistant system featuring multi-provider integration, intelligent fallback architecture, and adaptive learning capabilities.

## 🌟 Project Overview

LIA 2.0 is a sophisticated AI assistant designed to solve real-world limitations in existing AI chat interfaces. Built during my gap year (2024-2025) as part of my technical portfolio for scholarship applications, this project demonstrates advanced system architecture, distributed computing principles, and user-centered design.

### Key Achievements
- **200+ Features Planned** | **35+ Features Deployed**
- **4 AI Providers Integrated** (Gemini, OpenAI, OpenRouter, Claude)
- **500+ Offline Q&A Database** for instant responses
- **Production-Ready** with live deployment

---

## 🎯 The Problem I Solved

**Challenge:** Free AI APIs impose strict rate limits, causing service interruptions and poor user experience. Additionally, switching providers loses conversation context, breaking continuity.

**My Solution:** Three-layer resilience architecture:

### 1. **Intelligent Fallback System**
```
Primary API (Gemini) → Fails/Rate Limited
    ↓
Secondary API (OpenAI) → Fails/Rate Limited
    ↓
Tertiary API (OpenRouter) → Fails/Rate Limited
    ↓
Final Fallback (Claude)
```

### 2. **Round-Robin Load Distribution**
Rotates requests across multiple APIs to prevent any single provider from hitting rate limits, distributing load evenly for optimal performance.

### 3. **Local Memory Management**
Stores conversation history in browser localStorage, enabling context preservation across API switches and maintaining conversation continuity regardless of provider changes.

---

## ✨ Features

### Core AI Capabilities
- 🤖 **Multi-Provider Integration** - Seamless switching between 4 AI providers
- 🔄 **Intelligent Fallback** - Automatic failover on API failures
- ⚖️ **Round-Robin Distribution** - Load balancing across providers
- 💬 **Real-time Streaming** - Live response generation
- 🧠 **Adaptive Learning** - Improves responses over time
- 💾 **Persistent Memory** - Conversation history preservation

### User Experience
- 🎤 **Voice Input** - Web Speech API integration
- 🎭 **4 Personality Modes** - Professional, Casual, Creative, Technical
- 🌦️ **Weather Integration** - Real-time weather data
- 📰 **News Integration** - Latest news updates
- 📄 **Multi-format Export** - Markdown, TXT, HTML, JSON
- 📱 **Responsive Design** - Mobile-first approach
- 🎨 **3 Theme Options** - Light, Dark, System

### Technical Features
- 🗄️ **500+ Offline Q&A Database** - Instant responses without API calls
- 📊 **Usage Analytics** - Track conversations and token usage
- 🔐 **Secure API Key Management** - Client-side encryption
- 🚀 **Optimized Performance** - Lazy loading and caching

---

## 🛠️ Technical Stack

### Frontend
- **JavaScript ES6+** - Core application logic
- **HTML5 & CSS3** - Modern semantic markup and styling
- **Web Speech API** - Voice input functionality
- **LocalStorage API** - Client-side data persistence

### APIs & Integrations
- **Google Gemini API** - Primary AI provider
- **OpenAI API** - Secondary AI provider
- **OpenRouter API** - Tertiary AI provider
- **Claude API** - Final fallback provider
- **Weather API** - Real-time weather data
- **News API** - Latest news aggregation

### Deployment
- **Netlify** - Continuous deployment and hosting
- **Git/GitHub** - Version control

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────┐
│           User Interface Layer              │
│  (Voice Input, Text Input, Export, Themes)  │
└───────────────┬─────────────────────────────┘
                │
┌───────────────▼─────────────────────────────┐
│         Application Logic Layer             │
│  (Request Handler, Context Manager)         │
└───────────────┬─────────────────────────────┘
                │
┌───────────────▼─────────────────────────────┐
│      Multi-Provider Integration Layer       │
│                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐    │
│  │ Gemini  │→ │ OpenAI  │→ │OpenRouter│    │
│  │(Primary)│  │(Backup) │  │(Backup)  │    │
│  └─────────┘  └─────────┘  └─────────┘    │
│       ↓            ↓            ↓          │
│  ┌──────────────────────────────────┐     │
│  │    Intelligent Fallback Engine    │     │
│  └──────────────────────────────────┘     │
└─────────────────────────────────────────────┘
                │
┌───────────────▼─────────────────────────────┐
│         Data Persistence Layer              │
│  (LocalStorage, Session Management)         │
└─────────────────────────────────────────────┘
```

---

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API access
- API keys for chosen providers (optional - demo keys included)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/DewanTahmidChy/lia-2.0.git
cd lia-2.0
```

2. **Open in browser**
```bash
# Simply open index.html in your browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

3. **Configure API Keys (Optional)**
- Click on Settings in the app
- Enter your API keys for desired providers
- Keys are stored securely in browser localStorage

### Live Demo
Experience LIA 2.0 without installation: [https://lia20.netlify.app/](https://lia20.netlify.app/)

---

## 📖 Usage Guide

### Basic Conversation
1. Type your message or click the microphone for voice input
2. LIA automatically selects the best available AI provider
3. Responses stream in real-time
4. Conversation history is preserved automatically

### Advanced Features
- **Switch Personality**: Click personality selector (Professional/Casual/Creative/Technical)
- **Export Conversation**: Click Export → Choose format (Markdown/TXT/HTML/JSON)
- **Check Weather**: Type "weather in [city]"
- **Get News**: Type "latest news about [topic]"
- **Offline Mode**: LIA answers from 500+ Q&A database when offline

---

## 🎓 Project Context

This project was built during my strategic gap year (2024-2025) as part of my technical portfolio for fully-funded undergraduate scholarship applications. It demonstrates:

- **System Architecture Skills**: Multi-layer resilience design
- **Problem-Solving Ability**: Identifying and solving real API limitations
- **Full-Stack Development**: End-to-end application development
- **User-Centered Design**: Building features based on actual user needs
- **Self-Directed Learning**: Mastering new technologies independently
- **Modern Development**: Leveraging AI-assisted development workflows

---

## 🔮 Roadmap

### Planned Features (200+ total)
- [ ] Multi-language support (10+ languages)
- [ ] Advanced memory system with semantic search
- [ ] Plugin architecture for extensibility
- [ ] Collaborative conversation mode
- [ ] Voice output (Text-to-Speech)
- [ ] Custom AI training on user data
- [ ] Mobile app versions (iOS/Android)
- [ ] Desktop application (Electron)
- [ ] API for third-party integrations
- [ ] Advanced analytics dashboard

---

## 🤝 Contributing

While this is primarily a portfolio project, I welcome:
- Bug reports and feature suggestions via Issues
- Code improvements via Pull Requests
- Documentation enhancements
- Translation contributions

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Dewan Mahrazul Islam Chowdhury**

- 🌐 Portfolio: [Live Demo](https://lia20.netlify.app/)
- 💼 LinkedIn: [Profile](https://www.linkedin.com/in/dewan-mahrazul-islam-chowdhury)
- 📧 Email: dewantahmidchowdhury@gmail.com
- 📍 Location: Sylhet, Bangladesh

---

## 🙏 Acknowledgments

- Built with determination during my gap year journey
- Inspired by the need for reliable AI assistance
- Created to demonstrate technical capability for scholarship applications
- Special thanks to the open-source community for incredible tools and resources

---

## 📊 Project Statistics

- **Lines of Code**: ~3,000+
- **Development Time**: 3 months (iterative development)
- **API Integrations**: 4 major AI providers
- **Features Deployed**: 35+
- **Target Features**: 200+
- **Database Entries**: 500+ Q&A pairs

---

## 🔗 Related Projects

Check out my other projects from gap year 2024-2025:
- **D1 IELTS Master Pro** - Comprehensive English learning platform
- **D1 University Tracker** - Application management system
- **Mahrazul Theory of Nine** - Mathematical research & interactive laboratory

---

<div align="center">

**Built with ❤️ and determination by Dewan Mahrazul Islam Chowdhury**

*Transforming barriers into opportunities through technology*

[⬆ Back to Top](#lia-20---living-intelligence-assistant)

</div>