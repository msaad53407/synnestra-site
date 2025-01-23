"use client"

import { ProjectProvider } from '@/context/ActiveProjectContext';
import React, { PropsWithChildren } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ProjectProvider>
      <GoogleReCaptchaProvider reCaptchaKey="6LdYlb8qAAAAAHJBJIP8aAhpDt5K6JdN1c88nqKN">
        {children}
      </GoogleReCaptchaProvider>
    </ProjectProvider>
  );
};

export default Providers;
