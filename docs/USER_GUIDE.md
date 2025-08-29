# Hotel Review Aggregator - User Guide

## 📖 Table of Contents
1. [Getting Started](#getting-started)
2. [Dashboard Overview](#dashboard-overview)
3. [Managing Review Sources](#managing-review-sources)
4. [Analytics & Insights](#analytics--insights)
5. [Exporting Data](#exporting-data)
6. [Best Practices](#best-practices)
7. [Troubleshooting](#troubleshooting)

## 🚀 Getting Started

### First Time Setup
1. **Access the Application**: Navigate to the deployed app URL
2. **Select Your Hotel**: Choose your property from the hotel selection grid
3. **Review Default Sources**: Check pre-configured OTA platforms
4. **Verify Data**: Ensure review data is loading correctly

### Navigation Overview
The application features five main sections:
- **Dashboard**: Overview and hotel selection
- **Review Sources**: OTA link management
- **Analytics**: Detailed insights and trends
- **Export Data**: Google Sheets integration
- **Documentation**: Technical guides and references

## 🏨 Dashboard Overview

### Hotel Selection
The dashboard begins with a hotel selection interface featuring:
- **Visual Grid**: Hotel cards with images and star ratings
- **Property Details**: Name, location, and contact information
- **Selection Indicator**: Blue border highlights selected hotel

### Key Metrics Cards
Once a hotel is selected, four metric cards display:

#### Overall Rating Card (Blue)
- **Primary Metric**: Weighted average across all sources
- **Scale**: 1.0 to 5.0 stars
- **Trend Indicator**: Up/down/stable arrows

#### Total Reviews Card (Green)
- **Primary Metric**: Sum of all reviews across platforms
- **Format**: Comma-separated thousands (e.g., 1,247)
- **Context**: Number of active sources

#### Review Sources Card (Orange)
- **Primary Metric**: Count of active platforms
- **Status**: Active vs. total configured sources
- **Trend**: Recent activity indicator

#### Last Updated Card (Purple)
- **Primary Metric**: Most recent data refresh timestamp
- **Format**: Localized date format
- **Freshness**: Color-coded recency indicator

### Source Breakdown Section
Individual platform performance cards showing:
- **Platform Name**: Booking.com, Agoda, etc.
- **Rating**: Platform-specific average rating
- **Review Count**: Number of reviews from this source
- **Progress Bar**: Visual rating representation (1-5 scale)

### Recent Reviews Feed
Scrollable list of latest reviews featuring:
- **Author Avatar**: Colored circle with initial
- **Review Content**: Truncated review text
- **Rating Stars**: 1-5 star visual rating
- **Timestamp**: Relative time (e.g., "2 days ago")
- **Verification Badge**: "Verified" label for authenticated reviews

### Search & Filter Controls
- **Search Box**: Full-text search across review content and authors
- **Source Filter**: Dropdown to filter by specific platforms
- **Real-time Updates**: Results update as you type

## 🔗 Managing Review Sources

### Adding New Sources
1. **Click "Add Source"**: Blue button in the header
2. **Fill Required Fields**:
   - **Source Name**: Platform name (e.g., "Booking.com")
   - **URL**: Direct link to hotel's page on the platform
   - **API Key**: Optional for platforms requiring authentication
3. **Enable/Disable**: Toggle scraping for this source
4. **Save**: Click "Add Source" to confirm

### Editing Existing Sources
1. **Click Edit Icon**: Pencil icon next to source name
2. **Modify Fields**: Update any configuration details
3. **Test Connection**: Verify URL accessibility
4. **Update**: Save changes

### Source Status Indicators
- **Green Circle**: Active and scraping successfully
- **Red Circle**: Error state, requires attention
- **Yellow Circle**: Pending activation or configuration

### Scraping Configuration
Global settings affecting all sources:
- **Frequency**: Every 6 hours (configurable)
- **Rate Limiting**: 1 request per 5 seconds
- **Data Retention**: 90 days of historical data

### Platform-Specific Notes

#### Booking.com
- **URL Format**: `https://booking.com/hotel/[country]/[hotel-name].html`
- **Special Requirements**: May require CAPTCHA solving
- **Data Points**: Overall rating, review count, recent reviews

#### Google Reviews
- **URL Format**: Google Maps business listing URL
- **Special Requirements**: JavaScript rendering needed
- **Data Points**: Star rating, review text, author names

#### TripAdvisor
- **URL Format**: `https://tripadvisor.com/Hotel_Review-[location]-[hotel-id].html`
- **Special Requirements**: Strong anti-bot measures
- **Data Points**: Bubble rating, detailed reviews, traveler types

#### Agoda
- **URL Format**: `https://agoda.com/[hotel-name]/hotel/[city].html`
- **Special Requirements**: Session management
- **Data Points**: Numeric rating, guest reviews, booking verification

#### MakeMyTrip
- **URL Format**: `https://makemytrip.com/hotels/[hotel-name]-details-[city].html`
- **Special Requirements**: Regional IP restrictions
- **Data Points**: Star rating, customer feedback, verified bookings

## 📊 Analytics & Insights

### Overview Metrics
Three primary metric cards provide high-level insights:

#### Overall Rating (Blue Card)
- **Calculation**: Weighted average based on review volume
- **Trend Analysis**: Comparison with previous period
- **Visual Indicator**: Trending up/down/stable arrows

#### Total Reviews (Green Card)
- **Aggregation**: Sum across all active sources
- **Growth Tracking**: Month-over-month change
- **Source Distribution**: Breakdown by platform

#### Active Sources (Purple Card)
- **Count**: Number of successfully scraping platforms
- **Health Status**: Overall system health indicator
- **Performance**: Average response times

### Rating Distribution
Horizontal bar chart showing:
- **5-Star Reviews**: Percentage and count
- **4-Star Reviews**: Percentage and count
- **3-Star Reviews**: Percentage and count
- **2-Star Reviews**: Percentage and count
- **1-Star Reviews**: Percentage and count

**Interpretation Tips**:
- High 5-star percentage indicates excellent service
- Balanced distribution suggests authentic reviews
- Unusual spikes may indicate review manipulation

### Source Performance Comparison
Grid of platform-specific cards showing:
- **Individual Ratings**: Platform-specific averages
- **Review Volume**: Number of reviews per source
- **Market Share**: Percentage of total reviews
- **Performance Ranking**: Sorted by rating

### Trend Analysis
Six-month trend visualization displaying:
- **Monthly Averages**: Rating trends over time
- **Review Volume**: Number of reviews per month
- **Seasonal Patterns**: Identify peak/low seasons
- **Performance Correlation**: Rating vs. volume relationships

### Key Performance Indicators (KPIs)
- **Average Rating**: Target 4.0+ for competitive positioning
- **Review Velocity**: Aim for consistent monthly growth
- **Source Diversity**: Maintain presence across 3+ platforms
- **Response Rate**: Monitor and improve guest engagement

## 📤 Exporting Data

### Export Formats
Two primary export options:

#### Excel Export (.xlsx)
- **File Format**: Microsoft Excel compatible
- **Data Structure**: Structured worksheets with multiple tabs
- **Use Case**: Offline analysis, presentations, archival

#### Google Sheets Integration
- **Real-time Sync**: Automatic updates every 6 hours
- **Collaborative**: Share with team members
- **API Integration**: Connect with other business tools

### Export Configuration

#### Date Range Selection
- **All Time**: Complete historical data
- **Last 30 Days**: Recent performance focus
- **Last 3 Months**: Quarterly analysis
- **Last Year**: Annual reporting

#### Source Selection
- **All Sources**: Complete platform coverage
- **Specific Platforms**: Focus on key OTAs
- **Custom Selection**: Choose multiple sources

#### Data Options
- **Include Metadata**: Rating distributions, timestamps
- **Review Samples**: Recent review text examples
- **Trend Data**: Historical performance metrics

### Google Sheets Setup

#### Initial Configuration
1. **Click "Export to Google Sheets"**
2. **Authorize Access**: Grant necessary permissions
3. **Select Destination**: Choose existing sheet or create new
4. **Configure Auto-sync**: Enable automatic updates

#### Sheet Structure
The exported Google Sheet includes:

**Summary Tab**:
- Hotel information and contact details
- Overall metrics and KPIs
- Source performance summary
- Last update timestamp

**Detailed Data Tab**:
- Row-by-row source breakdown
- Individual platform metrics
- Rating distribution data
- Historical trend information

**Reviews Sample Tab**:
- Recent review excerpts
- Author information (anonymized)
- Rating and date information
- Source platform identification

#### Automation Features
- **Scheduled Updates**: Every 6 hours automatically
- **Change Notifications**: Email alerts for significant changes
- **Data Validation**: Automatic error checking and correction
- **Backup Creation**: Daily snapshots for data recovery

### Export Best Practices
1. **Regular Exports**: Weekly for active monitoring
2. **Stakeholder Sharing**: Monthly executive summaries
3. **Trend Analysis**: Quarterly performance reviews
4. **Data Backup**: Maintain local copies for security

## 💡 Best Practices

### Data Quality Management
1. **Regular Audits**: Weekly review of source accuracy
2. **URL Validation**: Monthly check of all OTA links
3. **Data Freshness**: Monitor last update timestamps
4. **Error Monitoring**: Address scraping failures promptly

### Performance Optimization
1. **Source Prioritization**: Focus on high-volume platforms
2. **Update Frequency**: Balance freshness with system load
3. **Filter Usage**: Use search and filters for focused analysis
4. **Export Scheduling**: Automate routine data exports

### Stakeholder Communication
1. **Dashboard Sharing**: Provide access to key team members
2. **Regular Reports**: Weekly/monthly performance summaries
3. **Trend Alerts**: Notify of significant rating changes
4. **Action Plans**: Develop responses to negative trends

### Competitive Analysis
1. **Benchmark Tracking**: Compare with competitor properties
2. **Market Positioning**: Understand relative performance
3. **Opportunity Identification**: Find improvement areas
4. **Strategy Development**: Data-driven decision making

## 🔧 Troubleshooting

### Common Issues

#### No Data Showing
**Symptoms**: Empty dashboard, zero review counts
**Causes**: 
- Incorrect hotel selection
- All sources disabled
- Network connectivity issues
**Solutions**:
1. Verify hotel is selected in dashboard
2. Check Review Sources tab for enabled platforms
3. Refresh browser and check internet connection

#### Outdated Information
**Symptoms**: Old timestamps, stale review data
**Causes**:
- Scraping failures
- Platform blocking
- Configuration errors
**Solutions**:
1. Check source status indicators
2. Verify OTA URLs are still valid
3. Review error logs in browser console

#### Export Failures
**Symptoms**: Export button not working, incomplete data
**Causes**:
- Google Sheets permissions
- Large dataset size
- Browser compatibility
**Solutions**:
1. Re-authorize Google Sheets access
2. Reduce date range or source selection
3. Try different browser or clear cache

#### Slow Performance
**Symptoms**: Long loading times, unresponsive interface
**Causes**:
- Large dataset processing
- Multiple concurrent users
- Browser resource limitations
**Solutions**:
1. Use filters to reduce data volume
2. Close unnecessary browser tabs
3. Clear browser cache and cookies

### Getting Help
- **Documentation**: Refer to technical documentation
- **Support Email**: Contact system administrator
- **User Community**: Join user discussion forums
- **Feature Requests**: Submit enhancement suggestions

### System Requirements
- **Browser**: Chrome 90+, Firefox 88+, Safari 14+
- **Internet**: Stable broadband connection
- **Screen**: Minimum 1024x768 resolution
- **JavaScript**: Must be enabled

---

**Need additional help?** Contact our support team or refer to the technical documentation for advanced configuration options.