import { Metadata } from 'next';
import { CountryGrid } from '@/components/CountryGrid';

export const metadata: Metadata = {
  title: 'Study Destinations | Elite Scholars',
  description: 'Explore various study abroad destinations including the US, UK, Canada, Australia, and more.',
};

export default function CountriesPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto text-center mb-12 px-10 lg:px-0">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
          Study Abroad Destinations
        </h1>
        <p className="text-base text-muted-foreground lg:text-lg">
          Explore comprehensive information about popular study destinations around the world. 
          Each country profile includes details about programs, universities, tuition fees, visa requirements, and more.
        </p>
      </div>
      
      <CountryGrid />
    </div>
  );
}