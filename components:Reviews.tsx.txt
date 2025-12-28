import React from 'react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Jan de V.",
      text: "Snel, professioneel en een prachtig resultaat. Mijn oprit ziet er weer als nieuw uit! Echt een aanrader voor iedereen in de regio.",
      rating: 5
    },
    {
      name: "Anouk S.",
      text: "Heel blij met de service van Hayk. Ze denken mee en de prijs is eerlijk. De warmwater methode werkt echt veel beter dan koud water.",
      rating: 5
    },
    {
      name: "Mark T.",
      text: "Professioneel team. Ze lieten alles super netjes achter en m'n terras is weer klaar voor de zomer.",
      rating: 5
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4">Wat Onze Klanten Zeggen</h2>
        <div className="flex items-center justify-center space-x-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-2xl">★</span>
          ))}
          <span className="font-bold text-lg ml-2">4.9 / 5 op Google</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
            <div className="flex mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            <p className="text-lg italic mb-6">"{review.text}"</p>
            <p className="font-bold text-blue-200">— {review.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-white/20 pt-16">
        <div>
          <p className="text-4xl font-black mb-1">500+</p>
          <p className="text-blue-100 opacity-80 uppercase tracking-widest text-xs font-bold">Particuliere klanten</p>
        </div>
        <div>
          <p className="text-4xl font-black mb-1">50+</p>
          <p className="text-blue-100 opacity-80 uppercase tracking-widest text-xs font-bold">Vaste zakelijke partners</p>
        </div>
        <div>
          <p className="text-4xl font-black mb-1">10+</p>
          <p className="text-blue-100 opacity-80 uppercase tracking-widest text-xs font-bold">Jaar ervaring</p>
        </div>
        <div>
          <p className="text-4xl font-black mb-1">24/7</p>
          <p className="text-blue-100 opacity-80 uppercase tracking-widest text-xs font-bold">Passie voor resultaat</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

