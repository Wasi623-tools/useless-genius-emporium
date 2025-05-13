
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";

const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY") || "";

// Fallback responses by category for when the API is unavailable
const fallbackResponses = {
  "Bad Joke Hotline": [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "What do you call a fake noodle? An impasta!"
  ],
  "Useless But Fun": [
    "Save time by sleeping in your work clothes—you'll gain an extra 3 minutes every morning!",
    "Increase storage space in your freezer by removing ice cube trays. Who needs ice anyway?",
    "Turn any pair of socks into fingerless gloves by cutting the toes off. Fashion!"
  ],
  "Bad Advice Bot": [
    "Got locked out of your house? Just break a window. It's your house after all!",
    "Car making a funny noise? Turn up the radio. Problem solved!",
    "Save money on haircuts by using kitchen scissors and a YouTube tutorial!"
  ],
  "Awkward Compliments": [
    "Your ears are positioned on your head in a very symmetrical way. It's impressive!",
    "You blink at a very reasonable frequency. Not too much, not too little.",
    "You have the most average-looking elbows I've ever seen!"
  ],
  "Passive-Aggressive Notes": [
    "Wow! I didn't know the dishwasher could be used as art storage for dirty dishes!",
    "Thanks for letting me know the sound of your music at 3AM. I wasn't using that sleep anyway!",
    "Loving how you reserved the entire refrigerator for your leftovers. So thoughtful!"
  ],
  "Exaggerated Life Problems": [
    "Forgot someone's name? Legally change your name to avoid the awkwardness.",
    "Phone battery at 10%? Time to update your will and say goodbye to loved ones.",
    "Spilled coffee on your shirt? Burn your entire wardrobe and move to a new city."
  ],
  "Clickbait Generator": [
    "10 Shocking Reasons Your Toaster Is Secretly Plotting Against You—#7 Will Make You Toast!",
    "This Person Breathed Oxygen And You Won't Believe What Happened Next!",
    "Scientists Discover That Water Is Wet And It's Breaking The Internet!"
  ]
};

// Get a random item from an array
const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { category, prompt, language = "en" } = await req.json();
    
    if (!GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY not found");
    }

    console.log(`Generating content for category: ${category} in language: ${language}`);
    
    try {
      // System message for content generation with language instruction
      const systemMessage = `You are an AI specialized in generating funny, creative content. 
      You're helping with a website called "Pointlessly Genius" that creates humorous, useless content.
      Generate exactly ONE response for the category: ${category}.
      Keep it concise (1-2 sentences max), funny, and suitable for general audiences.
      Don't include any explanations, just the generated content.
      IMPORTANT: Your response MUST be in ${language} language.`;
      
      // Prepare the API request to Gemini 2.0 Flash
      const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
      
      const response = await fetch(`${url}?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${systemMessage}\n\nCategory: ${category}\nPrompt: ${prompt || "Generate something funny"}\nLanguage: ${language}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.9,
            maxOutputTokens: 100
          }
        })
      });

      const data = await response.json();
      
      // Check if there's an error in the API response
      if (data.error) {
        console.error("Gemini API error:", data.error);
        throw new Error(`Gemini API error: ${data.error.message}`);
      }
      
      // Extract the text from the response
      let generatedText;
      try {
        // Updated to match the Gemini 2.0 response format
        generatedText = data.candidates[0].content.parts[0].text;
        console.log("Generated text:", generatedText);
        
        return new Response(JSON.stringify({ result: generatedText }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200
        });
      } catch (err) {
        console.error("Error extracting text from Gemini response:", data);
        throw new Error("Failed to extract text from Gemini response");
      }
      
    } catch (apiError) {
      // If there's a Gemini API error, use a fallback response
      console.log("Using fallback response due to API error:", apiError.message);
      
      // Get fallback responses for this category or use a generic one
      const categoryResponses = fallbackResponses[category] || [
        "Even AIs need a break sometimes. Here's something pointlessly genius anyway!",
        "AI on vacation, but still delivering pointless genius content for you!",
        "This content was organically human-made due to AI overload. Enjoy!"
      ];
      
      const fallbackContent = getRandomItem(categoryResponses);
      
      return new Response(JSON.stringify({ 
        result: fallbackContent,
        fallback: true 
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200
      });
    }
    
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500
    });
  }
});
