
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
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

interface GeneratorProps {
  emoji: string;
  title: string;
  description: string;
  buttonText?: string;
  placeholder?: string;
  buttonColor?: string;
  backgroundColor?: string;
}

const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'it', label: 'Italian' },
  { value: 'pt', label: 'Portuguese' },
  { value: 'ru', label: 'Russian' },
  { value: 'zh', label: 'Chinese Simplified' },
  { value: 'zh-TW', label: 'Chinese Traditional' },
  { value: 'ja', label: 'Japanese' },
  { value: 'ko', label: 'Korean' },
  { value: 'ar', label: 'Arabic' },
  { value: 'hi', label: 'Hindi' },
  { value: 'bn', label: 'Bengali' },
  { value: 'uk', label: 'Ukrainian' },
  { value: 'pl', label: 'Polish' },
  { value: 'nl', label: 'Dutch' },
  { value: 'sv', label: 'Swedish' },
  { value: 'da', label: 'Danish' },
  { value: 'no', label: 'Norwegian' },
  { value: 'fi', label: 'Finnish' },
  { value: 'tr', label: 'Turkish' },
  { value: 'el', label: 'Greek' },
  { value: 'cs', label: 'Czech' },
  { value: 'hu', label: 'Hungarian' },
  { value: 'ro', label: 'Romanian' },
  { value: 'th', label: 'Thai' },
  { value: 'vi', label: 'Vietnamese' },
  { value: 'id', label: 'Indonesian' },
  { value: 'ms', label: 'Malay' },
  { value: 'he', label: 'Hebrew' },
  { value: 'fa', label: 'Persian' },
  { value: 'sw', label: 'Swahili' },
];

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
  const [language, setLanguage] = useState<string>("en");

  const handleGenerate = async () => {
    setIsLoading(true);
    setIsError(false);
    setIsFallback(false);
    
    try {
      console.log(`Generating content for category: ${title} in language: ${language}`);
      
      // Call our Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('generate-content', {
        body: { 
          category: title,
          prompt: userPrompt || `Generate a funny ${title} content`,
          language: language
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
            <div className="flex flex-1 w-full max-w-md gap-3">
              <Input
                className="flex-grow"
                placeholder={`Enter your ${title.toLowerCase()} idea...`}
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
              />
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {languages.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
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
