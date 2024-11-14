import { PerformanceStatement } from './types';

export const statementOf = (perf: any): PerformanceStatement => ({
    amount: amountOf(perf),
    volumeCredits: volumeCreditOf(perf),
    perf,
});

function volumeCreditOf(perf: any): number {
    let result: number = Math.max(perf.audience - 30, 0);

    if ('comedy' === perf.play.type) result += Math.floor(perf.audience / 5);

    return result;
}

function amountOf(perf: any): number {
    let thisAmount = 0;
    switch (perf.play.type) {
        case 'tragedy':
            thisAmount = 40000;
            if (perf.audience > 30) {
                thisAmount += 1000 * (perf.audience - 30);
            }
            break;
        case 'comedy':
            thisAmount = 30000;
            if (perf.audience > 20) {
                thisAmount += 10000 + 500 * (perf.audience - 20);
            }
            thisAmount += 300 * perf.audience;
            break;
        default:
            throw new Error(`unknown type: ${perf.playplay.type}`);
    }
    return thisAmount;
}
