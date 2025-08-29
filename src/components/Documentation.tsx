import React, { useState } from 'react';
import { FileText, Code, Database, Settings, Zap, Shield, TrendingUp, Users } from 'lucide-react';

const Documentation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', name: 'Overview', icon: FileText },
    { id: 'technical', name: 'Technical Implementation', icon: Code },
    { id: 'scraping', name: 'Scraping Methodology', icon: Database },
    { id: 'features', name: 'Features Guide', icon: Settings },
    { id: 'performance', name: 'Performance', icon: Zap },
    { id: 'security', name: 'Security & Compliance', icon: Shield },
    { id: 'api', name: 'API Reference', icon: TrendingUp },
    { id: 'user-guide', name: 'User Guide', icon: Users }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Hotel Review Aggregator - Overview</h2>
              <p className="text-slate-700 leading-relaxed">
                The Hotel Review Aggregator is a comprehensive web application designed to collect, analyze, and present hotel reviews from multiple Online Travel Agency (OTA) platforms and review sites. This system provides hotel managers and stakeholders with unified insights into their property's online reputation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Key Capabilities</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• Multi-platform review aggregation</li>
                  <li>• Real-time analytics and trending</li>
                  <li>• Automated Google Sheets integration</li>
                  <li>• Advanced filtering and search</li>
                  <li>• Rating distribution analysis</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Supported Platforms</h3>
                <ul className="space-y-2 text-green-800">
                  <li>• Booking.com</li>
                  <li>• Agoda</li>
                  <li>• Google Reviews</li>
                  <li>• TripAdvisor</li>
                  <li>• MakeMyTrip</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">System Architecture</h3>
              <p className="text-slate-700 mb-4">
                Built using modern web technologies with a focus on scalability, performance, and user experience.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="font-medium">React + TypeScript</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Database className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="font-medium">Vite + Tailwind</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <p className="font-medium">Modern APIs</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-6 h-6 text-orange-600" />
                  </div>
                  <p className="font-medium">Secure & Compliant</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'technical':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Technical Implementation</h2>
              <p className="text-slate-700 leading-relaxed">
                Detailed technical specifications and implementation details for the Hotel Review Aggregator system.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Frontend Architecture</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-slate-800 mb-2">Core Technologies</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• React 18+ with TypeScript</li>
                    <li>• Vite for build optimization</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Lucide React for icons</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-2">Key Features</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Responsive design system</li>
                    <li>• Component-based architecture</li>
                    <li>• Type-safe development</li>
                    <li>• Modern build pipeline</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Data Flow Architecture</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-semibold text-blue-800">1</div>
                  <div>
                    <h4 className="font-medium text-blue-800">Data Ingestion</h4>
                    <p className="text-sm text-blue-700">Automated scraping from OTA platforms with rate limiting and error handling</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-semibold text-blue-800">2</div>
                  <div>
                    <h4 className="font-medium text-blue-800">Data Processing</h4>
                    <p className="text-sm text-blue-700">Cleaning, validation, and normalization of review data</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-semibold text-blue-800">3</div>
                  <div>
                    <h4 className="font-medium text-blue-800">Analytics Engine</h4>
                    <p className="text-sm text-blue-700">Real-time calculation of metrics, trends, and insights</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-semibold text-blue-800">4</div>
                  <div>
                    <h4 className="font-medium text-blue-800">Presentation Layer</h4>
                    <p className="text-sm text-blue-700">Interactive dashboards and export functionality</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Performance Optimizations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-green-800">
                  <li>• Lazy loading for large datasets</li>
                  <li>• Virtual scrolling for review lists</li>
                  <li>• Optimized bundle splitting</li>
                  <li>• Cached API responses</li>
                </ul>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>• Progressive image loading</li>
                  <li>• Debounced search queries</li>
                  <li>• Memoized components</li>
                  <li>• Efficient state management</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'scraping':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Scraping Methodology</h2>
              <p className="text-slate-700 leading-relaxed">
                Comprehensive approach to ethical and efficient data collection from multiple review platforms.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">⚠️ Important Notice</h3>
              <p className="text-yellow-800">
                This application uses simulated data for demonstration purposes. In production, ensure compliance with platform Terms of Service and robots.txt files.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Scraping Strategy</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <strong>Rate Limiting:</strong> 1 request per 5 seconds per platform to respect server resources
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <strong>User Agent Rotation:</strong> Randomized headers to appear as legitimate browser traffic
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <strong>Proxy Support:</strong> IP rotation to distribute load and avoid blocking
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Data Extraction</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <strong>CSS Selectors:</strong> Platform-specific element targeting for consistent data retrieval
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <strong>Error Handling:</strong> Robust retry mechanisms with exponential backoff
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <strong>Data Validation:</strong> Schema validation and sanitization of extracted content
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Platform-Specific Challenges & Solutions</h3>
              <div className="space-y-4">
                {[
                  {
                    platform: 'Booking.com',
                    challenges: 'Dynamic content loading, CAPTCHA protection',
                    solutions: 'Selenium WebDriver with wait conditions, CAPTCHA solving services'
                  },
                  {
                    platform: 'Google Reviews',
                    challenges: 'JavaScript-heavy interface, infinite scroll',
                    solutions: 'Headless Chrome automation, scroll simulation'
                  },
                  {
                    platform: 'TripAdvisor',
                    challenges: 'Rate limiting, IP blocking',
                    solutions: 'Distributed scraping, residential proxies'
                  },
                  {
                    platform: 'Agoda',
                    challenges: 'Session management, dynamic tokens',
                    solutions: 'Cookie persistence, token extraction'
                  }
                ].map(item => (
                  <div key={item.platform} className="border border-slate-200 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">{item.platform}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-red-700">Challenges:</span>
                        <p className="text-slate-600">{item.challenges}</p>
                      </div>
                      <div>
                        <span className="font-medium text-green-700">Solutions:</span>
                        <p className="text-slate-600">{item.solutions}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'user-guide':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">User Guide</h2>
              <p className="text-slate-700 leading-relaxed">
                Step-by-step guide to using the Hotel Review Aggregator effectively.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Getting Started',
                  content: 'Select your hotel from the dashboard. The system will automatically begin aggregating reviews from configured sources.',
                  tips: ['Ensure hotel information is accurate', 'Verify all OTA links are working']
                },
                {
                  step: 2,
                  title: 'Managing Review Sources',
                  content: 'Navigate to Review Sources to add, edit, or disable platforms. Each source can be configured with specific URLs and API keys.',
                  tips: ['Enable only relevant platforms', 'Test each source after configuration', 'Monitor scraping status regularly']
                },
                {
                  step: 3,
                  title: 'Analyzing Data',
                  content: 'Use the Analytics section to deep-dive into rating trends, source comparisons, and historical performance.',
                  tips: ['Focus on rating distribution patterns', 'Monitor month-over-month trends', 'Compare performance across platforms']
                },
                {
                  step: 4,
                  title: 'Exporting Reports',
                  content: 'Export comprehensive reports to Google Sheets or Excel for stakeholder sharing and further analysis.',
                  tips: ['Set up automatic sync for real-time updates', 'Customize export fields based on needs', 'Schedule regular exports for reporting']
                }
              ].map(item => (
                <div key={item.step} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-slate-50 p-6 border-b border-slate-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-700 mb-4">{item.content}</p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-medium text-blue-900 mb-2">💡 Pro Tips:</h4>
                      <ul className="space-y-1">
                        {item.tips.map((tip, index) => (
                          <li key={index} className="text-sm text-blue-800">• {tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Best Practices</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-green-800 mb-2">Data Quality</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Regularly audit source accuracy</li>
                    <li>• Monitor data freshness indicators</li>
                    <li>• Validate new source configurations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-800 mb-2">Performance</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Optimize scraping schedules</li>
                    <li>• Use filters to focus on relevant data</li>
                    <li>• Export data in appropriate formats</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-600">Select a section to view documentation</p>
          </div>
        );
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Sidebar Navigation */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden sticky top-8">
          <div className="p-6 border-b border-slate-200">
            <h3 className="font-semibold text-slate-900">Documentation</h3>
          </div>
          <nav className="p-2">
            {sections.map(section => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors flex items-center space-x-3 ${
                    activeSection === section.id
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{section.name}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-3">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;