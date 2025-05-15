import React from 'react';

interface Testimonial {
  name: string;
  text: string;
  achievement: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Anna Kowalska",
      text: "Trening z Erykiem to najlepsza decyzja, jaką podjęłam w kwestii dbania o siebie. W 3 miesiące schudłam 12 kg i czuję się świetnie!",
      achievement: "Redukcja wagi o 12 kg"
    },
    {
      name: "Piotr Nowak",
      text: "Profesjonalne podejście, ogromna wiedza i motywacja. Dzięki Erykowi poprawiłem swoje wyniki w martwym ciągu o 40 kg w ciągu pół roku.",
      achievement: "Progres w martwym ciągu o 40 kg"
    },
    {
      name: "Marta Wiśniewska",
      text: "Plan treningowy i dietetyczny przygotowany przez Eryka pomógł mi przygotować się do zawodów fitness i zająć pierwsze miejsce!",
      achievement: "1 miejsce w zawodach fitness"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">CO MÓWIĄ MOJE PODOPIECZNI</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 shadow-lg relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-red-600 flex items-center justify-center text-white text-2xl font-bold">
                "
              </div>
              <p className="mb-6 text-lg italic">{testimonial.text}</p>
              <div className="mt-auto">
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-red-600">{testimonial.achievement}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">Dołącz do grona zadowolonych klientów i osiągnij swoje cele!</p>
          <button className="bg-black hover:bg-gray-900 text-white py-3 px-8 font-bold uppercase tracking-wider transition-all duration-300">
            Rozpocznij transformację
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;