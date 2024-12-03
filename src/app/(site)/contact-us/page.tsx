import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AnimatedSection from '@/components/AnimatedSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen space-y-20 bg-background py-8">
      {/* Hero Section */}
      <section className="relative px-4 py-6 sm:px-6 lg:px-12">
        <AnimatedSection direction="up" className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-custom-purple">Get in
            Touch</h1>
          <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
            Have a question or want to discuss a project? We&apos;re here to help. Contact our team for expert
            assistance.
          </p>
        </AnimatedSection>
        <div
          className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent)] pointer-events-none" />
      </section>

      {/* Contact Information */}
      <section className="px-4 py-6 sm:px-6 lg:px-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatedSection direction={'up'}>
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6 min-h-64 justify-center">
                <div className="rounded-full bg-custom-purple p-3">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-center text-gray-400">Mon-Fri from 8am to 5pm</p>
                <p className="text-center font-medium">+1 (555) 000-0000</p>
              </CardContent>
            </Card>
          </AnimatedSection>
          <AnimatedSection direction={'up'}>
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6 min-h-64 justify-center">
                <div className="rounded-full bg-custom-purple p-3">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-center text-gray-400">We&apos;ll respond within 24 hours</p>
                <p className="text-center font-medium">contact@synnestra.com</p>
              </CardContent>
            </Card>
          </AnimatedSection>
          <AnimatedSection direction={'up'} className="md:col-span-2 lg:col-span-1">
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6 min-h-64 justify-center">
                <div className="rounded-full bg-custom-purple p-3">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Office</h3>
                <p className="text-center text-gray-400">Visit us at our headquarters</p>
                <p className="text-center font-medium">123 Tech Plaza, Suite 400<br />San Francisco, CA 94105</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-4 py-6 sm:px-6 lg:px-12">
        <AnimatedSection direction="up" className="mx-auto max-w-2xl space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold text-custom-purple tracking-tighter">Send us a Message</h2>
            <p className="text-gray-400">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <form className="space-y-6"
                action="https://formspree.io/f/xrbgrnow"
                method="POST"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" name="first-name" required placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" name="last-name" required placeholder="Enter your last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" required placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Select name="subject" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[150px]"
                id="message"
                placeholder="Enter your message"
                name="message"
                required
              />
            </div>
            <Button className="w-full bg-custom-purple hover:bg-custom-purple" size="lg" type="submit">
              Send Message
            </Button>
          </form>
        </AnimatedSection>
      </section>

      {/* Map Section */}
      <section className="px-4 py-6 sm:px-6 lg:px-12">
        <AnimatedSection direction="up" className="mx-auto max-w-6xl">
          <div className="aspect-[2/1] overflow-hidden rounded-xl bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0673599876316!2d-122.39568388441547!3d37.79179997975559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806285ddb1a3%3A0xad9ca7333b4399a7!2sSan%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1647033824223!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}

