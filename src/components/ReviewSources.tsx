import React, { useState } from 'react';
import { ReviewSource, Hotel } from '../types';
import { Plus, Edit3, Trash2, Globe, CheckCircle, XCircle, Clock } from 'lucide-react';

interface ReviewSourcesProps {
  sources: ReviewSource[];
  onSourcesUpdate: (sources: ReviewSource[]) => void;
  selectedHotel: Hotel | null;
}

const ReviewSources: React.FC<ReviewSourcesProps> = ({
  sources,
  onSourcesUpdate,
  selectedHotel
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingSource, setEditingSource] = useState<ReviewSource | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    api_key: '',
    enabled: true
  });

  const handleAddSource = () => {
    const newSource: ReviewSource = {
      id: Date.now().toString(),
      name: formData.name,
      url: formData.url,
      enabled: formData.enabled,
      status: 'pending',
      api_key: formData.api_key || undefined
    };

    onSourcesUpdate([...sources, newSource]);
    setFormData({ name: '', url: '', api_key: '', enabled: true });
    setShowAddForm(false);
  };

  const handleEditSource = (source: ReviewSource) => {
    setEditingSource(source);
    setFormData({
      name: source.name,
      url: source.url,
      api_key: source.api_key || '',
      enabled: source.enabled
    });
    setShowAddForm(true);
  };

  const handleUpdateSource = () => {
    if (!editingSource) return;

    const updatedSources = sources.map(source =>
      source.id === editingSource.id
        ? {
            ...source,
            name: formData.name,
            url: formData.url,
            enabled: formData.enabled,
            api_key: formData.api_key || undefined
          }
        : source
    );

    onSourcesUpdate(updatedSources);
    setEditingSource(null);
    setFormData({ name: '', url: '', api_key: '', enabled: true });
    setShowAddForm(false);
  };

  const handleDeleteSource = (id: string) => {
    if (confirm('Are you sure you want to delete this source?')) {
      onSourcesUpdate(sources.filter(source => source.id !== id));
    }
  };

  const toggleSourceStatus = (id: string) => {
    const updatedSources = sources.map(source =>
      source.id === id
        ? { ...source, enabled: !source.enabled }
        : source
    );
    onSourcesUpdate(updatedSources);
  };

  const getStatusIcon = (status: ReviewSource['status']) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: ReviewSource['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Review Sources</h2>
              <p className="text-slate-600 mt-1">
                Manage OTA links and review platforms for {selectedHotel?.name || 'selected hotel'}
              </p>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add Source</span>
            </button>
          </div>
        </div>

        {/* Add/Edit Form */}
        {showAddForm && (
          <div className="p-6 bg-slate-50 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              {editingSource ? 'Edit Source' : 'Add New Source'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Source Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Booking.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  URL
                </label>
                <input
                  type="url"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://booking.com/hotel/..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  API Key (Optional)
                </label>
                <input
                  type="password"
                  value={formData.api_key}
                  onChange={(e) => setFormData({ ...formData, api_key: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter API key if required"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="enabled"
                  checked={formData.enabled}
                  onChange={(e) => setFormData({ ...formData, enabled: e.target.checked })}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="enabled" className="text-sm font-medium text-slate-700">
                  Enable scraping for this source
                </label>
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-4">
              <button
                onClick={() => {
                  setShowAddForm(false);
                  setEditingSource(null);
                  setFormData({ name: '', url: '', api_key: '', enabled: true });
                }}
                className="px-4 py-2 text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={editingSource ? handleUpdateSource : handleAddSource}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {editingSource ? 'Update' : 'Add'} Source
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Sources List */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">Configured Sources</h3>
          <p className="text-slate-600 text-sm mt-1">
            {sources.filter(s => s.enabled).length} of {sources.length} sources enabled
          </p>
        </div>
        
        <div className="divide-y divide-slate-200">
          {sources.map(source => (
            <div key={source.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Globe className="w-8 h-8 text-slate-400" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-slate-900">{source.name}</h4>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(source.status)}`}>
                        {source.status}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mt-1">{source.url}</p>
                    {source.last_scraped && (
                      <p className="text-xs text-slate-500 mt-1">
                        Last scraped: {new Date(source.last_scraped).toLocaleDateString()} at {new Date(source.last_scraped).toLocaleTimeString()}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {getStatusIcon(source.status)}
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => toggleSourceStatus(source.id)}
                      className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                        source.enabled
                          ? 'bg-green-100 text-green-700 hover:bg-green-200'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {source.enabled ? 'Enabled' : 'Disabled'}
                    </button>
                    <button
                      onClick={() => handleEditSource(source)}
                      className="p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-md transition-colors"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteSource(source.id)}
                      className="p-2 text-red-600 hover:text-red-800 hover:bg-red-100 rounded-md transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scraping Status */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">Scraping Configuration</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 rounded-lg p-4">
              <h4 className="font-medium text-slate-900">Scraping Frequency</h4>
              <p className="text-sm text-slate-600 mt-1">Every 6 hours</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <h4 className="font-medium text-slate-900">Rate Limiting</h4>
              <p className="text-sm text-slate-600 mt-1">1 request per 5 seconds</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <h4 className="font-medium text-slate-900">Data Retention</h4>
              <p className="text-sm text-slate-600 mt-1">90 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSources;