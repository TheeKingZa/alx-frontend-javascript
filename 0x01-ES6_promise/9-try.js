export default function guardrail(mathFunction) {
  // Initialize an empty array to store results and errors
  const queue = [];

  // Try executing the mathFunction and catch any errors
  try {
    // Execute the mathFunction and push the result to the queue
    queue.push(mathFunction());
  } catch (error) {
    // If an error occurs, push the error message to the queue
    queue.push(error.message);
  } finally {
    // Add the message "Guardrail was processed" to the queue
    queue.push('Guardrail was processed');
  }

  // Return the queue array
  return queue;
}
