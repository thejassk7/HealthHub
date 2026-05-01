const { useState, useEffect } = React;

// --- SVGs ---
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const ShoppingBagIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>;
const BookOpenIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const AwardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>;
const QuoteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>;


// --- Components ---

const Landing = ({ onSelect }) => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">Welcome to <span className="text-primary">HealthyHub</span></h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-xl">Nourish your body and mind with our personalized health platform.</p>
        
        <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <button 
                onClick={() => onSelect('parent')}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/50 flex flex-col items-center text-center transform hover:-translate-y-1"
            >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">👨‍👩‍👧</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">I am a Parent</h3>
                <p className="text-gray-500">Discover 5-minute recipes and myth-busting nutritional facts for the whole family.</p>
            </button>
            
            <button 
                onClick={() => onSelect('youth')}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/50 flex flex-col items-center text-center transform hover:-translate-y-1"
            >
                <div className="w-20 h-20 rounded-full gradient-card flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white shadow-lg">
                    <span className="text-4xl">⚡</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">I am a Youth</h3>
                <p className="text-gray-500">Track your BMI, get daily motivation, and hit your hydration goals.</p>
            </button>
        </div>
    </div>
);

const Onboarding = ({ onComplete }) => {
    const preferences = [
        { id: 'vegetarian', name: 'Vegetarian', icon: '🥗', desc: 'Plant-based diet with dairy and eggs' },
        { id: 'vegan', name: 'Vegan', icon: '🌱', desc: '100% plant-based diet' },
        { id: 'high-protein', name: 'High Protein', icon: '🥩', desc: 'Focused on muscle building and recovery' },
        { id: 'balanced', name: 'Balanced', icon: '🍲', desc: 'A mix of all food groups' },
    ];
    
    const [selected, setSelected] = useState(null);

    return (
        <div className="min-h-screen flex flex-col items-center py-20 bg-gray-50 px-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Dietary Preferences</h1>
            <p className="text-lg text-gray-600 mb-10">Select your preferred dietary style to personalize your experience.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-12">
                {preferences.map((pref) => (
                    <div 
                        key={pref.id}
                        onClick={() => setSelected(pref.id)}
                        className={`cursor-pointer rounded-2xl p-6 border-2 transition-all duration-200 flex items-start space-x-4
                            ${selected === pref.id ? 'border-primary bg-primary/5 shadow-md' : 'border-gray-200 bg-white hover:border-primaryLight'}`}
                    >
                        <div className="text-4xl">{pref.icon}</div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">{pref.name}</h3>
                            <p className="text-gray-500 mt-1">{pref.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <button 
                onClick={() => selected && onComplete(selected)}
                disabled={!selected}
                className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg ${selected ? 'gradient-card text-white hover:shadow-primary/50 hover:-translate-y-0.5' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
            >
                Continue to Dashboard
            </button>
        </div>
    );
};

const Navbar = ({ currentPath, setPath, userType, onLogout }) => {
    const links = [
        { id: 'home', name: 'Home', icon: <HomeIcon /> },
        { id: 'shop', name: 'Shop', icon: <ShoppingBagIcon /> },
        ...(userType === 'parent' ? [{ id: 'recipes', name: 'Recipes', icon: <BookOpenIcon /> }] : []),
        { id: 'community', name: 'Community', icon: <UsersIcon /> },
        { id: 'rewards', name: 'Rewards', icon: <AwardIcon /> },
        ...(userType === 'youth' ? [{ id: 'quotes', name: 'Quotes', icon: <QuoteIcon /> }] : []),
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg gradient-card flex items-center justify-center">
                            <span className="text-white font-bold text-lg">H</span>
                        </div>
                        <span className="font-bold text-xl text-gray-900 tracking-tight">HealthyHub</span>
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-1">
                        {links.map(link => (
                            <button
                                key={link.id}
                                onClick={() => setPath(link.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center space-x-2
                                    ${currentPath === link.id ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                            >
                                {link.icon}
                                <span>{link.name}</span>
                            </button>
                        ))}
                    </div>
                    
                    <div className="flex items-center">
                        <button 
                            onClick={onLogout}
                            className="text-sm font-medium text-gray-500 hover:text-gray-900"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const ParentDashboard = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Nourish Your Body</h1>
        <p className="text-lg text-gray-500 mb-10">Healthy habits start at home. Here are today's top picks for your family.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primaryLight/20 rounded-bl-full -mr-8 -mt-8"></div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center"><span className="text-3xl mr-3">⏱️</span> 5-Minute Recipes</h2>
                <div className="space-y-4">
                    <div className="flex items-center p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100 cursor-pointer">
                        <div className="text-4xl mr-4">🥑</div>
                        <div>
                            <h3 className="font-semibold text-lg text-gray-900">Avocado Toast with Egg</h3>
                            <p className="text-sm text-gray-500">High protein breakfast to start the day.</p>
                        </div>
                        <div className="ml-auto flex items-center text-primary font-medium">
                            <span className="mr-1">5m</span>
                        </div>
                    </div>
                    <div className="flex items-center p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100 cursor-pointer">
                        <div className="text-4xl mr-4">🫐</div>
                        <div>
                            <h3 className="font-semibold text-lg text-gray-900">Berry Protein Smoothie</h3>
                            <p className="text-sm text-gray-500">Antioxidant rich and kid-friendly.</p>
                        </div>
                        <div className="ml-auto flex items-center text-primary font-medium">
                            <span className="mr-1">3m</span>
                        </div>
                    </div>
                </div>
                <button className="mt-6 text-primary font-medium hover:text-primaryLight flex items-center">
                    View all recipes <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
            
            <div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 gradient-card opacity-20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <h2 className="text-2xl font-bold mb-6 flex items-center"><span className="text-3xl mr-3">🔍</span> Myth Buster</h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="inline-block px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Myth</div>
                    <h3 className="text-xl font-semibold mb-2">"Carbs make you gain weight."</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        Weight gain is determined by overall caloric intake, not just carbohydrates. Whole grain carbs are essential for energy and contain vital nutrients and fiber.
                    </p>
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full gradient-card flex items-center justify-center text-white mr-3 shadow-md">✓</div>
                        <span className="text-sm font-medium text-primaryLight">Fact: Focus on complex carbs!</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const YouthDashboard = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Level Up Your Health</h1>
        <p className="text-lg text-gray-500 mb-10">Track your progress and stay motivated every single day.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 gradient-card rounded-3xl p-8 text-white relative overflow-hidden shadow-xl flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div>
                    <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Daily Motivation</div>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 max-w-lg">
                        "The only bad workout is the one that didn't happen."
                    </h2>
                </div>
                <div className="flex items-center space-x-3 mt-8">
                    <button className="bg-white text-primary px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-50 transition-colors">Save Quote</button>
                    <button className="bg-white/20 text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-white/30 transition-colors border border-white/30">Share</button>
                </div>
            </div>
            
            <div className="space-y-6">
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-gray-800">BMI Update</h3>
                        <span className="p-2 bg-blue-50 text-blue-500 rounded-lg">📊</span>
                    </div>
                    <div className="flex items-end mb-2">
                        <span className="text-4xl font-bold text-gray-900">21.5</span>
                        <span className="text-sm text-green-500 font-medium ml-2 mb-1 flex items-center">Normal <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5 mt-4">
                        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 text-center">Looking good! Keep up the balanced diet.</p>
                </div>
                
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-gray-800">Water Reminder</h3>
                        <span className="p-2 bg-blue-50 text-blue-500 rounded-lg">💧</span>
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <span className="text-3xl font-bold text-gray-900">4</span><span className="text-gray-500 text-lg">/8 glasses</span>
                        </div>
                        <button className="w-10 h-10 rounded-full gradient-card text-white flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">+</button>
                    </div>
                    <p className="text-xs text-gray-400 mt-4">You're halfway there! Stay hydrated.</p>
                </div>
            </div>
        </div>
    </div>
);

const Shop = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetch('/api/shop')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(err => console.error(err));
    }, []);

    const categories = ['All', 'Vegetables', 'Snacks', 'Herbs'];
    const [activeCat, setActiveCat] = useState('All');

    const filteredItems = activeCat === 'All' ? items : items.filter(item => item.category === activeCat);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Marketplace</h1>
            <p className="text-lg text-gray-500 mb-8">Fresh, organic, and healthy choices delivered to you.</p>
            
            <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
                {categories.map(cat => (
                    <button 
                        key={cat}
                        onClick={() => setActiveCat(cat)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
                            ${activeCat === cat ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {filteredItems.map(item => (
                    <div key={item.id} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                        <div className="h-40 bg-gray-50 rounded-xl mb-4 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                            {item.image}
                        </div>
                        <div className="text-xs text-primary font-medium mb-1 uppercase tracking-wider">{item.category}</div>
                        <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-lg text-gray-900">${item.price.toFixed(2)}</span>
                            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                                +
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const QuotesEngine = () => {
    const [quotes, setQuotes] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    
    useEffect(() => {
        fetch('/api/quotes')
            .then(res => res.json())
            .then(data => setQuotes(data))
            .catch(err => console.error(err));
    }, []);

    const filters = ['All', 'Nutrition', 'Fitness', 'Motivation'];
    const filteredQuotes = activeFilter === 'All' ? quotes : quotes.filter(q => q.category === activeFilter);
    const heroQuote = quotes.length > 0 ? quotes[0] : { text: "Loading...", category: "" };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Daily Inspiration</h1>
            
            <div className="gradient-card rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl mb-12 transform hover:scale-[1.01] transition-transform duration-300">
                <div className="absolute top-4 left-4 text-white/20 text-8xl font-serif">"</div>
                <div className="relative z-10">
                    <p className="text-sm font-bold uppercase tracking-widest mb-6 text-white/80">Quote of the Day</p>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8 max-w-3xl mx-auto font-serif">
                        {heroQuote.text}
                    </h2>
                    <button className="px-8 py-3 bg-white text-primary rounded-full font-semibold shadow-lg hover:bg-gray-50 transition-colors">
                        Share Wisdom
                    </button>
                </div>
            </div>

            <div className="flex space-x-2 mb-8">
                {filters.map(filter => (
                    <button 
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-colors
                            ${activeFilter === filter ? 'bg-gray-900 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredQuotes.map(quote => (
                    <div key={quote.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-primary text-2xl mb-2">"</div>
                        <p className="text-gray-800 text-lg mb-4">{quote.text}</p>
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{quote.category}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Rewards = () => (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">My Rewards</h1>
        <p className="text-lg text-gray-500 mb-10 text-center">Earn points, unlock tiers, and become a Health Hero.</p>
        
        <div className="w-full max-w-2xl bg-white rounded-3xl p-8 border border-gray-100 shadow-xl relative overflow-hidden mb-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div className="flex flex-col items-center text-center relative z-10 mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white mb-4">
                    <span className="text-5xl">🏆</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Green Starter</h2>
                <p className="text-gray-500 mt-1">Current Tier</p>
            </div>
            
            <div className="relative z-10">
                <div className="flex justify-between text-sm font-semibold text-gray-600 mb-2">
                    <span>450 pts</span>
                    <span>1000 pts to Wellness Champion</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-4 mb-4 overflow-hidden border border-gray-200">
                    <div className="gradient-card h-full rounded-full transition-all duration-1000 ease-out" style={{ width: '45%' }}></div>
                </div>
            </div>
        </div>
        
        <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center space-x-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-2xl">🏃</div>
                <div>
                    <h4 className="font-semibold text-gray-900">Completed 10k steps</h4>
                    <p className="text-sm text-green-500 font-medium">+50 pts</p>
                </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center space-x-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-2xl">💧</div>
                <div>
                    <h4 className="font-semibold text-gray-900">Hydration Goal Met</h4>
                    <p className="text-sm text-green-500 font-medium">+20 pts</p>
                </div>
            </div>
        </div>
    </div>
);

const Community = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetch('/api/community')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Community Exchange</h1>
                    <p className="text-lg text-gray-500">Trade, share, and connect with locals.</p>
                </div>
                <button className="px-6 py-2 gradient-card text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow hidden md:block">
                    + List Item
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {items.map(item => (
                    <div key={item.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                                    {item.user.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900">{item.user}</h4>
                                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.type === 'Trade' ? 'bg-purple-100 text-purple-600' : 'bg-green-100 text-green-600'}`}>
                                        {item.type}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="h-32 bg-gray-50 rounded-xl mb-4 flex items-center justify-center text-5xl">
                            {item.image}
                        </div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-4">{item.name}</h3>
                        <button className="w-full py-2 border border-primary text-primary rounded-xl font-medium hover:bg-primary hover:text-white transition-colors">
                            Connect
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Main App Component ---

const App = () => {
    const [userType, setUserType] = useState(null);
    const [dietaryPreference, setDietaryPreference] = useState(null);
    const [currentPath, setCurrentPath] = useState('home');

    // Reset state for "Logout"
    const handleLogout = () => {
        setUserType(null);
        setDietaryPreference(null);
        setCurrentPath('home');
    };

    if (!userType) {
        return <Landing onSelect={setUserType} />;
    }

    if (!dietaryPreference) {
        return <Onboarding onComplete={setDietaryPreference} />;
    }

    const renderContent = () => {
        switch (currentPath) {
            case 'home': return userType === 'parent' ? <ParentDashboard /> : <YouthDashboard />;
            case 'shop': return <Shop />;
            case 'recipes': return <ParentDashboard />; // Simplify: show dashboard for recipes
            case 'community': return <Community />;
            case 'rewards': return <Rewards />;
            case 'quotes': return <QuotesEngine />;
            default: return <ParentDashboard />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50/50">
            <Navbar currentPath={currentPath} setPath={setCurrentPath} userType={userType} onLogout={handleLogout} />
            <main className="animate-in fade-in duration-500">
                {renderContent()}
            </main>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
