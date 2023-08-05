// Import named row type and interface
import { RowID, RowElement } from './interface';

// Export CRUD functions
export function insertRow(row: RowElement): number;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;