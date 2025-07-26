/**
 * @file Main data aggregation file.
 * Imports data from modular files and exports a single object for the application to use.
 */

import { fundamentalsData } from './fundamentalsData.js';
import { advancedData } from './advancedData.js';

export const lumaData = {
  fundamentals: fundamentalsData,
  advanced: advancedData,
};
