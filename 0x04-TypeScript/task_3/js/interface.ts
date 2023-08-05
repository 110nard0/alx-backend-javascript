// Create type alias for RowID
type RowID = number;

// Create RowElement interface
interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

// Export row type alias and interface
export { RowID, RowElement };