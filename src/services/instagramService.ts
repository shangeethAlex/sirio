interface InstagramStats {
  followers: number;
  success: boolean;
}

const FALLBACK_STATS: InstagramStats = {
  followers: 34400,
  success: false
};

export const getInstagramStats = async (): Promise<InstagramStats> => {
  try {
    const response = await fetch(
      'https://instagram-scraper-api2.p.rapidapi.com/v2/instagram/user/heysirio',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '0591d45259msh1088e2a5a6b954cp16481ajsn0bac0b73913d',
          'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com',
          'accept': 'application/json'
        }
      }
    );

    if (!response.ok) {
      console.warn(`API returned ${response.status}. Using fallback stats.`);
      return FALLBACK_STATS;
    }

    const data = await response.json();
    
    if (data?.followers_count) {
      return {
        followers: Number(data.followers_count),
        success: true
      };
    }

    console.warn('API response missing followers count. Using fallback stats.');
    return FALLBACK_STATS;
  } catch (error) {
    console.warn('Failed to fetch Instagram stats:', error instanceof Error ? error.message : 'Unknown error');
    return FALLBACK_STATS;
  }
};