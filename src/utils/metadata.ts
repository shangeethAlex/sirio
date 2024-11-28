import { useEffect } from 'react';

interface MetadataConfig {
  title: string;
  description: string;
  image: string;
  url: string;
  type?: string;
  imageWidth?: string;
  imageHeight?: string;
  imageAlt?: string;
}

const metadata: Record<string, MetadataConfig> = {
  '/': {
    title: 'Sirio Berati | AI Creative Studio',
    description: 'Explore the intersection of AI and creativity with Sirio Berati. Digital creator, AI innovator, and creative consultant helping brands leverage artificial intelligence.',
    image: 'https://i.ibb.co/6v8BcSF/Sirio.jpg',
    url: 'https://sirioberati.com',
    type: 'website',
    imageWidth: '1200',
    imageHeight: '1200',
    imageAlt: 'Sirio Berati Profile'
  },
  '/guide': {
    title: 'Create Your AI Avatar | Free Realistic AI Portrait Guide',
    description: 'Learn how to create stunning AI avatars and realistic AI portraits with our comprehensive guide. Master AI model training and achieve photorealistic results in minutes!',
    image: 'https://i.ibb.co/X4Fjbpy/Screenshot-2024-11-25-at-8-54-02-PMasdfasd.png',
    url: 'https://sirioberati.com/guide',
    type: 'article',
    imageWidth: '1920',
    imageHeight: '1080',
    imageAlt: 'Create Your AI Avatar Guide Preview'
  }
};

export const useMetadata = () => {
  useEffect(() => {
    const updateMetadata = () => {
      const path = window.location.pathname;
      const meta = metadata[path] || metadata['/'];

      // Update basic meta tags
      document.title = meta.title;
      document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);

      // Update Open Graph tags
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.title);
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta.description);
      document.querySelector('meta[property="og:image"]')?.setAttribute('content', meta.image);
      document.querySelector('meta[property="og:url"]')?.setAttribute('content', meta.url);
      document.querySelector('meta[property="og:type"]')?.setAttribute('content', meta.type || 'website');
      document.querySelector('meta[property="og:image:width"]')?.setAttribute('content', meta.imageWidth || '1200');
      document.querySelector('meta[property="og:image:height"]')?.setAttribute('content', meta.imageHeight || '1200');
      document.querySelector('meta[property="og:image:alt"]')?.setAttribute('content', meta.imageAlt || meta.title);

      // Update Twitter tags
      document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', meta.title);
      document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', meta.description);
      document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', meta.image);
      document.querySelector('meta[name="twitter:url"]')?.setAttribute('content', meta.url);

      // Update canonical URL
      document.querySelector('link[rel="canonical"]')?.setAttribute('href', meta.url);
    };

    // Update metadata on initial load
    updateMetadata();

    // Listen for route changes if using client-side routing
    window.addEventListener('popstate', updateMetadata);
    
    return () => {
      window.removeEventListener('popstate', updateMetadata);
    };
  }, []);
};