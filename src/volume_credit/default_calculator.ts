import { Performance } from '../types';

export function calculate(perf: Performance): number {
    return Math.max(perf.audience - 30, 0);
}
