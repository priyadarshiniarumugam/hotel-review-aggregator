# Google Sheets Integration Guide

## 📊 Overview

The Hotel Review Aggregator provides seamless integration with Google Sheets, enabling automated data export, real-time synchronization, and collaborative analysis of hotel review data. This guide covers setup, configuration, data structure, and best practices for maximizing the value of your review analytics.

## 🚀 Quick Start

### Prerequisites
- Google account with Sheets access
- Hotel Review Aggregator application access
- Basic understanding of spreadsheet operations

### Initial Setup
1. **Navigate to Export Data**: Click the "Export Data" tab in the application
2. **Select Google Sheets**: Choose "Google Sheets" as your export format
3. **Authorize Access**: Grant necessary permissions when prompted
4. **Configure Settings**: Choose data range, sources, and update frequency
5. **Export Data**: Click "Export Data" to create your first sheet

## 🔧 Configuration Options

### Export Format Selection
```typescript
interface ExportConfig {
  format: 'google-sheets' | 'excel';
  destination: {
    sheetId?: string;        // Existing sheet ID
    createNew: boolean;      // Create new sheet
    sheetName: string;       // Custom sheet name
  };
  autoSync: {
    enabled: boolean;        // Enable automatic updates
    frequency: '1h' | '6h' | '24h';  // Update frequency
    notifications: boolean;   // Email notifications
  };
}
```

### Data Selection Options
- **Date Range**: All time, last 30/90/365 days, custom range
- **Source Selection**: All platforms or specific OTA sites
- **Data Types**: Summary metrics, detailed reviews, rating distributions
- **Metadata**: Include timestamps, source URLs, data quality indicators

### Advanced Settings
```typescript
interface AdvancedConfig {
  dataStructure: {
    pivotTables: boolean;     // Auto-generate pivot tables
    charts: boolean;          // Include visualization charts
    formulas: boolean;        // Add calculated fields
  };
  formatting: {
    conditionalFormatting: boolean;  // Color-code ratings
    dataValidation: boolean;         // Validate data integrity
    freezePanes: boolean;           // Freeze header rows
  };
  sharing: {
    permissions: 'view' | 'edit' | 'comment';
    shareWithTeam: string[];        // Email addresses
    publicLink: boolean;            // Generate shareable link
  };
}
```

## 📋 Data Structure

### Sheet Organization
The exported Google Sheet contains multiple tabs for organized data analysis:

#### 1. Executive Summary Tab
```
| Metric                | Value      | Trend    | Period      |
|-----------------------|------------|----------|-------------|
| Overall Rating        | 4.2        | ↑ +0.1   | Last 30d    |
| Total Reviews         | 1,247      | ↑ +89    | Last 30d    |
| Active Sources        | 5          | →        | Current     |
| Response Rate         | 78%        | ↑ +5%    | Last 30d    |
| Avg Response Time     | 2.3 days   | ↓ -0.5   | Last 30d    |
```

#### 2. Source Performance Tab
```
| Source        | Rating | Reviews | Share | Trend | Last Updated |
|---------------|--------|---------|-------|-------|--------------|
| Booking.com   | 4.3    | 523     | 42%   | ↑     | 2024-01-15   |
| Google        | 4.1    | 312     | 25%   | →     | 2024-01-15   |
| TripAdvisor   | 4.0    | 234     | 19%   | ↓     | 2024-01-14   |
| Agoda         | 4.2    | 178     | 14%   | ↑     | 2024-01-15   |
```

#### 3. Rating Distribution Tab
```
| Source        | 5★  | 4★  | 3★  | 2★  | 1★  | Total |
|---------------|-----|-----|-----|-----|-----|-------|
| Booking.com   | 245 | 156 | 89  | 23  | 10  | 523   |
| Google        | 134 | 98  | 56  | 18  | 6   | 312   |
| TripAdvisor   | 98  | 87  | 34  | 12  | 3   | 234   |
| Agoda         | 89  | 67  | 18  | 3   | 1   | 178   |
```

#### 4. Recent Reviews Tab
```
| Date       | Source      | Rating | Author    | Review Text (Excerpt)           | Verified |
|------------|-------------|--------|-----------|--------------------------------|----------|
| 2024-01-15 | Booking.com | 5      | Guest123  | Excellent service and location | Yes      |
| 2024-01-15 | Google      | 4      | John D.   | Great hotel, minor issues...   | Yes      |
| 2024-01-14 | TripAdvisor | 3      | Traveler  | Average experience overall     | No       |
```

