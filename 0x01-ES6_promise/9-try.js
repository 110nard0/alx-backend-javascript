export default function guardrail(mathFunction) {
  const array = [];

  try {
    const result = mathFunction();
    array.push(result);
  } catch (e) {
    array.push(`Error: ${e.message}`);
  } finally {
    array.push('Guardrail was processed');
  }

  return array;
}
