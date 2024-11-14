import { PerformanceStatement, StatementData } from './types';
import { statementOf } from './performance-statement';

export function calculate(invoice: any, plays: any): StatementData {
    let totalAmount = 0;
    let totalVolumeCredits = 0;

    const performanceStatementList: PerformanceStatement[] = [];
    for (let perf of invoice.performances) {
        enrichPerformance(perf);
        const performanceStatement: PerformanceStatement = statementOf(perf);
        performanceStatementList.push(performanceStatement);
    }

    for (let performanceStatement of performanceStatementList) {
        totalVolumeCredits += performanceStatement.volumeCredits;
        totalAmount += performanceStatement.amount;
    }

    return {
        customer: invoice.customer,
        performanceStatementList,
        totalVolumeCredits,
        totalAmount
    };

    function enrichPerformance(perf: any) {
        perf.play = plays[perf.playID];
    }
}
