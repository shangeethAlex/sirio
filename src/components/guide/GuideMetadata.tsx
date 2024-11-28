import { Helmet } from 'react-helmet-async';

const GuideMetadata = () => {
  return (
    <Helmet>
      <title>Create Your AI Avatar | Free Realistic AI Portrait Guide</title>
      <meta name="description" content="Learn how to create stunning AI avatars and realistic AI portraits with our comprehensive guide. Master AI model training and achieve photorealistic results in minutes!" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://sirioberati.com/guide" />
      <meta property="og:title" content="Create Your AI Avatar | Free Realistic AI Portrait Guide" />
      <meta property="og:description" content="Learn how to create stunning AI avatars and realistic AI portraits with our comprehensive guide. Master AI model training and achieve photorealistic results in minutes!" />
      <meta property="og:image" content="https://i.ibb.co/X4Fjbpy/Screenshot-2024-11-25-at-8-54-02-PMasdfasd.png" />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:image:alt" content="Create Your AI Avatar Guide Preview" />
      <meta property="og:site_name" content="Sirio Berati" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://sirioberati.com/guide" />
      <meta name="twitter:title" content="Create Your AI Avatar | Free Realistic AI Portrait Guide" />
      <meta name="twitter:description" content="Learn how to create stunning AI avatars and realistic AI portraits with our comprehensive guide. Master AI model training and achieve photorealistic results in minutes!" />
      <meta name="twitter:image" content="https://i.ibb.co/X4Fjbpy/Screenshot-2024-11-25-at-8-54-02-PMasdfasd.png" />
      <meta name="twitter:creator" content="@heysirio" />
      <meta name="twitter:site" content="@heysirio" />

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Create Your AI Avatar",
          "description": "Learn how to create stunning AI avatars and realistic AI portraits with our comprehensive guide. Master AI model training and achieve photorealistic results in minutes!",
          "image": "https://i.ibb.co/X4Fjbpy/Screenshot-2024-11-25-at-8-54-02-PMasdfasd.png",
          "totalTime": "PT30M",
          "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "2"
          },
          "step": [
            {
              "@type": "HowToStep",
              "name": "Setup",
              "text": "Create an account and prepare your training images"
            },
            {
              "@type": "HowToStep",
              "name": "Train",
              "text": "Train your AI model with your photos"
            },
            {
              "@type": "HowToStep",
              "name": "Generate",
              "text": "Create realistic AI portraits using your trained model"
            }
          ],
          "author": {
            "@type": "Person",
            "name": "Sirio Berati",
            "url": "https://sirioberati.com/"
          }
        })}
      </script>
    </Helmet>
  );
};

export default GuideMetadata;