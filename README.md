# Object Property Checker

## Instructions

Write a JavaScript function called `hasKey` that takes a key as an input and checks if the global object sampleObject contains that key. The function should return true if the object contains the key, and false otherwise.

## Examples

```
const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };
hasKey("red"); // true
hasKey("blue"); // false
hasKey("white"); // true
```

## Acceptance Criteria

- The function should return true if the global object sampleObject contains the key passed as an argument, and false otherwise.
- The function should accept a single input, which is a valid key.
- The function should not modify the sampleObject object or any of its properties.
