// Task 2: Handle invalid JSON gracefully.

const invalidJson = '{"name":}';

try {
  const data = JSON.parse(invalidJson);
  console.log(data);
} catch (error) {
  console.error("Invalid JSON data. Please check the format.");
}
