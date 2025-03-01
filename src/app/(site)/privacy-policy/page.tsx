import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-10 mt-20">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-semibold text-custom-purple">Privacy Policy</CardTitle>
          <CardDescription className="sr-only">Last updated: {new Date().toLocaleDateString()}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-2xl font-medium mb-2">1. Information We Collect</h2>
            <p className="text-gray-600">
              We collect information you provide directly to us, such as when you create an account, use our services,
              or communicate with us. This may include your name, email address, and any other information you choose to
              provide.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-medium mb-2">2. How We Use Your Information</h2>
            <p className="text-gray-600">
              We use the information we collect to provide, maintain, and improve our services, to develop new ones, and
              to protect our company and our users. We may also use the information to communicate with you about our
              services, send you technical notices, updates, security alerts, and support messages.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-medium mb-2">3. Information Sharing and Disclosure</h2>
            <p className="text-gray-600">
              We do not share personal information with companies, organizations, or individuals outside of our company
              except in the following cases: with your consent, for legal reasons, or to protect rights, property, or
              safety.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-medium mb-2">4. Data Security</h2>
            <p className="text-gray-600">
              We use appropriate technical and organizational measures to protect the personal information that we
              collect and process about you. The measures we use are designed to provide a level of security appropriate
              to the risk of processing your personal information.
            </p>
          </section>
          <Separator />
          <section>
            <h2 className="text-2xl font-medium mb-2">5. Your Rights</h2>
            <p className="text-gray-600">
              You have the right to access, update, or delete your personal information. You can object to processing of
              your personal information, ask us to restrict processing of your personal information or request
              portability of your personal information.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
