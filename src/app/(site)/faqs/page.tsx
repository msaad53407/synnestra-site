import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers to common questions about our software services',
};

export default function FAQs() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-semibold text-custom-purple">Frequently Asked Questions</CardTitle>
          <CardDescription>Find answers to common questions about our services</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-2xl font-medium">What services do you offer?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We offer a wide range of software services including web development, mobile app development, cloud
                solutions, AI integration, and more. Our team of experts can help with everything from initial concept
                to final deployment and maintenance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-2xl font-medium">How long does a typical project
                take?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Project timelines can vary greatly depending on the scope and complexity of the work. A simple website
                might take a few weeks, while a complex enterprise solution could take several months. We provide
                detailed timelines during our project planning phase.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-2xl font-medium">Do you provide ongoing support and
                maintenance?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, we offer ongoing support and maintenance packages for all our services. This includes regular
                updates, bug fixes, and technical support to ensure your software continues to perform optimally.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-2xl font-medium">What technologies do you use?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We use a wide range of cutting-edge technologies depending on the specific needs of each project. This
                includes but is not limited to React, Next.js, Node.js, Python, AWS, Google Cloud, TensorFlow, and many
                more. We always choose the best tools for the job.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-2xl font-medium">How do you handle data security and
                privacy?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We take data security and privacy very seriously. We implement industry-standard security measures,
                including encryption, secure coding practices, and regular security audits. We also ensure compliance
                with relevant data protection regulations such as GDPR.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}