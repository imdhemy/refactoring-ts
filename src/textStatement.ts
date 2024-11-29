import { calculate } from './calculate';

const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
}).format;

export function textStatement(invoice: any, plays: any) {
    const statementData = calculate(invoice, plays);

    let result = `Statement for ${statementData.customer}\n`;
    for (let performanceStatement of statementData.performanceStatementList) {
        result += `  ${performanceStatement.perf.play.name}: ${format(performanceStatement.amount / 100)} (${performanceStatement.perf.audience} seats)\n`;
    }

    result += `Amount owed is ${format(statementData.totalAmount / 100)}\n`;
    result += `You earned ${statementData.totalVolumeCredits} credits\n`;
    return result;
}

export function htmlStatement(invoice: any, plays: any): string {
    const statementData = calculate(invoice, plays);

    return `<div>
<p><strong>Statement for:</strong> ${statementData.customer}</p>
</div>`;
}
