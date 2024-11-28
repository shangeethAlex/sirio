export const trainingSteps = [
  {
    title: "Setting Up",
    content: "Go to <a href=\"https://fal.ai\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-sirio-blue hover:text-sirio-blue-dark\">fal.ai</a>. This is where we will train your digital avatar. Create an account and top it up with $10. Only $2 of that will be used for training. Fast training takes about 5 minutes—that's all you need!"
  },
  {
    title: "Finding Flux Portrait Trainer",
    content: "Once you've logged in, go over to the Explore.",
    image: {
      src: "https://i.ibb.co/nBkGM30/Explore-Interface.png",
      alt: "Fal.ai Explore Interface"
    },
    additionalContent: "Then look for \"Flux Lora Portrait.\" Flux is the checkpoint we're using to train. If you're not familiar with AI image training, there are a few base checkpoints out there for image generation: Stable Diffusion XL, Stable Diffusion 1.5, and the latest and best for realistic images—FLUX.",
    image2: {
      src: "https://i.ibb.co/8YzV5hL/Lora-Trainer.png",
      alt: "Flux Lora Portrait Interface"
    },
    features: [
      "Fine Details: Highlights, textures, and anatomy are more precise",
      "Prompt Fidelity: Follows even complex prompts with accuracy",
      "Resemblance: Captures your identity flawlessly, even in creative scenarios",
      "Small Faces: Maintains details in distant or miniature elements"
    ]
  },
  {
    title: "Uploading Images",
    content: "Now, after clicking to train the Flux Portrait LoRA, let's upload our images. Select your 50-200 high-quality JPGs and drag and drop them into the section indicated on fal.ai. You can add up to as many images as you like. The more, the merrier, but make sure you've curated the dataset. This is the most important step!",
    image: {
      src: "https://i.ibb.co/gJ1jTTf/Image-Dataset.png",
      alt: "Image Dataset Upload Interface"
    }
  },
  {
    title: "Setting Trigger Word",
    content: "After inputting the dataset, choose a trigger word. A trigger word helps the AI understand when you are prompting it. For example, my trigger word for my Digital AI Model is <span class=\"inline-flex items-center justify-center px-3 py-1 bg-sirio-blue/10 text-sirio-blue rounded-full font-medium\">\"Sirio\"</span>, which is my name. You can use your name in this case. We'll use the trigger word later to get AI image outputs. Remember this step—it's important!",
    image: {
      src: "https://i.ibb.co/VQjXV7z/Trigger-Word.png",
      alt: "Setting the Trigger Word"
    }
  },
  {
    title: "Training Steps",
    content: "Select the amount of steps. The defaults are good for ~16 images. For optimal results with different dataset sizes, check out our Pro Guide which includes: <span class=\"text-sirio-blue font-medium\">Advanced Training Configurations</span> 🔒",
    proFeatures: [
      "Optimize steps for small datasets (4 images)",
      "Maximum quality for large datasets (50+ images)",
      "Cost-effective training strategies",
      "Professional fine-tuning techniques"
    ],
    image: {
      src: "https://i.ibb.co/3h0CXYx/Training-Steps.png",
      alt: "Training Steps Configuration"
    },
    proContent: true,
    proCallToAction: "Unlock Advanced Training Guide"
  },
  {
    title: "Start Training",
    content: "Click Start and let the model train. Check back in 5 minutes. Do not close the window.",
    image: {
      src: "https://i.ibb.co/dp8fcSF/Screenshot-2024-11-26-at-9-06-02-PM.png",
      alt: "Start Training Interface"
    }
  },
  {
    title: "Run Interface",
    content: "When the model has finished training, on your right, you will see a green label \"Completed.\" Next to it, there's a button called \"Run Interface.\" Click that. You're now ready to generate images! It will give you the link of your AI Digital Model on the next screen!",
    image: {
      src: "https://i.ibb.co/0y24Tvk/Run-Interface.png",
      alt: "Run Interface Button"
    }
  }
];