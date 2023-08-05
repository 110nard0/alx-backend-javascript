// Create type alias for RowID
type RowID = number;

// Create RowElement interface
interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

export { RowID, RowElement };