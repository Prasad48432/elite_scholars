import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { countries } from '@/lib/data';

interface CountryGridProps {
  limit?: number;
}

export function CountryGrid({ limit }: CountryGridProps) {
  const displayedCountries = limit ? countries.slice(0, limit) : countries;
  
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-10 lg:px-0">
      {displayedCountries.map((country) => (
        <Link href={`/countries/${country.id}`} key={country.id} className="h-full">
          <Card className="h-full transition-all hover:shadow-md hover:-translate-y-1">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{country.flag} {country.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base line-clamp-3">
                {country.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full justify-between group">
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}