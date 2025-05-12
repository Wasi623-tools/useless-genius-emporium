
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Layout from './Layout';

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
      // In a real implementation, we would call the Gemini API here
      // For now, we'll simulate a delay and return a mock response
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock responses based on the generator type
      const mockResponses: { [key: string]: string[] } = {
        "Useless But Fun": [
          "Put googly eyes on your vacuum cleaner so it looks like it's eating your floor.",
          "Name all your houseplants after celebrities, then introduce them when guests visit.",
          "Store your socks alphabetically by color for maximum confusion.",
          "Save time by setting all your clocks 10 minutes fast, then forgetting you did it.",
          "Improve your WiFi speed by pointing all your devices toward your router.",
        ],
        "Bad Advice Bot": [
          "Career tip: The best way to ask for a raise is through interpretive dance.",
          "Pro tip: Save money on toothpaste by using mashed-up Tic Tacs instead.",
          "Life hack: Avoid traffic by simply living at your workplace.",
          "Relationship advice: Nothing says 'I care' like correcting their grammar in public.",
          "Financial strategy: Invest your life savings in whatever cryptocurrency has the funniest name.",
        ],
        "Awkward Compliments": [
          "Your teeth are like stars - yellow and far apart.",
          "You're not as annoying today as you usually are!",
          "I've never seen someone rock a unibrow quite like you do.",
          "Your voice is exactly what I imagine a mermaid sounds like... if mermaids lived in the city and smoked for 40 years.",
          "You have the perfect face for radio podcasting!",
        ],
        "Passive-Aggressive Notes": [
          "Dear colleague, I'm thrilled that my lunch provides you with such enjoyment. Perhaps next time you could ask before sampling my gourmet leftovers? Just a thought! 😊",
          "NOT a suggestion box: Please continue to leave your dirty mugs in the sink. We all love playing 'Guess Whose Crusty Cup This Is' every Friday!",
          "To whoever keeps adjusting the thermostat: Thank you for the exciting temperature roulette every day! My collection of both sweaters AND fans at my desk is really coming along nicely!",
          "FYI: The printer isn't magical. It doesn't refill paper by itself. But don't worry! I LOVE walking all the way over here to find an empty tray when I'm on a deadline! 🎉",
          "Dear parking spot stealer: Your creativity in interpreting the parking lines as 'suggestions' is truly inspiring. Perhaps next time you could inspire yourself into the correct spot?",
        ],
        "Bad Joke Hotline": [
          "What's orange and sounds like a parrot? A carrot.",
          "I told my wife she was drawing her eyebrows too high. She looked surprised.",
          "Why don't scientists trust atoms? Because they make up everything!",
          "What do you call a fake noodle? An impasta!",
          "I would tell you a construction joke, but I'm still working on it.",
        ],
        "Exaggerated Life Problems": [
          "DISASTER: I sent a text with a typo. The only logical solution is to fake my death and start a new life in another country.",
          "CRISIS: Someone said 'you too' after the waiter said 'enjoy your meal.' Recommend immediate identity change and plastic surgery.",
          "CATASTROPHE: Made eye contact with a neighbor while checking the mail. Now I need to move houses immediately.",
          "EMERGENCY: Haircut looks different than the picture. Will need to wear a hat for the next 6 months minimum.",
          "TRAGEDY: Left phone at home. Will need to interact with actual humans using verbal communication skills. Send help immediately.",
        ],
        "Clickbait Generator": [
          "10 Shocking Reasons Your Toaster Is Plotting Against You — #7 Will Make You Toast!",
          "The Avocado Industry Doesn't Want You To Know This ONE WEIRD TRICK!",
          "I Stared At My Ceiling Fan For 24 Hours And You Won't BELIEVE What Happened Next!",
          "Scientists Baffled: Local Man Discovers That This Household Item Is Actually An Ancient Alien Artifact!",
          "You've Been Breathing Wrong Your Entire Life And It's Ruining Your Elbows!",
        ],
        "Useless Buttons": [
          "The wizard you summoned is currently on vacation in Bermuda. Try again during non-peak magical season.",
          "Congratulations! You've just wasted 0.2 seconds of your life clicking this button!",
          "Error 404: Purpose not found. But the button click was registered successfully!",
          "This button has been clicked 37,429 times. Unfortunately, the click counter is the only function it has.",
          "Button press received. Processing... Processing... Complete! Nothing happened, as expected.",
        ],
      };
      
      // Get responses for this generator, or use the first generator if not found
      const responses = mockResponses[title] || mockResponses["Useless But Fun"];
      
      // Select a random response
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setResult(randomResponse);
    } catch (error) {
      console.error("Error generating content:", error);
      setIsError(true);
      setResult("Oops! Even useless things break sometimes. Please try again!");
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
