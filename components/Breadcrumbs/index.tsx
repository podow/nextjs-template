import React from 'react';

import { BreadcrumbsWrapper } from './styles';

const Breadcrumbs: React.FC = ({ children }) => {
  const childrenArray = React.Children.toArray(children) as any;

  const lastIndex = childrenArray.length - 1;

  children = childrenArray.reduce((acc, child, index) => {
    const notLast = index < lastIndex;
    if (notLast) {
      acc.push(
        child,
        <span className="separator" key={index}>
          /
        </span>
      );
    } else {
      acc.push(child);
    }
    return acc;
  }, []);

  return <BreadcrumbsWrapper>{children}</BreadcrumbsWrapper>;
};

export default Breadcrumbs;
