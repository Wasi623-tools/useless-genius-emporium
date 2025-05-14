
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const Index = () => {
  const categories = [
    {
      emoji: '🎲',
      title: 'Useless But Fun',
      description: 'Random hilarious life hacks that sound smart but are utterly pointless.',
      path: '/useless-fun',
      color: 'from-funpurple to-funblue'
    },
    {
      emoji: '🤖',
      title: 'Bad Advice Bot',
      description: 'A chat-style bot that gives horrible but funny advice.',
      path: '/bad-advice',
      color: 'from-funblue to-fungreen'
    },
    {
      emoji: '🙃',
      title: 'Awkward Compliments',
      description: 'Weirdly specific compliments to make anyone feel... uncomfortable.',
      path: '/compliments',
      color: 'from-fungreen to-funyellow'
    },
    {
      emoji: '📎',
      title: 'Passive-Aggressive Notes',
      description: 'Fake office notes with simmering passive aggression.',
      path: '/passive-notes',
      color: 'from-funyellow to-funorange'
    },
    {
      emoji: '📞',
      title: 'Bad Joke Hotline',
      description: 'Endless bad jokes and puns to annoy your friends.',
      path: '/bad-jokes',
      color: 'from-funorange to-funpink'
    },
    {
      emoji: '😱',
      title: 'Exaggerated Life Problems',
      description: 'Satirical solutions to normal life situations.',
      path: '/exaggerated-problems',
      color: 'from-funpink to-funpurple'
    },
    {
      emoji: '🧠',
      title: 'Clickbait Generator',
      description: 'Ridiculous headlines that no one should ever click on.',
      path: '/clickbait',
      color: 'from-funpurple to-funblue'
    },
    {
      emoji: '🕹️',
      title: 'Useless Buttons',
      description: 'Buttons that do nothing useful, but are strangely satisfying.',
      path: '/useless-buttons',
      color: 'from-funblue to-fungreen'
    },
  ];

  return (
    <Layout>
      <section className="text-center py-10 px-4 bg-gradient-to-b from-white to-muted">
        <div className="max-w-4xl mx-auto">
          <h1 className="fun-title mb-6">Pointlessly Genius</h1>
          <p className="text-xl md:text-2xl mb-8 font-medium text-muted-foreground">
            Making the Web 2% More Useless, One Click at a Time
          </p>
          
          <div className="max-w-3xl mx-auto bg-white/80 rounded-xl p-6 mb-8 shadow-md border border-primary/20">
            <p className="text-base md:text-lg mb-4">
              A wholesome hub of useless genius, where fun meets function (kind of). No stress, no pressure, just brainless joy and tools you didn't know you needed.
            </p>
            <p className="text-base md:text-lg mb-4">
              💡 Browse, click, laugh — or cry. We won't judge. Probably.
            </p>
            <p className="text-base md:text-lg italic text-muted-foreground">
              ⚠️ Warning: Side effects may include excessive laughter, eye-rolling, and sudden urges to share dumb links with friends. Useless Genius Emporium is not responsible for accidental productivity. Proceed at your own delight.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link to="/useless-fun" className="fun-button-primary animate-bounce-light">
              Start Wasting Time
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-poppins font-bold text-center mb-10">Choose Your Generator</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={index} 
                to={category.path}
                className="fun-card group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="mb-4 text-5xl">{category.emoji}</div>
                <h3 className={`text-xl font-poppins font-bold mb-2 fun-gradient-text ${category.color}`}>
                  {category.title}
                </h3>
                <p className="text-muted-foreground">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
