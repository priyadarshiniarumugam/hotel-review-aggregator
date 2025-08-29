import React, { useState } from 'react';
import { Hotel, ReviewData } from '../types';
import { Star, TrendingUp, TrendingDown, Users, Calendar, Search, Filter } from 'lucide-react';

interface DashboardProps {
  hotels: Hotel[];
  selectedHotel: Hotel | null;
  onHotelSelect: (hotel: Hotel) => void;
  reviewData: ReviewData[];
}

const Dashboard: React.FC<DashboardProps> = ({
  hotels,
  selectedHotel,
  onHotelSelect,
  reviewData
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSource, setFilterSource] = useState('all');

  const calculateOverallRating = () => {
    if (reviewData.length === 0) return 0;
    const totalRating = reviewData.reduce((sum, data) => sum + data.overall_rating, 0);
    return totalRating / reviewData.length;
  };

  const calculateTotalReviews = () => {
    return reviewData.reduce((sum, data) => sum + data.review_count, 0);
  };

  const getRecentTrend = () => {
    if (reviewData.length === 0) return 'stable';
    const averageRating = calculateOverallRating();
    return averageRating > 4.0 ? 'up' : averageRating < 3.5 ? 'down' : 'stable';
  };

  const filteredReviewData = reviewData.filter(data => 
    filterSource === 'all' || data.source === filterSource
  );

  const allReviews = reviewData
    .flatMap(data => data.recent_reviews)
    .filter(review => 
      review.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 20);

  return (
    <div className="space-y-8">
      {/* Hotel Selection */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900">Select Hotel</h2>
          <p className="text-slate-600 mt-1">Choose a hotel to view aggregated reviews</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map(hotel => (
              <div
                key={hotel.id}
                onClick={() => onHotelSelect(hotel)}
                className={`cursor-pointer rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                  selectedHotel?.id === hotel.id
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900">{hotel.name}</h3>
                  <p className="text-sm text-slate-600 mt-1">{hotel.location}</p>
                  {hotel.star_rating && (
                    <div className="flex items-center mt-2">
                      {Array.from({ length: hotel.star_rating }, (_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedHotel && reviewData.length > 0 && (
        <>
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Overall Rating</p>
                  <p className="text-3xl font-bold">{calculateOverallRating().toFixed(1)}</p>
                </div>
                <Star className="w-8 h-8 text-blue-200" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100">Total Reviews</p>
                  <p className="text-3xl font-bold">{calculateTotalReviews().toLocaleString()}</p>
                </div>
                <Users className="w-8 h-8 text-emerald-200" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Review Sources</p>
                  <p className="text-3xl font-bold">{reviewData.length}</p>
                </div>
                <div className="flex">
                  {getRecentTrend() === 'up' ? (
                    <TrendingUp className="w-8 h-8 text-orange-200" />
                  ) : getRecentTrend() === 'down' ? (
                    <TrendingDown className="w-8 h-8 text-orange-200" />
                  ) : (
                    <Calendar className="w-8 h-8 text-orange-200" />
                  )}
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Last Updated</p>
                  <p className="text-lg font-medium">
                    {new Date(reviewData[0]?.last_updated).toLocaleDateString()}
                  </p>
                </div>
                <Calendar className="w-8 h-8 text-purple-200" />
              </div>
            </div>
          </div>

          {/* Source Breakdown */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">Review Sources Breakdown</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reviewData.map(data => (
                  <div key={data.id} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-slate-900">{data.source}</h4>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium">{data.overall_rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Reviews:</span>
                        <span className="font-medium">{data.review_count.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(data.overall_rating / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Reviews */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-bold text-slate-900">Recent Reviews</h3>
                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search reviews..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <select
                      value={filterSource}
                      onChange={(e) => setFilterSource(e.target.value)}
                      className="pl-10 pr-8 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                    >
                      <option value="all">All Sources</option>
                      {reviewData.map(data => (
                        <option key={data.source} value={data.source}>{data.source}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="divide-y divide-slate-200">
              {allReviews.slice(0, 10).map(review => (
                <div key={review.id} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {review.author.charAt(0).toUpperCase()}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <h5 className="font-medium text-slate-900">{review.author}</h5>
                          {review.verified && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Verified
                            </span>
                          )}
                        </div>
                        <div className="flex items-center">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-slate-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-600 mt-2">{review.text}</p>
                      <p className="text-sm text-slate-500 mt-2">
                        {new Date(review.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;