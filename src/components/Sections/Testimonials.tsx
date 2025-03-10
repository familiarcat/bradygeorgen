import type { FC } from 'react';
import Image from 'next/image';
import { testimonial } from '@/data/data';

type TestimonialsProps = Record<string, never>;

export const Testimonials: FC<TestimonialsProps> = () => {
  const { testimonials, imageSrc } = testimonial;
  
  return (
    <div className="flex flex-col items-center gap-8">
      {imageSrc && (
        <Image 
          src={imageSrc}
          alt="Testimonials background"
          width={1000}
          height={400}
          className="w-full object-cover rounded-lg"
          priority
        />
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div key={index} className="bg-neutral-800 p-6 rounded-lg">
            {item.image && (
              <Image 
                src={item.image}
                alt={`${item.name}'s testimonial`}
                width={64}
                height={64}
                className="rounded-full mb-4"
              />
            )}
            <p className="text-gray-300 mb-4">{item.text}</p>
            <h3 className="font-semibold text-white">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

Testimonials.displayName = 'Testimonials';

export default Testimonials;
