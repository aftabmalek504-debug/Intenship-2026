# Task 6: Browser Storage Security

- Do not store passwords, secret API keys, or sensitive authentication data in localStorage or sessionStorage.
- JavaScript running on the same origin can read browser storage, so a cross-site scripting (XSS) vulnerability may expose it.
- Browser storage is controlled by the client and must not be trusted for permissions, payment status, or other security decisions.
- Use appropriate server-side storage and secure authentication mechanisms for sensitive data.
