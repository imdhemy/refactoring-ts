import statement from '../src/statement';
import invoices from '../src/invoices.json';
import plays from '../src/plays.json';

test('it works :P', () => {
    const expected = `Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`;

    const actual = statement(invoices[0], plays);

    expect(actual).toEqual(expected);
});
