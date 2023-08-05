// Create Major Credits interface
interface MajorCredits {
  credit: number;
  brand: string
}

// Create Minor Credits interface
interface MinorCredits {
  credit: number;
  brand: string
}

// Declare sumMajorCredits type-annotated function
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits['credit'] {
  return subject1.credit + subject2.credit;
};

// Declare sumMinorCredits type-annotated function
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits['credit'] {
  return subject1.credit + subject2.credit;
};