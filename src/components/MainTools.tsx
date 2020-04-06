import * as React from 'react';
import { Tooltip } from './Tooltip';
import { siteConfig } from '~/config/site.config';

export const MainTools: React.FC = () => {
  return (
    <div className="MainTools">
      {siteConfig.mainToolsList.map(({ name, img }) => (
        <Tooltip content={name} placement="bottom" key={name}>
          <div key={name}>
            <img src={img} alt={name} />
          </div>
        </Tooltip>
      ))}
    </div>
  );
};
