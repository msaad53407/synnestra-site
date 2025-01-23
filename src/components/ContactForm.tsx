'use client';

import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { getCountries } from '@/lib/countries';
import { ValidationError, useForm } from '@formspree/react';
import { useEffect, useRef } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [state, handleSubmit] = useForm('xrbgrnow', {
    data: {
      'g-recaptcha-response': executeRecaptcha,
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.submitting) {
      return;
    }

    if (state.succeeded) {
      toast({
        title: 'Message Sent',
        description: 'We have received your message and will get back to you as soon as possible.',
      });
      if (formRef.current) {
        formRef.current.reset();
      }
    } else if (state?.errors) {
      toast({
        title: 'Message Failed',
        description: 'There was an error sending your message. Please try again.',
        variant: 'destructive',
      });
    }
  }, [state.submitting, state.succeeded, state.errors]);

  const countries = getCountries();

  return (
    <section className="px-4 py-6 sm:px-6 lg:px-12">
      <AnimatedSection direction="up" className="mx-auto max-w-2xl space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold text-custom-purple tracking-tighter">Send us a Message</h2>
          <p className="text-gray-500">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
          <div className="space-y-2">
            <Label htmlFor="identityName">Identity Name</Label>
            <Input id="identityName" name="Identity_Name" required placeholder="Enter your name" />
            <ValidationError prefix="Identity Name" field="Identity_Name" errors={state.errors} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="Email" required placeholder="Enter your email" type="email" />
            <ValidationError prefix="Email" field="Email" errors={state.errors} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <div className="flex gap-2 items-center">
              <Select name="Country_Code" required>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Code" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.code} ({country.country})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input id="phone" name="Phone_Number" required placeholder="Enter your phone number" type="tel" />
              <ValidationError prefix="Phone" field="Phone_Number" errors={state.errors} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Select name="Subject" required>
              <SelectTrigger>
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="support">Technical Support</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
              </SelectContent>
            </Select>
            <ValidationError prefix="Subject" field="Subject" errors={state.errors} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea className="min-h-[150px]" id="message" name="message" placeholder="Enter your message" required />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <Button
            className="w-full bg-custom-purple hover:bg-custom-purple"
            size="lg"
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </AnimatedSection>
    </section>
  );
}
