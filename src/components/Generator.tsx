import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Layout from './Layout';
import { supabase } from "@/integrations/supabase/client";
import { toast } from '@/components/ui/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { InfoIcon, Clipboard } from 'lucide-react';
import { Input } from '@/components/ui/input';
import SocialIcons from './SocialIcons';

interface GeneratorProps {
  emoji: string;
  title: string;
  description: string;
  buttonText?: string;
  placeholder?: string;
  buttonColor?: string;
  backgroundColor?: string;
}

const Generator: React.FC<GeneratorProps> = ({
  emoji,
  title,
  description,
  buttonText = "Generate",
  placeholder = "Your results will appear here...",
  buttonColor = "primary",
  backgroundColor = "white"
}) => {
  const [result, setResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isFallback, setIsFallback] = useState<boolean>(false);
  const [userPrompt, setUserPrompt] = useState<string>("");

  const handleGenerate = async () => {
    setIsLoading(true);
    setIsError(false);
    setIsFallback(false);
    
    try {
      console.log(`Generating content for category: ${title}`);
      
      // Call our Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('generate-content', {
        body: { 
          category: title,
          prompt: userPrompt || `Generate a funny ${title} content`
        }
      });
      
      if (error) {
        console.error("Supabase function error:", error);
        throw error;
      }
      
      console.log("API response:", data);
      
      if (data?.result) {
        setResult(data.result);
        // Check if this was a fallback response
        if (data.fallback) {
          setIsFallback(true);
          // Silent fallback, no popup
        }
      } else {
        throw new Error("No result returned from API");
      }
    } catch (error) {
      console.error("Error generating content:", error);
      setIsError(true);
      
      // Don't clear the result if we already have one - keep showing the previous result
      if (!result) {
        setResult("Oops! Even useless things break sometimes. Please try again!");
      }
      
      // No popup or toast notification about the error
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      toast({
        title: "Copied!",
        description: "Content copied to clipboard",
        variant: "default"
      });
    }
  };

  return (
    <Layout>
      <div className="fun-container">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{emoji}</div>
          <h1 className="fun-title">{title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">{description}</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6">
            <Input
              className="max-w-md"
              placeholder={`Enter your ${title.toLowerCase()} idea...`}
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
            />
            <Button 
              onClick={handleGenerate}
              className={`fun-button-${buttonColor} ${isLoading ? 'opacity-80' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Generating...' : buttonText}
            </Button>
          </div>
        </div>

        {isFallback && (
          <Alert className="mb-4 border-blue-300 bg-blue-50">
            <InfoIcon className="h-4 w-4 text-blue-500" />
            <AlertDescription className="text-blue-800">
              Using our backup content generator.
            </AlertDescription>
          </Alert>
        )}

        <Card className="p-6 bg-white rounded-2xl shadow-lg border-2 border-muted min-h-[200px] flex flex-col items-center justify-center relative">
          {result ? (
            <div className="w-full">
              <div className={`text-lg md:text-xl ${isError ? 'text-destructive' : 'text-foreground'} text-center mb-6`}>
                {result}
              </div>
              
              <div className="flex flex-col gap-4">
                <Button 
                  variant="outline" 
                  className="flex items-center justify-center gap-2"
                  onClick={copyToClipboard}
                >
                  <Clipboard className="h-4 w-4" />
                  <span>Copy to clipboard</span>
                </Button>
                
                <SocialIcons content={result} />
              </div>
            </div>
          ) : (
            <div className="text-lg text-muted-foreground text-center italic">
              {placeholder}
            </div>
          )}
        </Card>
      </div>
    </Layout>
  );
};

export default Generator;
