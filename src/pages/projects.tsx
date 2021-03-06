import React from 'react';
import { Layout } from '~/components/Layout';
import { SEO } from '~/components/SEO';
import { Hero } from '~/components/Hero';
import { siteConfig } from '~/config/site.config';

const Projects: React.FC = () => {
  const pageTitle = `Projects - ${siteConfig.name}`;

  return (
    <Layout>
      <SEO title={pageTitle} />
      <Hero>
        <div className="container">
          <h1 className="text-center font-jetbrains mt-0">
            <span className="text-secondary">{'<'}</span>
            <span className="text-tertiary">Projects</span>
            <span className="text-secondary">{' />'}</span>
          </h1>
        </div>
      </Hero>
      <div className="text-center mt-3">
        <h2>Whoops!</h2>
        <h2>I am sorry, content here will be soon.</h2>
      </div>
    </Layout>
  );
};

export default Projects;
