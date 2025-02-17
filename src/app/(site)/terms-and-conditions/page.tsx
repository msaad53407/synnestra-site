import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
};

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto py-10 mt-20">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-semibold text-custom-purple">Terms and Conditions</CardTitle>
          <CardDescription className="sr-only">Last updated: {new Date().toLocaleDateString()}</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-2xl font-medium">1. Acceptance of Terms</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                By accessing or using our services, you agree to be bound by these Terms and Conditions. If you disagree
                with any part of the terms, you may not access our services.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-2xl font-medium">2. Description of Services</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We provide various software services including but not limited to web development, mobile app
                development, cloud solutions, and AI integration. The specific details of each service will be outlined
                in the respective service agreements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-2xl font-medium">3. User Responsibilities</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                You are responsible for maintaining the confidentiality of your account and password. You agree to
                accept responsibility for all activities that occur under your account or password.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-2xl font-medium">4. Intellectual Property</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                All content included on this site, such as text, graphics, logos, button icons, images, audio clips,
                digital downloads, data compilations, and software, is the property of our company or its content
                suppliers and protected by international copyright laws.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-2xl font-medium">5. Limitation of Liability</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our company shall not be liable for any indirect, incidental, special, consequential or punitive
                damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from your access to or use of or inability to access or use the services.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
