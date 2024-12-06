import { Performance, PerformanceStatement, StatementData } from './types';
import { volumeCreditOf } from './volume_credit';

export function calculate(invoice: any, plays: any): StatementData {
    let totalAmount = 0;
    let totalVolumeCredits = 0;

    const performanceStatementList: PerformanceStatement[] = [];
    for (let perf of invoice.performances) {
        const performanceStatement: PerformanceStatement = statementOf(enrichPerformance(perf));
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

    function enrichPerformance(perf: any): Performance {
        const play = plays[perf.playID];

        return {
            ...perf,
            type: play.type,
            name: play.name,
        };
    }
}


function statementOf(perf: Performance): PerformanceStatement {
    return ({
        amount: amountOf(perf),
        volumeCredits: volumeCreditOf(perf),
        perf,
    });
}

function amountOf(perf: Performance): number {
    let thisAmount = 0;
    switch (perf.type) {
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
            throw new Error(`unknown type: ${perf.type}`);
    }
    return thisAmount;
}
