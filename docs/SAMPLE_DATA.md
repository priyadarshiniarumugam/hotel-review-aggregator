# Sample Data Structure for Google Sheets Export

## 📊 Overview

This document provides comprehensive sample data structures that demonstrate how the Hotel Review Aggregator exports data to Google Sheets. The examples show realistic hotel review scenarios with proper formatting, data types, and organizational structure.

## 🏨 Sample Hotel Data

### Hotel Properties
```csv
Hotel ID,Hotel Name,Location,Address,Phone,Website,Star Rating,Image URL
hotel-1,The Grand Palace Hotel,Mumbai India,"123 Marine Drive, Mumbai, Maharashtra 400001",+91 22 1234 5678,https://grandpalace.com,5,https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg
hotel-2,Seaside Resort & Spa,Goa India,"456 Beach Road, Calangute, Goa 403516",+91 832 123 4567,https://seasideresort.com,4,https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg
hotel-3,Mountain View Lodge,Manali India,"789 Hill Station Road, Manali, Himachal Pradesh 175131",+91 1902 123456,https://mountainviewlodge.com,3,https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg
```

## 📈 Executive Summary Sheet

### Sample Executive Summary Data
```csv
Metric,Value,Trend,Change,Period,Target,Status
Overall Rating,4.2,↑,+0.1,Last 30 days,4.0,✅ Above Target
Total Reviews,"1,247",↑,+89,Last 30 days,"1,000",✅ Above Target
Active Sources,5,→,0,Current,5,✅ On Target
Response Rate,78%,↑,+5%,Last 30 days,75%,✅ Above Target
Average Response Time,2.3 days,↓,-0.5,Last 30 days,3.0 days,✅ Below Target
Review Velocity,89 reviews/month,↑,+12,Last 30 days,75,✅ Above Target
Sentiment Score,82%,↑,+3%,Last 30 days,80%,✅ Above Target
```

### Key Performance Indicators
```csv
KPI Category,Current Value,Previous Period,Change %,Benchmark,Performance
Guest Satisfaction,4.2/5.0,4.1/5.0,+2.4%,4.0/5.0,Exceeding
Review Volume,"1,247","1,158",+7.7%,"1,000",Strong Growth
Platform Coverage,5 sources,5 sources,0%,4+ sources,Optimal
Data Freshness,< 6 hours,< 6 hours,0%,< 24 hours,Excellent
Response Quality,78% responded,73% responded,+6.8%,70%,Above Average
```

## 🔍 Source Performance Sheet

### Platform Comparison Data
```csv
Source,Overall Rating,Review Count,Market Share,Trend,Last Updated,Status,API Status,Scraping Success Rate
Booking.com,4.3,"1,247",42%,↑,2024-01-15 14:30,Active,Connected,98.5%
Google Reviews,4.1,312,25%,→,2024-01-15 14:25,Active,API Key Valid,99.2%
TripAdvisor,4.0,234,19%,↓,2024-01-14 23:45,Active,Session Active,94.8%
Agoda,4.2,178,14%,↑,2024-01-15 13:15,Active,Connected,97.1%
MakeMyTrip,3.9,89,7%,→,2024-01-15 12:00,Pending,Configuration Required,85.3%
```

### Detailed Source Metrics
```csv
Source,Avg Rating,5★,4★,3★,2★,1★,Total Reviews,Verified %,Response Rate,Avg Response Time
Booking.com,4.3,523,412,201,89,22,"1,247",89%,82%,1.8 days
Google Reviews,4.1,134,98,56,18,6,312,95%,71%,2.1 days
TripAdvisor,4.0,98,87,34,12,3,234,76%,68%,3.2 days
Agoda,4.2,89,67,18,3,1,178,91%,85%,1.5 days
MakeMyTrip,3.9,34,28,19,6,2,89,83%,79%,2.8 days
```

## ⭐ Rating Distribution Sheet

### Rating Breakdown by Source
```csv
Source,Total Reviews,5 Star Count,5 Star %,4 Star Count,4 Star %,3 Star Count,3 Star %,2 Star Count,2 Star %,1 Star Count,1 Star %
Booking.com,"1,247",523,41.9%,412,33.0%,201,16.1%,89,7.1%,22,1.8%
Google Reviews,312,134,42.9%,98,31.4%,56,17.9%,18,5.8%,6,1.9%
TripAdvisor,234,98,41.9%,87,37.2%,34,14.5%,12,5.1%,3,1.3%
Agoda,178,89,50.0%,67,37.6%,18,10.1%,3,1.7%,1,0.6%
MakeMyTrip,89,34,38.2%,28,31.5%,19,21.3%,6,6.7%,2,2.2%
```

### Monthly Rating Distribution
```csv
Month,Overall Avg,5★ %,4★ %,3★ %,2★ %,1★ %,Total Reviews,Quality Score
Jan 2024,4.2,42.1%,33.2%,16.8%,6.1%,1.8%,89,High
Dec 2023,4.1,40.8%,34.2%,17.1%,6.6%,1.3%,76,High
Nov 2023,4.0,39.0%,35.4%,18.3%,5.9%,1.4%,82,Medium
Oct 2023,4.1,41.2%,33.8%,17.6%,6.2%,1.2%,94,High
Sep 2023,3.9,38.3%,36.2%,18.1%,6.4%,1.0%,71,Medium
Aug 2023,4.0,40.1%,34.6%,17.8%,6.3%,1.2%,88,High
```

## 📝 Recent Reviews Sheet

### Sample Review Data
```csv
Date,Source,Rating,Author,Review Title,Review Text (Excerpt),Verified,Helpful Votes,Hotel Response,Response Date,Sentiment
2024-01-15,Booking.com,5,Guest123,Excellent Experience,"Absolutely wonderful stay! The staff was incredibly helpful and the location perfect for exploring the city. Room was clean and comfortable with amazing views...",Yes,12,Thank you for your wonderful review! We're delighted you enjoyed your stay.,2024-01-16,Positive
2024-01-15,Google Reviews,4,John D.,Great Hotel with Minor Issues,"Overall a great experience. The hotel is well-located and the staff is friendly. Only minor complaint was the WiFi speed in the room could be better...",Yes,8,Thank you for your feedback. We're working on improving our WiFi infrastructure.,2024-01-17,Positive
2024-01-14,TripAdvisor,3,Traveler456,Average Experience,"The hotel was okay for the price. Location is good but the room was smaller than expected. Service was average. Would consider other options next time...",No,3,We appreciate your honest feedback and will work to improve our services.,2024-01-18,Neutral
2024-01-14,Agoda,5,Guest789,Perfect Stay!,"Everything was perfect from check-in to check-out. The concierge helped us plan our itinerary and the breakfast was delicious. Highly recommend!",Yes,15,Thank you so much! We're thrilled you had a perfect stay with us.,2024-01-15,Positive
2024-01-13,Booking.com,4,Mary S.,Good Value for Money,"Nice hotel with good amenities. The pool area was particularly enjoyable. Staff was professional and courteous. Would definitely stay again.",Yes,6,Thank you for choosing us! We look forward to welcoming you back.,2024-01-16,Positive
```

### Review Analytics Summary
```csv
Period,Total Reviews,Avg Rating,Positive %,Neutral %,Negative %,Response Rate,Avg Response Time,Top Keywords
Last 7 days,23,4.3,78%,17%,5%,87%,1.8 days,"location, staff, clean"
Last 30 days,89,4.2,74%,21%,5%,82%,2.1 days,"service, room, location"
Last 90 days,267,4.1,72%,23%,5%,79%,2.3 days,"staff, location, value"
```

## 📊 Trend Analysis Sheet

### Monthly Performance Trends
```csv
Month,Avg Rating,Review Count,Booking.com,Google,TripAdvisor,Agoda,MakeMyTrip,Growth Rate,Seasonal Index
Jan 2024,4.2,89,4.3,4.1,4.0,4.2,3.9,+17.1%,1.15
Dec 2023,4.1,76,4.2,4.0,3.9,4.1,3.8,+7.0%,0.98
Nov 2023,4.0,82,4.1,3.9,3.8,4.0,3.7,+8.7%,1.05
Oct 2023,4.1,94,4.2,4.0,3.9,4.1,3.8,+24.7%,1.21
Sep 2023,3.9,71,4.0,3.8,3.7,3.9,3.6,-6.6%,0.91
Aug 2023,4.0,88,4.1,3.9,3.8,4.0,3.7,+16.0%,1.13
```

### Competitive Benchmarking
```csv
Metric,Our Hotel,Market Average,Competitor A,Competitor B,Competitor C,Ranking,Percentile
Overall Rating,4.2,3.8,4.0,3.9,4.1,2nd,85th
Review Volume,"1,247",856,"1,089",743,"1,156",2nd,82nd
Response Rate,82%,65%,71%,58%,79%,1st,95th
Avg Response Time,2.1 days,3.2 days,2.8 days,4.1 days,2.3 days,1st,92nd
5-Star Percentage,42.1%,38.2%,39.8%,36.5%,41.2%,1st,88th
```

