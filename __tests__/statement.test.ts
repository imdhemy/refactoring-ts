import invoices from '../src/invoices.json';
import plays from '../src/plays.json';
import { htmlStatement, textStatement } from '../src/textStatement';

describe('statement', () => {
    test('text statement', () => {
        const expected = `Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`;

        const actual = textStatement(invoices[0], plays);

        expect(actual).toEqual(expected);
    });

    test('html statement', () => {
        const expected = `<div>
<p><strong>Statement for:</strong> BigCo</p>
<div>
<table></table>
</div>
</div>`;

        const actual = htmlStatement(invoices[0], plays);

        expect(actual).toEqual(expected);
    });
});
