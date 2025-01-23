'use client';

import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { offices } from '@/lib/constants';
import AnimatedSection from '../AnimatedSection';

export default function OfficeLocations() {
  const [selectedOffice, setSelectedOffice] = useState<string>(offices[0].id);

  const currentOffice = offices.find((office) => office.id === selectedOffice) || offices[0];

  return (
    <section className="px-4 py-6 sm:px-6 lg:px-12">
      <AnimatedSection direction="up" className="mx-auto max-w-6xl">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-semibold text-custom-purple tracking-tighter sm:text-4xl">Visit Our Offices</h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500">
              Select a location to find us on the map
            </p>
          </div>

          <div className="mx-auto max-w-[300px]">
            <Select value={selectedOffice} onValueChange={setSelectedOffice}>
              <SelectTrigger>
                <SelectValue placeholder="Select an office" />
              </SelectTrigger>
              <SelectContent>
                {offices.map((office) => (
                  <SelectItem key={office.id} value={office.id}>
                    {office.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="aspect-[2/1] overflow-hidden rounded-xl bg-muted">
            <iframe
              src={currentOffice.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              aria-label={`Map showing ${currentOffice.name} location`}
            />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
