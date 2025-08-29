import React, { useState } from 'react';
import { ReviewData, Hotel } from '../types';
import { Download, FileSpreadsheet, Calendar, Filter, Settings, CheckCircle } from 'lucide-react';

interface ExportDataProps {
  reviewData: ReviewData[];
  selectedHotel: Hotel | null;
}

const ExportData: React.FC<ExportDataProps> = ({ reviewData, selectedHotel }) => {
  const [exportFormat, setExportFormat] = useState('excel');
  const [dateRange, setDateRange] = useState('all');
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [includeMetadata, setIncludeMetadata] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const [exportComplete, setExportComplete] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    
    // Simulate export process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsExporting(false);
    setExportComplete(true);
    
    // Reset after showing success
    setTimeout(() => setExportComplete(false), 3000);
  };

  const generateGoogleSheetsData = () => {
    if (!reviewData.length) return [];

    const data = [];
    
    // Add header row
    data.push([
      'Source',
      'Hotel Name',
      'Overall Rating',
      'Review Count',
      'Last Updated',
      '5-Star Reviews',
      '4-Star Reviews',
      '3-Star Reviews',
      '2-Star Reviews',
      '1-Star Reviews'
    ]);

    // Add data rows
    reviewData.forEach(source => {
      data.push([
        source.source,
        selectedHotel?.name || 'Unknown Hotel',
        source.overall_rating.toFixed(2),
        source.review_count,
        new Date(source.last_updated).toLocaleDateString(),
        source.rating_distribution[5],
        source.rating_distribution[4],
        source.rating_distribution[3],
        source.rating_distribution[2],
        source.rating_distribution[1]
      ]);
    });

    return data;
  };

  const toggleSource = (source: string) => {
    setSelectedSources(prev => 
      prev.includes(source) 
        ? prev.filter(s => s !== source)
        : [...prev, source]
    );
  };

  if (!selectedHotel) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-12 text-center">
        <FileSpreadsheet className="w-16 h-16 text-slate-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-slate-900 mb-2">No Hotel Selected</h3>
        <p className="text-slate-600">Please select a hotel from the dashboard to export data.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900">Export Data</h2>
          <p className="text-slate-600 mt-1">Export review data for {selectedHotel.name} to Google Sheets or Excel</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Export Configuration */}
        <div className="lg:col-span-2 space-y-6">
          {/* Format Selection */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900">Export Format</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setExportFormat('excel')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    exportFormat === 'excel'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <FileSpreadsheet className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-medium">Excel Export</h4>
                  <p className="text-sm text-slate-600 mt-1">Download as .xlsx file</p>
                </button>
                <button
                  onClick={() => setExportFormat('sheets')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    exportFormat === 'sheets'
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Download className="w-8 h-8 mx-auto mb-2" />
                  <h4 className="font-medium">Google Sheets</h4>
                  <p className="text-sm text-slate-600 mt-1">Export directly to Sheets</p>
                </button>
              </div>
            </div>
          </div>

          {/* Date Range */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-slate-600" />
                <h3 className="text-lg font-semibold text-slate-900">Date Range</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { value: 'all', label: 'All Time' },
                  { value: '30', label: 'Last 30 Days' },
                  { value: '90', label: 'Last 3 Months' },
                  { value: '365', label: 'Last Year' }
                ].map(range => (
                  <button
                    key={range.value}
                    onClick={() => setDateRange(range.value)}
                    className={`px-4 py-2 rounded-lg border font-medium transition-all ${
                      dateRange === range.value
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Source Selection */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-slate-600" />
                <h3 className="text-lg font-semibold text-slate-900">Select Sources</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <button
                  onClick={() => setSelectedSources(
                    selectedSources.length === reviewData.length 
                      ? [] 
                      : reviewData.map(d => d.source)
                  )}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  {selectedSources.length === reviewData.length ? 'Deselect All' : 'Select All'}
                </button>
                {reviewData.map(source => (
                  <div key={source.source} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id={source.source}
                      checked={selectedSources.includes(source.source)}
                      onChange={() => toggleSource(source.source)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor={source.source} className="flex-1 text-sm font-medium text-slate-700">
                      {source.source}
                    </label>
                    <span className="text-xs text-slate-500">
                      {source.review_count.toLocaleString()} reviews
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Options */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center space-x-2">
                <Settings className="w-5 h-5 text-slate-600" />
                <h3 className="text-lg font-semibold text-slate-900">Export Options</h3>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="metadata"
                  checked={includeMetadata}
                  onChange={(e) => setIncludeMetadata(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="metadata" className="text-sm font-medium text-slate-700">
                  Include metadata (rating distribution, last update times)
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Export Summary & Action */}
        <div className="space-y-6">
          {/* Data Preview */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900">Export Summary</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Hotel:</span>
                <span className="font-medium">{selectedHotel.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Sources:</span>
                <span className="font-medium">
                  {selectedSources.length || reviewData.length} of {reviewData.length}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Total Reviews:</span>
                <span className="font-medium">
                  {reviewData
                    .filter(d => selectedSources.length === 0 || selectedSources.includes(d.source))
                    .reduce((sum, d) => sum + d.review_count, 0)
                    .toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Date Range:</span>
                <span className="font-medium">
                  {dateRange === 'all' ? 'All Time' : `Last ${dateRange} days`}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Format:</span>
                <span className="font-medium">
                  {exportFormat === 'excel' ? 'Excel (.xlsx)' : 'Google Sheets'}
                </span>
              </div>
            </div>
          </div>

          {/* Export Button */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="p-6">
              {exportComplete ? (
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-700 mb-2">Export Complete!</h3>
                  <p className="text-sm text-slate-600">
                    Your data has been exported successfully.
                  </p>
                </div>
              ) : (
                <button
                  onClick={handleExport}
                  disabled={isExporting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isExporting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Exporting...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      <span>Export Data</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Google Sheets Integration */}
          {exportFormat === 'sheets' && (
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">Google Sheets Integration</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-medium text-green-800 mb-2">Auto-sync enabled</h4>
                  <p className="text-sm text-green-700">
                    Data will be automatically updated every 6 hours
                  </p>
                </div>
                <div className="text-sm text-slate-600">
                  <p className="mb-2"><strong>Sheet Structure:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Source platform names</li>
                    <li>Overall ratings and review counts</li>
                    <li>Rating distribution (1-5 stars)</li>
                    <li>Last update timestamps</li>
                    <li>Recent review samples</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sample Data Structure */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">Sample Data Structure</h3>
          <p className="text-slate-600 text-sm mt-1">Preview of how your exported data will be structured</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                {['Source', 'Overall Rating', 'Review Count', '5★', '4★', '3★', '2★', '1★'].map(header => (
                  <th key={header} className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {generateGoogleSheetsData().slice(1, 4).map((row, index) => (
                <tr key={index} className="hover:bg-slate-50">
                  {row.slice(0, 8).map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                      {cellIndex === 1 ? (
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          {cell}
                        </div>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExportData;