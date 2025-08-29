export interface Hotel {
  id: string;
  name: string;
  location: string;
  image: string;
  address: string;
  phone?: string;
  website?: string;
  star_rating?: number;
}

export interface ReviewSource {
  id: string;
  name: string;
  url: string;
  enabled: boolean;
  last_scraped?: string;
  status: 'active' | 'error' | 'pending';
  api_key?: string;
}

export interface Review {
  id: string;
  rating: number;
  text: string;
  author: string;
  date: string;
  verified: boolean;
  helpful_votes?: number;
  response?: string;
}

export interface ReviewData {
  id: string;
  source: string;
  hotelId: string;
  overall_rating: number;
  review_count: number;
  recent_reviews: Review[];
  rating_distribution: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
  last_updated: string;
}

export interface AnalyticsData {
  overall_score: number;
  total_reviews: number;
  trend: 'up' | 'down' | 'stable';
  source_comparison: {
    source: string;
    rating: number;
    count: number;
  }[];
  monthly_trends: {
    month: string;
    average_rating: number;
    review_count: number;
  }[];
}