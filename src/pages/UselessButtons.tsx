
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const UselessButtons = () => {
  const [message, setMessage] = useState<string>('');
  const [clicks, setClicks] = useState<number>(0);
  const [isWizardSummoning, setIsWizardSummoning] = useState<boolean>(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const buttons = [
    {
      text: "Summon a wizard",
      color: "primary",
      action: () => {
        setIsWizardSummoning(true);
        setMessage("");
        setTimeout(() => {
          setIsWizardSummoning(false);
          setMessage("He's busy. Try again during non-peak magical season.");
        }, 2000);
      }
    },
    {
      text: "Add +1 to a useless counter",
      color: "secondary",
      action: () => {
        setClicks(prev => prev + 1);
        setMessage(`Counter: ${clicks + 1}. This number means nothing.`);
      }
    },
    {
      text: "Do absolutely nothing",
      color: "accent",
      action: () => {
        setMessage("Congratulations! Nothing happened, as expected.");
      }
    },
    {
      text: "Disable this button",
      color: "pink",
      action: () => {
        setButtonDisabled(true);
        setMessage("This button is now disabled. What did you expect?");
      }
    },
    {
      text: "Generate random emoji",
      color: "green",
      action: () => {
        const emojis = ["🤪", "🙄", "🥳", "🤯", "😴", "🤓", "👻", "👽", "🤖", "👾", "🦄", "🦖"];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        setMessage(`Here's your random emoji: ${randomEmoji}. Use it wisely.`);
      }
    },
    {
      text: "Tell my fortune",
      color: "orange",
      action: () => {
        const fortunes = [
          "You will click another useless button soon.",
          "Your future holds many pointless clicks.",
          "The stars say you should probably be doing something more productive right now.",
          "You will receive a mysterious email... about extended car warranties.",
          "A great opportunity awaits... to waste more time online."
        ];
        setMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
      }
    }
  ];

  return (
    <Layout>
      <div className="fun-container">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🕹️</div>
          <h1 className="fun-title">Useless Buttons</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Buttons that do nothing useful. But you'll click them anyway.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {buttons.map((button, index) => (
            <Button
              key={index}
              className={`fun-button-${button.color} h-auto py-6`}
              onClick={button.action}
              disabled={index === 3 && buttonDisabled}
            >
              {button.text}
            </Button>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 border-2 border-muted shadow-lg min-h-[100px] flex items-center justify-center">
          {isWizardSummoning ? (
            <div className="text-center">
              <div className="text-5xl animate-bounce mb-3">✨</div>
              <p className="text-lg">Summoning wizard...</p>
            </div>
          ) : message ? (
            <p className="text-lg text-center">{message}</p>
          ) : (
            <p className="text-lg text-muted-foreground text-center italic">
              Click a button to see what doesn't happen...
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default UselessButtons;
