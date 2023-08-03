// Create two students
const student1 = {
    firstName: 'Agu',
    lastName: 'Dike',
    age: 25,
    location: 'Lagos',
};
const student2 = {
    firstName: 'Halima',
    lastName: 'Abubakar',
    age: 22,
    location: 'Abuja',
};
// Create students list
const studentList = [student1, student2];
// Render table and append new row for each element in list
function renderTable() {
    // Store document body in a variable
    const body = document.querySelector('body');
    // Create elements for table structure
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    // Add row for table header
    const header = document.createElement('tr');
    // Append columns to table header
    for (const key in student1) {
        const column = document.createElement('th');
        column.innerText = key.toUpperCase();
        header.append(column);
    }
    thead.append(header);
    // Append row for each student
    studentList.forEach((student) => {
        const row = document.createElement('tr');
        for (const attr in student) {
            const column = document.createElement('td');
            column.textContent = student[attr];
            row.append(column);
        }
        tbody.append(row);
    });
    // Append thead and tbody to table then body
    table.append(thead);
    table.append(tbody);
    body.append(table);
}
renderTable();
