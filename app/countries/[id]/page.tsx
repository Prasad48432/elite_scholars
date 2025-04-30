import { Metadata,ResolvingMetadata  } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  GraduationCap,
  Building,
  FileText,
  Plane,
  Wallet,
  Home,
  ArrowLeft,
  Globe,
} from "lucide-react";
import { countries } from "@/lib/data";
import { use } from "react";


type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params
  const country = countries.find((c) => c.id === id);

  if (!country) {
    return {
      title: "Country Not Found",
    };
  }

  return {
    title: `${country.name} Study Guide | Elite Scholars`,
    description: `Comprehensive guide for studying in ${country.name}. Programs, universities, tuition fees, visa process, and cost of living information.`,
  };
}

export function generateStaticParams() {
  return countries.map((country) => ({
    id: country.id,
  }));
}

export default function CountryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const country = countries.find((c) => c.id === id);

  if (!country) {
    notFound();
  }

  return (
    <div className="max-w-7xl py-8 mx-auto px-10 lg:px-0">
      <Link
        href="/countries"
        className="inline-flex items-center mb-6 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Countries
      </Link>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            <span className="text-4xl md:text-5xl">{country.flag}</span>{" "}
            {country.name}
          </h1>
          <p className="text-muted-foreground mt-2 text-lg max-w-3xl">
            {country.description}
          </p>
        </div>
      </div>

      <Tabs defaultValue="programs" className="mb-12">
        <TabsList className="flex flex-wrap w-full items-center justify-start">
          <TabsTrigger value="programs" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            <span className="hidden md:inline">Programs</span>
          </TabsTrigger>
          <TabsTrigger value="universities" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            <span className="hidden md:inline">Universities</span>
          </TabsTrigger>
          <TabsTrigger value="visa" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden md:inline">Visa Process</span>
          </TabsTrigger>
          <TabsTrigger value="fees" className="flex items-center gap-2">
            <Wallet className="h-4 w-4" />
            <span className="hidden md:inline">Tuition Fees</span>
          </TabsTrigger>
          <TabsTrigger value="living" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            <span className="hidden md:inline">Cost of Living</span>
          </TabsTrigger>
          <TabsTrigger value="scholarships" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="hidden md:inline">Scholarships</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="programs" className="mt-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>{country.bachelorPrograms[0].title}</CardTitle>
                <CardDescription>
                  Duration: {country.bachelorPrograms[0].duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  {country.bachelorPrograms[0].description}
                </p>
                <p className="mb-4">
                  <strong>Average Fees:</strong>{" "}
                  {country.bachelorPrograms[0].averageFees}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">
                    Popular Fields of Study
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {country.bachelorPrograms[0].popularFields.map(
                      (field, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {field}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Entry Requirements</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {country.bachelorPrograms[0].requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{country.masterPrograms[0].title}</CardTitle>
                <CardDescription>
                  Duration: {country.masterPrograms[0].duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{country.masterPrograms[0].description}</p>
                <p className="mb-4">
                  <strong>Average Fees:</strong>{" "}
                  {country.masterPrograms[0].averageFees}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">
                    Popular Fields of Study
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {country.masterPrograms[0].popularFields.map((field, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {field}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Entry Requirements</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {country.masterPrograms[0].requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="universities" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {country.topColleges.map((college, i) => (
              <Card key={i} className="overflow-hidden flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={college.image}
                    alt={college.name}
                    className="object-cover"
                    fill
                  />
                </div>
                <CardHeader>
                  <CardTitle>{college.name}</CardTitle>
                  <CardDescription>
                    {college.location} • {college.ranking}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4">{college.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Popular Programs</h4>
                    <div className="flex flex-wrap gap-2">
                      {college.popularPrograms.map((program, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href={college.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="visa" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Visa Process for {country.name}</CardTitle>
              <CardDescription>
                Visa Type: {country.visaProcess.type}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-lg mb-3">
                    Key Information
                  </h4>
                  <dl className="space-y-2">
                    <div>
                      <dt className="font-medium">Processing Time</dt>
                      <dd className="text-muted-foreground">
                        {country.visaProcess.processingTime}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium">Visa Fees</dt>
                      <dd className="text-muted-foreground">
                        {country.visaProcess.fees}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium">Work Permit</dt>
                      <dd className="text-muted-foreground">
                        {country.visaProcess.workPermit}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Requirements</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {country.visaProcess.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <Separator className="my-6" />

              <div>
                <h4 className="font-semibold text-lg mb-3">
                  Application Process
                </h4>
                <ol className="list-decimal pl-5 space-y-2">
                  {country.visaProcess.applicationProcess.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fees" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Tuition Fees in {country.name}</CardTitle>
              <CardDescription>
                Approximate annual fees for international students
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-2">Undergraduate</h4>
                  <p className="text-2xl font-bold">
                    {country.tuitionFees.undergraduate}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Per academic year
                  </p>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-2">Postgraduate</h4>
                  <p className="text-2xl font-bold">
                    {country.tuitionFees.postgraduate}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Per academic year
                  </p>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-2">PhD</h4>
                  <p className="text-2xl font-bold">
                    {country.tuitionFees.phd}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Per academic year
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="living" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Cost of Living in {country.name}</CardTitle>
              <CardDescription>
                Monthly expenses for international students
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold">Accommodation</h4>
                  <p className="text-lg mt-1">
                    {country.costOfLiving.accommodation}
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold">Food</h4>
                  <p className="text-lg mt-1">{country.costOfLiving.food}</p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold">Transportation</h4>
                  <p className="text-lg mt-1">
                    {country.costOfLiving.transportation}
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold">Utilities</h4>
                  <p className="text-lg mt-1">
                    {country.costOfLiving.utilities}
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold">Entertainment</h4>
                  <p className="text-lg mt-1">
                    {country.costOfLiving.entertainment}
                  </p>
                </div>

                <div className="p-4 border rounded-lg bg-muted">
                  <h4 className="font-semibold">Monthly Total</h4>
                  <p className="text-lg font-bold mt-1">
                    {country.costOfLiving.total}
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Additional Notes</h4>
                <p>{country.costOfLiving.additionalNotes}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scholarships" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Scholarships for {country.name}</CardTitle>
              <CardDescription>
                Financial aid opportunities for international students
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {country.tuitionFees.scholarships.map((scholarship, i) => (
                  <div key={i} className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-lg">
                      {scholarship.name}
                    </h4>
                    <p className="text-muted-foreground mb-2">
                      Award: {scholarship.amount}
                    </p>
                    <p className="mb-3">
                      Eligibility: {scholarship.eligibility}
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link
                        href={scholarship.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn More
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
