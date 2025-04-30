import { Metadata } from 'next';
import { ExamGrid } from '@/components/ExamGrid';

export const metadata: Metadata = {
  title: 'Exam Preparation | Elite Scholars',
  description: 'Comprehensive guides for IELTS, TOEFL, GRE, GMAT, SAT, and PTE exam preparation.',
};

export default function ExamsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto text-center mb-12 px-10 lg:px-0">
        <h1 className="text2xl md:text-4xl font-bold tracking-tight mb-4">
          Exam Preparation Guides
        </h1>
        <p className="text-base text-muted-foreground lg:text-lg">
          Prepare for your study abroad journey with our comprehensive exam preparation guides.
          Learn about test formats, scoring, preparation strategies, and recommended resources.
        </p>
      </div>
      
      <ExamGrid />
    </div>
  );
}