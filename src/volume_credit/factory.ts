import { Performance } from '../types';
import { VolumeCreditCalculator } from './types';
import { calculate as comedyCalculator } from './comedy_caclulator';
import { calculate as defaultCalculator } from './default_calculator';

export function createVolumeCreditCalculator(perf: Performance): VolumeCreditCalculator {
    switch (perf.type) {
        case 'comedy':
            return comedyCalculator;
        default:
            return defaultCalculator;
    }
}
