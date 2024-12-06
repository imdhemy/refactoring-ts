import { Performance } from '../types';

export function calculate(perf: Performance): number {
    let result: number = Math.max(perf.audience - 30, 0);

    result += Math.floor(perf.audience / 5);

    return result;
}