#### 5. Trend Analysis Tab
```
| Month    | Avg Rating | Review Count | Booking.com | Google | TripAdvisor | Agoda |
|----------|------------|--------------|-------------|--------|-------------|-------|
| Jan 2024 | 4.2        | 89          | 4.3         | 4.1    | 4.0         | 4.2   |
| Dec 2023 | 4.1        | 76          | 4.2         | 4.0    | 3.9         | 4.1   |
| Nov 2023 | 4.0        | 82          | 4.1         | 3.9    | 3.8         | 4.0   |
```

### Data Types & Formats

#### Numeric Data
- **Ratings**: Decimal format (1.0 - 5.0) with one decimal place
- **Counts**: Integer format with thousands separators
- **Percentages**: Percentage format with one decimal place
- **Dates**: ISO format (YYYY-MM-DD) for consistency

#### Text Data
- **Review Content**: Truncated to 200 characters with ellipsis
- **Author Names**: Anonymized for privacy (Guest123, User456)
- **Source Names**: Standardized platform names
- **Status Indicators**: Verified/Unverified, Active/Inactive

#### Conditional Formatting
```typescript
interface FormattingRules {
  ratings: {
    excellent: { range: '4.5-5.0', color: 'green' };
    good: { range: '3.5-4.4', color: 'yellow' };
    poor: { range: '1.0-3.4', color: 'red' };
  };
  trends: {
    positive: { symbol: '↑', color: 'green' };
    negative: { symbol: '↓', color: 'red' };
    stable: { symbol: '→', color: 'gray' };
  };
  freshness: {
    fresh: { age: '<24h', color: 'green' };
    recent: { age: '1-7d', color: 'yellow' };
    stale: { age: '>7d', color: 'red' };
  };
}
```

## 🔄 Automation Features

### Scheduled Updates
```typescript
interface AutoSyncConfig {
  frequency: {
    hourly: 'Every hour (premium feature)';
    sixHourly: 'Every 6 hours (standard)';
    daily: 'Once daily (basic)';
  };
  timeZone: 'Hotel local timezone';
  notifications: {
    email: boolean;
    slack: boolean;
    webhook: string;
  };
}
```

### Smart Notifications
The system sends intelligent notifications for:
- **Significant Rating Changes**: ±0.2 points or more
- **Review Volume Spikes**: 50% increase in daily reviews
- **New Negative Reviews**: 1-2 star ratings requiring attention
- **Data Quality Issues**: Missing data or scraping failures
- **Competitive Insights**: Benchmark performance changes

### Data Validation
```typescript
interface ValidationRules {
  ratingRange: { min: 1.0, max: 5.0 };
  reviewCount: { min: 0, max: 999999 };
  dateFormat: 'YYYY-MM-DD';
  sourceNames: ['Booking.com', 'Google', 'TripAdvisor', 'Agoda', 'MakeMyTrip'];
  requiredFields: ['source', 'rating', 'reviewCount', 'lastUpdated'];
}
```

## 📊 Advanced Analytics

### Pivot Table Templates
Pre-configured pivot tables for common analyses:

#### 1. Rating Trends by Source
```
Rows: Month
Columns: Source Platform
Values: Average Rating
Filters: Date Range, Hotel Property
```

#### 2. Review Volume Analysis
```
Rows: Source Platform
Columns: Rating (1-5 stars)
Values: Count of Reviews
Filters: Date Range, Verified Status
```

#### 3. Competitive Benchmarking
```
Rows: Hotel Property
Columns: Metric Type
Values: Performance Score
Filters: Market Segment, Location
```

### Chart Templates
Automated chart generation for visual insights:

#### Line Charts
- Rating trends over time
- Review volume patterns
- Seasonal performance analysis

#### Bar Charts
- Source performance comparison
- Rating distribution breakdown
- Monthly review counts

#### Pie Charts
- Market share by platform
- Rating distribution percentages
- Review verification status

### Formula Library
Pre-built formulas for advanced calculations:

```excel
// Weighted Average Rating
=SUMPRODUCT(Rating_Range, ReviewCount_Range) / SUM(ReviewCount_Range)

// Rating Trend Calculation
=IF((Current_Rating - Previous_Rating) > 0.1, "↑", 
   IF((Previous_Rating - Current_Rating) > 0.1, "↓", "→"))

// Review Velocity
=(Current_Month_Reviews - Previous_Month_Reviews) / Previous_Month_Reviews

// Quality Score
=IF(Verified_Percentage > 0.8, "High", 
   IF(Verified_Percentage > 0.5, "Medium", "Low"))
```

## 🔐 Security & Privacy

### Data Protection
- **Encryption**: All data transmitted via HTTPS/TLS
- **Access Control**: Role-based permissions (view/edit/admin)
- **Audit Logging**: Complete activity tracking
- **Data Retention**: Configurable retention policies

