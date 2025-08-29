import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import ReviewSources from './components/ReviewSources';
import Analytics from './components/Analytics';
import ExportData from './components/ExportData';
import Documentation from './components/Documentation';
import { Hotel, ReviewSource, ReviewData } from './types';
import { mockHotels, mockReviewSources } from './data/mockData';
import { BarChart3, Database, FileText, Home, Settings } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(mockHotels[0]);
  const [reviewSources, setReviewSources] = useState<ReviewSource[]>(mockReviewSources);
  const [reviewData, setReviewData] = useState<ReviewData[]>([]);

  useEffect(() => {
    if (selectedHotel) {
      // Simulate data fetching
      const mockData = generateMockReviewData(selectedHotel.id);
      setReviewData(mockData);
    }
  }, [selectedHotel]);

  const generateMockReviewData = (hotelId: string): ReviewData[] => {
    const sources = ['Booking.com', 'Agoda', 'Google Reviews', 'TripAdvisor', 'MakeMyTrip'];
    return sources.map(source => ({
      id: `${hotelId}-${source}`,
      source,
      hotelId,
      overall_rating: Math.random() * 2 + 3.5,
      review_count: Math.floor(Math.random() * 2000) + 100,
      recent_reviews: Array.from({ length: 10 }, (_, i) => ({
        id: `review-${i}`,
        rating: Math.floor(Math.random() * 5) + 1,
        text: `Great experience at this hotel. ${source} review #${i + 1}`,
        author: `Guest${i + 1}`,
        date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
        verified: Math.random() > 0.3
      })),
      rating_distribution: {
        1: Math.floor(Math.random() * 50),
        2: Math.floor(Math.random() * 80),
        3: Math.floor(Math.random() * 150),
        4: Math.floor(Math.random() * 300),
        5: Math.floor(Math.random() * 400)
      },
      last_updated: new Date().toISOString()
    }));
  };

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'sources', name: 'Review Sources', icon: Database },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'export', name: 'Export Data', icon: Settings },
    { id: 'docs', name: 'Documentation', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Hotel Review Aggregator
              </h1>
            </div>
            {selectedHotel && (
              <div className="hidden md:flex items-center space-x-3">
                <img 
                  src={selectedHotel.image} 
                  alt={selectedHotel.name}
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-slate-900">{selectedHotel.name}</p>
                  <p className="text-xs text-slate-500">{selectedHotel.location}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white/60 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <Dashboard 
            hotels={mockHotels}
            selectedHotel={selectedHotel}
            onHotelSelect={setSelectedHotel}
            reviewData={reviewData}
          />
        )}
        {activeTab === 'sources' && (
          <ReviewSources 
            sources={reviewSources}
            onSourcesUpdate={setReviewSources}
            selectedHotel={selectedHotel}
          />
        )}
        {activeTab === 'analytics' && (
          <Analytics 
            reviewData={reviewData}
            selectedHotel={selectedHotel}
          />
        )}
        {activeTab === 'export' && (
          <ExportData 
            reviewData={reviewData}
            selectedHotel={selectedHotel}
          />
        )}
        {activeTab === 'docs' && <Documentation />}
      </main>
    </div>
  );
}

export default App;