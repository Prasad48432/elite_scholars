import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
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
  ArrowLeft,
  BookOpen,
  Clock,
  Award,
  Globe,
  ListChecks,
  Library,
} from "lucide-react";
import { exams } from "@/lib/data";
import { use } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;
  const exam = exams.find((e) => e.id === id);

  if (!exam) {
    return {
      title: "Exam Not Found",
    };
  }

  return {
    title: `${exam.name} (${exam.fullName}) Preparation Guide | Elite Scholars`,
    description: `Comprehensive preparation guide for the ${exam.name} exam. Format, scoring, preparation tips, and recommended resources.`,
  };
}

export function generateStaticParams() {
  return exams.map((exam) => ({
    id: exam.id,
  }));
}

export default function ExamPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const exam = exams.find((e) => e.id === id);

  if (!exam) {
    notFound();
  }

  return (
    <div className="max-w-7xl py-8 mx-auto px-10 lg:px-0">
      <Link
        href="/exams"
        className="inline-flex items-center mb-6 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Exams
      </Link>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            <span className="text-4xl md:text-5xl">
              {" "}
              <img alt={`Logo of ${exam.name}`} src={`/${exam.id}.png`} />
            </span>{" "}
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">{exam.fullName}</p>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Duration
            </CardTitle>
          </CardHeader>
          <CardContent>{exam.duration}</CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Award className="h-5 w-5 mr-2" />
              Scoring
            </CardTitle>
          </CardHeader>
          <CardContent>{exam.scoring.split(".")[0]}.</CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              Validity
            </CardTitle>
          </CardHeader>
          <CardContent>
            {exam.validityPeriod} • Fee: {exam.fee}
          </CardContent>
        </Card>
      </div>

      <p className="text-lg mb-8">{exam.description}</p>

      <Tabs defaultValue="format" className="mb-12">
        <TabsList className="flex flex-wrap w-full items-center justify-start">
          <TabsTrigger value="format" className="flex items-center gap-2">
            <ListChecks className="h-4 w-4" />
            <span className="hidden md:inline">Test Format</span>
          </TabsTrigger>
          <TabsTrigger value="preparation" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span className="hidden md:inline">Preparation Tips</span>
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center gap-2">
            <Library className="h-4 w-4" />
            <span className="hidden md:inline">Study Resources</span>
          </TabsTrigger>
          <TabsTrigger value="countries" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="hidden md:inline">Accepted Countries</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="format" className="mt-6">
          <div className="grid gap-6">
            {exam.sections.map((section, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{section.name}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Question Types</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {section.questionTypes.map((type, j) => (
                          <li key={j}>{type}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Tips for Success</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {section.tips.map((tip, j) => (
                          <li key={j}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="preparation" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Preparation Strategies</CardTitle>
              <CardDescription>
                Expert tips to help you succeed on the {exam.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {exam.preparationTips.map((tip, i) => (
                  <li key={i} className="bg-muted p-4 rounded-lg flex">
                    <span className="font-mono bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center mr-3 shrink-0">
                      {i + 1}
                    </span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <div className="grid gap-6 md:grid-cols-3">
            {exam.studyResources.map((resource, i) => (
              <Card key={i} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{resource.name}</CardTitle>
                  <CardDescription>Type: {resource.type}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{resource.description}</p>
                </CardContent>
                {resource.link && (
                  <div className="p-6 pt-0 mt-auto">
                    <Button asChild variant="outline" className="w-full">
                      <Link
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </Link>
                    </Button>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="countries" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Accepted Countries</CardTitle>
              <CardDescription>
                Countries and institutions that accept {exam.name} scores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {exam.acceptedCountries.map((country, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
