import React from 'react';
import { siteConfig } from '~/config/site.config';

export const Footer: React.FC = () => (
  <div className="Footer">
    <div className="container">
      <p>{siteConfig.footerText}</p>
    </div>
  </div>
);
