
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Layout from './Layout';
import { supabase } from "@/integrations/supabase/client";
import { toast } from '@/components/ui/use-toast';

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

  const handleGenerate = async () => {
    setIsLoading(true);
    setIsError(false);
    
    try {
      console.log(`Generating content for category: ${title}`);
      
      // Call our Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('generate-content', {
        body: { 
          category: title,
          prompt: `Generate a funny ${title} content`
        }
      });
      
      if (error) {
        console.error("Supabase function error:", error);
        throw error;
      }
      
      console.log("API response:", data);
      
      if (data?.result) {
        setResult(data.result);
      } else {
        throw new Error("No result returned from API");
      }
    } catch (error) {
      console.error("Error generating content:", error);
      setIsError(true);
      setResult("Oops! Even useless things break sometimes. Please try again!");
      toast({
        title: "Generation Error",
        description: "Something went wrong generating your content. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="fun-container">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{emoji}</div>
          <h1 className="fun-title">{title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">{description}</p>
          <Button 
            onClick={handleGenerate}
            className={`fun-button-${buttonColor} ${isLoading ? 'opacity-80' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Generating...' : buttonText}
          </Button>
        </div>

        <Card className="p-6 bg-white rounded-2xl shadow-lg border-2 border-muted min-h-[200px] flex items-center justify-center">
          {result ? (
            <div className={`text-lg md:text-xl ${isError ? 'text-destructive' : 'text-foreground'} text-center`}>
              {result}
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
