import React from 'react';
import { ReviewData, Hotel } from '../types';
import { TrendingUp, TrendingDown, Star, BarChart3, PieChart } from 'lucide-react';

interface AnalyticsProps {
  reviewData: ReviewData[];
  selectedHotel: Hotel | null;
}

const Analytics: React.FC<AnalyticsProps> = ({ reviewData, selectedHotel }) => {
  const calculateOverallMetrics = () => {
    if (reviewData.length === 0) return { avgRating: 0, totalReviews: 0, trend: 'stable' as const };
    
    const totalRating = reviewData.reduce((sum, data) => sum + (data.overall_rating * data.review_count), 0);
    const totalReviews = reviewData.reduce((sum, data) => sum + data.review_count, 0);
    const avgRating = totalRating / totalReviews;
    
    return {
      avgRating,
      totalReviews,
      trend: avgRating > 4.0 ? 'up' as const : avgRating < 3.5 ? 'down' as const : 'stable' as const
    };
  };

  const getRatingDistribution = () => {
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    
    reviewData.forEach(data => {
      Object.entries(data.rating_distribution).forEach(([rating, count]) => {
        distribution[rating as keyof typeof distribution] += count;
      });
    });
    
    const total = Object.values(distribution).reduce((sum, count) => sum + count, 0);
    
    return Object.entries(distribution).map(([rating, count]) => ({
      rating: parseInt(rating),
      count,
      percentage: total > 0 ? (count / total) * 100 : 0
    }));
  };

  const getSourceComparison = () => {
    return reviewData.map(data => ({
      source: data.source,
      rating: data.overall_rating,
      count: data.review_count,
      percentage: data.review_count / reviewData.reduce((sum, d) => sum + d.review_count, 0) * 100
    })).sort((a, b) => b.rating - a.rating);
  };

  const getRecentTrends = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    return months.map((month, index) => ({
      month,
      rating: 3.5 + Math.random() * 1.5,
      reviews: Math.floor(Math.random() * 200) + 50
    }));
  };

  const metrics = calculateOverallMetrics();
  const ratingDist = getRatingDistribution();
  const sourceComparison = getSourceComparison();
  const trends = getRecentTrends();

  if (!selectedHotel) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-12 text-center">
        <BarChart3 className="w-16 h-16 text-slate-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-slate-900 mb-2">No Hotel Selected</h3>
        <p className="text-slate-600">Please select a hotel from the dashboard to view analytics.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900">Analytics Dashboard</h2>
          <p className="text-slate-600 mt-1">Detailed insights for {selectedHotel.name}</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-blue-100">Overall Rating</h3>
            <Star className="w-6 h-6 text-blue-200" />
          </div>
          <div className="flex items-end space-x-2">
            <span className="text-4xl font-bold">{metrics.avgRating.toFixed(1)}</span>
            <span className="text-blue-200">/ 5.0</span>
          </div>
          <div className="flex items-center mt-2">
            {metrics.trend === 'up' ? (
              <TrendingUp className="w-4 h-4 text-green-300 mr-1" />
            ) : metrics.trend === 'down' ? (
              <TrendingDown className="w-4 h-4 text-red-300 mr-1" />
            ) : null}
            <span className="text-sm text-blue-200">
              {metrics.trend === 'up' ? 'Trending up' : metrics.trend === 'down' ? 'Trending down' : 'Stable'}
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-emerald-100">Total Reviews</h3>
            <BarChart3 className="w-6 h-6 text-emerald-200" />
          </div>
          <div className="flex items-end space-x-2">
            <span className="text-4xl font-bold">{metrics.totalReviews.toLocaleString()}</span>
          </div>
          <div className="mt-2">
            <span className="text-sm text-emerald-200">Across {reviewData.length} platforms</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-purple-100">Review Sources</h3>
            <PieChart className="w-6 h-6 text-purple-200" />
          </div>
          <div className="flex items-end space-x-2">
            <span className="text-4xl font-bold">{reviewData.length}</span>
          </div>
          <div className="mt-2">
            <span className="text-sm text-purple-200">Active platforms</span>
          </div>
        </div>
      </div>

      {/* Rating Distribution */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-xl font-bold text-slate-900">Rating Distribution</h3>
          <p className="text-slate-600 mt-1">Breakdown of review ratings across all sources</p>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {ratingDist.reverse().map(item => (
              <div key={item.rating} className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 w-16">
                  <span className="font-medium">{item.rating}</span>
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-slate-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-3 rounded-full transition-all duration-700"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-slate-600 w-12">
                      {item.percentage.toFixed(1)}%
                    </span>
                  </div>
                </div>
                <div className="text-sm text-slate-500 w-20 text-right">
                  {item.count.toLocaleString()} reviews
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Source Comparison */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-xl font-bold text-slate-900">Source Performance</h3>
          <p className="text-slate-600 mt-1">Rating comparison across different platforms</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sourceComparison.map((source, index) => (
              <div key={source.source} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-slate-900">{source.source}</h4>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-bold text-lg">{source.rating.toFixed(1)}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Reviews:</span>
                    <span className="font-medium">{source.count.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Share:</span>
                    <span className="font-medium">{source.percentage.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-700 ${
                        index === 0 ? 'bg-gradient-to-r from-green-500 to-green-600' :
                        index === 1 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                        index === 2 ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                        'bg-gradient-to-r from-orange-500 to-orange-600'
                      }`}
                      style={{ width: `${(source.rating / 5) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trends Over Time */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-xl font-bold text-slate-900">Rating Trends</h3>
          <p className="text-slate-600 mt-1">6-month rating and review volume trends</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {trends.map((trend, index) => (
              <div key={trend.month} className="text-center">
                <div className="mb-2">
                  <div 
                    className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t mx-auto transition-all duration-700"
                    style={{ 
                      width: '20px',
                      height: `${(trend.rating / 5) * 60}px`,
                      minHeight: '10px'
                    }}
                  />
                </div>
                <div className="text-xs text-slate-600 font-medium">{trend.month}</div>
                <div className="text-xs text-slate-500 mt-1">{trend.rating.toFixed(1)}</div>
                <div className="text-xs text-slate-400">{trend.reviews}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;