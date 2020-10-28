import React from 'react';

const Page = ({ path, currentPath, innerComponent, ...props }) => {
  const classes = [];
  const InnerComponent = innerComponent;

  classes.push('page');
  if (path !== currentPath) classes.push('hide');

  return (
    <div className={classes.join(' ')}>
      <InnerComponent path={path} currentPath={currentPath} {...props} />
    </div>
  );
};

export default Page;