### Privacy Compliance
```typescript
interface PrivacyConfig {
  anonymization: {
    guestNames: 'Replace with generic identifiers';
    personalInfo: 'Remove email addresses and phone numbers';
    locationData: 'Generalize to city level';
  };
  dataMinimization: {
    reviewContent: 'Truncate to essential information';
    metadata: 'Include only business-relevant fields';
    retention: 'Auto-delete after specified period';
  };
  consent: {
    dataProcessing: 'Explicit consent for analytics';
    sharing: 'Permission for team collaboration';
    export: 'Approval for external data transfer';
  };
}
```

### Access Management
- **Team Permissions**: Granular access control by role
- **Sharing Controls**: Link expiration and password protection
- **Activity Monitoring**: Track all sheet access and modifications
- **Backup & Recovery**: Automated daily backups with point-in-time recovery

## 🛠 Troubleshooting

### Common Issues

#### Authentication Problems
**Symptoms**: "Access Denied" or "Permission Required" errors
**Solutions**:
1. Re-authorize Google Sheets access in Export Data section
2. Check Google account permissions and 2FA settings
3. Verify corporate Google Workspace policies
4. Clear browser cache and cookies

#### Data Sync Failures
**Symptoms**: Outdated data or missing updates
**Solutions**:
1. Check internet connectivity and firewall settings
2. Verify Google Sheets API quotas and limits
3. Review error logs in browser developer console
4. Manually trigger sync from Export Data interface

#### Formatting Issues
**Symptoms**: Incorrect number formats or broken charts
**Solutions**:
1. Check regional settings and locale configuration
2. Verify data type consistency across columns
3. Refresh pivot tables and chart data sources
4. Re-apply conditional formatting rules

#### Performance Problems
**Symptoms**: Slow loading or unresponsive sheets
**Solutions**:
1. Reduce data range or source selection
2. Archive historical data to separate sheets
3. Optimize formulas and remove unnecessary calculations
4. Use Google Sheets mobile app for better performance

### Support Resources
- **Help Documentation**: Comprehensive guides and tutorials
- **Video Tutorials**: Step-by-step setup and configuration
- **Community Forum**: User discussions and best practices
- **Technical Support**: Direct assistance for complex issues

## 📈 Best Practices

### Data Organization
1. **Consistent Naming**: Use standardized sheet and column names
2. **Regular Cleanup**: Archive old data and remove duplicates
3. **Version Control**: Maintain backup copies of important sheets
4. **Documentation**: Add comments and notes for complex formulas

### Performance Optimization
1. **Data Limits**: Keep sheets under 100,000 rows for optimal performance
2. **Formula Efficiency**: Use array formulas and avoid volatile functions
3. **Chart Management**: Limit charts to essential visualizations
4. **Sharing Restrictions**: Minimize edit permissions to prevent conflicts

### Collaboration Guidelines
1. **Role Definition**: Clearly define viewer, editor, and admin roles
2. **Change Management**: Communicate major modifications to team
3. **Backup Strategy**: Regular exports to prevent data loss
4. **Training Program**: Ensure team members understand sheet functionality

### Analytics Workflow
1. **Daily Monitoring**: Quick review of key metrics and alerts
2. **Weekly Analysis**: Detailed trend analysis and performance review
3. **Monthly Reporting**: Comprehensive stakeholder presentations
4. **Quarterly Planning**: Strategic decisions based on data insights

## 🔮 Advanced Features

### API Integration
```javascript
// Google Apps Script for custom automation
function updateReviewData() {
  const apiUrl = 'https://hotel-aggregator-api.com/reviews';
  const response = UrlFetchApp.fetch(apiUrl, {
    headers: { 'Authorization': 'Bearer ' + API_TOKEN }
  });
  
  const data = JSON.parse(response.getContentText());
  const sheet = SpreadsheetApp.getActiveSheet();
  
  // Update sheet with fresh data
  sheet.getRange('A2:Z').clearContent();
  sheet.getRange(2, 1, data.length, data[0].length).setValues(data);
}
```

### Custom Dashboards
Create personalized dashboards with:
- **Executive Summary**: High-level KPIs for leadership
- **Operational Dashboard**: Detailed metrics for managers
- **Competitive Analysis**: Benchmark comparisons
- **Trend Monitoring**: Historical performance tracking

### Integration Ecosystem
Connect with other business tools:
- **CRM Systems**: Salesforce, HubSpot integration
- **BI Platforms**: Tableau, Power BI connectors
- **Communication**: Slack, Microsoft Teams notifications
- **Revenue Management**: PMS and booking system integration

---

**Need Help?** Contact our support team or visit the documentation portal for additional resources and tutorials.