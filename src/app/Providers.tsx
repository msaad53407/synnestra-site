import { ProjectProvider } from '@/context/ActiveProjectContext';
import React, { PropsWithChildren } from 'react';

const Providers = ({ children }: PropsWithChildren) => {
  return <ProjectProvider>{children}</ProjectProvider>;
};

export default Providers;
