import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
export { allRoutes, headFor, homePath, casePath, parseRoute } from './routes';
export { content, SITE } from './content';
export { cases } from './cases';

export const render = (path) => renderToString(<App initialPath={path} />);
