import { FC } from 'react';
import classnames from 'classnames';

interface PageLayoutInfo {
  bg?: string;
}

const PageLayout: FC<PageLayoutInfo> = ({ children, bg }) => {
  const background = bg ? bg : 'bg';
  const styles = classnames('h-screen max-width"', background);

  return (
    <div className={styles}>
      <div className="container mx-auto">
        <div className="h-screen flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
