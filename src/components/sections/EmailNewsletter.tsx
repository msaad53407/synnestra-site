'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Plus } from 'lucide-react';

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Submitted email:', email);
    setEmail('');
  };

  return (
    <section className="bg-custom-purple px-4 py-6 sm:px-6 lg:px-12">
      <div className="bg-purple-950 rounded-2xl p-8 md:p-12 md:my-8">
        <div className="md:flex md:items-center md:justify-between mt-12">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Newsletter</h2>
            <p className="text-purple-200">Subscribe to our news letter and keep in touch with us</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 bg-purple-100 rounded-3xl p-1">
            <Input
              type="email"
              placeholder="hello@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white rounded-3xl"
            />
            <Button type="submit" className="bg-custom-purple hover:bg-custom-purple-light text-white rounded-3xl">
              Sign Up
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
        <div className="mt-12 flex justify-center items-center border-t-[0.5px] border-t-white pt-4 text-center">
          <Plus className="text-white w-5 h-5 mr-2" />
          <p className="text-white text-sm">Only Available to News Letter Subscriber</p>
        </div>
      </div>
    </section>
  );
}
