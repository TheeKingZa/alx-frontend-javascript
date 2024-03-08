import guardrail from './9-try';

describe('guardrail', () => {
  it('should return an array with result and "Guardrail was processed" message for successful mathFunction execution', () => {
    // Define a mathFunction that returns a number
    const mathFunction = () => 42;

    // Call the guardrail function with the mathFunction
    const result = guardrail(mathFunction);

    // Expect the result to be an array with two elements: the result and "Guardrail was processed" message
    expect(result).toEqual([42, 'Guardrail was processed']);
  });

  it('should return an array with error message and "Guardrail was processed" message for failed mathFunction execution', () => {
    // Define a mathFunction that throws an error
    const mathFunction = () => {
      throw new Error('Math function failed');
    };

    // Call the guardrail function with the mathFunction
    const result = guardrail(mathFunction);

    // Expect the result to be an array with error message and "Guardrail was processed" message
    expect(result).toEqual(['Math function failed', 'Guardrail was processed']);
  });
});