## 🔧 Data Quality Metrics

### Data Freshness Tracking
```csv
Source,Last Successful Scrape,Data Age (Hours),Success Rate (7d),Error Count,Status,Next Scheduled Update
Booking.com,2024-01-15 14:30:15,2.5,98.5%,1,✅ Healthy,2024-01-15 20:30
Google Reviews,2024-01-15 14:25:42,2.6,99.2%,0,✅ Healthy,2024-01-15 20:25
TripAdvisor,2024-01-14 23:45:18,14.8,94.8%,3,⚠️ Degraded,2024-01-15 17:45
Agoda,2024-01-15 13:15:33,3.7,97.1%,2,✅ Healthy,2024-01-15 19:15
MakeMyTrip,2024-01-15 12:00:00,5.0,85.3%,8,❌ Issues,2024-01-15 18:00
```

### Data Validation Results
```csv
Validation Rule,Pass Count,Fail Count,Success Rate,Last Check,Status,Action Required
Rating Range (1-5),2058,2,99.9%,2024-01-15 14:30,✅ Pass,None
Review Count > 0,2060,0,100%,2024-01-15 14:30,✅ Pass,None
Date Format Valid,2057,3,99.9%,2024-01-15 14:30,✅ Pass,Minor cleanup
Source Name Valid,2060,0,100%,2024-01-15 14:30,✅ Pass,None
Text Length > 10,2045,15,99.3%,2024-01-15 14:30,✅ Pass,Review short entries
```

## 📱 Export Configuration

### Sample Export Settings
```csv
Setting,Value,Description,Last Modified,Modified By
Export Format,Google Sheets,Primary export destination,2024-01-10,admin@hotel.com
Update Frequency,6 hours,Automatic sync interval,2024-01-05,manager@hotel.com
Date Range,Last 90 days,Historical data scope,2024-01-12,analyst@hotel.com
Include Metadata,Yes,Additional data fields,2024-01-08,admin@hotel.com
Notification Email,team@hotel.com,Alert recipient,2024-01-03,admin@hotel.com
Sheet Permissions,Edit,Team access level,2024-01-07,manager@hotel.com
```

### Data Processing Log
```csv
Timestamp,Action,Records Processed,Duration (seconds),Status,Errors,Notes
2024-01-15 14:30:15,Full Export,2060,45.2,Success,0,All sources updated
2024-01-15 08:30:12,Incremental Update,23,12.8,Success,0,New reviews only
2024-01-15 02:30:08,Scheduled Sync,156,28.4,Partial,3,TripAdvisor timeout
2024-01-14 20:30:05,Full Export,2037,42.1,Success,0,All sources updated
2024-01-14 14:30:02,Incremental Update,31,15.2,Success,0,New reviews only
```

## 🎯 Usage Analytics

### Sheet Access Statistics
```csv
User,Role,Last Access,Total Views,Edit Count,Export Count,Favorite Sheets
admin@hotel.com,Administrator,2024-01-15 14:45,234,45,12,"Executive Summary, Trends"
manager@hotel.com,Manager,2024-01-15 13:20,189,23,8,"Source Performance, Reviews"
analyst@hotel.com,Analyst,2024-01-15 12:15,156,67,15,"Rating Distribution, Trends"
marketing@hotel.com,Viewer,2024-01-14 16:30,89,0,3,"Executive Summary"
owner@hotel.com,Owner,2024-01-13 09:45,45,2,1,"Executive Summary"
```

### Feature Usage Metrics
```csv
Feature,Usage Count,Success Rate,Avg Duration,User Satisfaction,Last Used
Auto Export,156,98.7%,45.2s,4.8/5,2024-01-15 14:30
Manual Export,23,100%,38.1s,4.9/5,2024-01-15 11:20
Data Filtering,89,99.1%,12.3s,4.7/5,2024-01-15 13:45
Chart Generation,34,97.1%,28.7s,4.6/5,2024-01-15 10:15
Pivot Table Creation,12,91.7%,67.2s,4.4/5,2024-01-14 15:30
```

---

**Note**: All sample data is generated for demonstration purposes and represents realistic hotel review scenarios. Actual data will vary based on your specific hotel properties and review sources.

**Data Privacy**: All guest names and personal information in the samples are anonymized or fictional to protect privacy while maintaining data structure integrity.