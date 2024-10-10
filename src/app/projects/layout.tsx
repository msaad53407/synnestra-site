import React from 'react';

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

const ProjectsLayout = ({ children, modal }: Props) => {
  return (
    <>
      {children}
      {modal}
    </>
  );
};

export default ProjectsLayout;
