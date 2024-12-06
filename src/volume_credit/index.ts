import { Performance } from '../types';
import { createVolumeCreditCalculator } from './factory';

export const volumeCreditOf = (perf: Performance): number => createVolumeCreditCalculator(perf)(perf);
