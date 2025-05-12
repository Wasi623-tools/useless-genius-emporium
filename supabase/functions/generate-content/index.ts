
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";

const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY") || "";

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { category, prompt } = await req.json();
    
    if (!GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY not found");
    }

    // System message for content generation
    const systemMessage = `You are an AI specialized in generating funny, creative content. 
    You're helping with a website called "Pointlessly Genius" that creates humorous, useless content.
    Generate exactly ONE response for the category: ${category}.
    Keep it concise (1-2 sentences max), funny, and suitable for general audiences.
    Don't include any explanations, just the generated content.`;

    console.log(`Generating content for category: ${category}`);
    
    // Prepare the API request to Gemini
    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent";
    
    const response = await fetch(`${url}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `${systemMessage}\n\nCategory: ${category}\nPrompt: ${prompt || "Generate something funny"}`
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
    
    // Extract the text from the response
    let generatedText;
    try {
      generatedText = data.candidates[0].content.parts[0].text;
      console.log("Generated text:", generatedText);
    } catch (err) {
      console.error("Error extracting text from Gemini response:", data);
      throw new Error("Failed to extract text from Gemini response");
    }

    return new Response(JSON.stringify({ result: generatedText }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500
    });
  }
});
