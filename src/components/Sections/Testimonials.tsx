import type { FC } from 'react';
import Image from 'next/image';

// If there are no props needed, use type Record<string, never> instead of empty interface
type TestimonialsProps = Record<string, never>;

// Add display name to the component
export const Testimonials: FC<TestimonialsProps> = () => {
  return (
    <div>
      <Image 
        src="/path/to/your/image.jpg"
        alt="Testimonial description"
        width={500}
        height={300}
        priority
      />
    </div>
  );
};

Testimonials.displayName = 'Testimonials';
