// Task 2: Safely access a phone number when contact may be missing.

const userWithContact = {
  name: "Asha",
  contact: {
    phone: "9876543210"
  }
};

const userWithoutContact = {
  name: "Ravi"
};

console.log(userWithContact.contact?.phone ?? "Phone not available");
console.log(userWithoutContact.contact?.phone ?? "Phone not available");
