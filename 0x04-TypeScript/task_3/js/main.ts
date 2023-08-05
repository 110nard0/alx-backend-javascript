/// Import all dependencies from modules 
/// <reference path="crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create row element using interface stucture
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
}

// Get row ID and create new row object
const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { ...row, age: 23 };

// Update row object and delete generated rowID
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);