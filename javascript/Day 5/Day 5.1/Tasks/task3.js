// Task 3: Compare || and ?? with falsy and nullish values.

const values = [0, false, "", null, undefined];

for (const value of values) {
  console.log({
    value,
    orResult: value || "Fallback",
    nullishResult: value ?? "Fallback"
  });
}

// || uses the fallback for 0, false, and "" as well as null/undefined.
// ?? uses the fallback only for null and undefined.
