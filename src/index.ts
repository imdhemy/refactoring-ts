import invoices from './invoices.json';
import plays from './plays.json';
import { textStatement } from './textStatement';

console.log(textStatement(invoices[0], plays));
