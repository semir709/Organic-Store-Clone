export const localStorageContact = (form) => {
  const storage = localStorage.getItem("contactInfo");
  const local = storage ? JSON.parse(storage) : [];

  form.id = crypto.randomUUID();

  let error = "";
  let isSaved = true;

  // in case if contact exist
  local.map((localInfo) => {
    if (
      localInfo.firstName === form.firstName &&
      localInfo.lastName === form.lastName &&
      localInfo.postCode === form.postCode &&
      localInfo.street === form.street &&
      localInfo.apartment === form.apartment
    ) {
      isSaved = false;
      try {
        localStorage.setItem("selectedContact", JSON.stringify(localInfo));
      } catch (err) {
        error = err.message;
      }
    }
  });

  // if we have new contact
  if (isSaved) {
    try {
      localStorage.setItem("contactInfo", JSON.stringify([form, ...local]));
      localStorage.setItem("selectedContact", JSON.stringify(form));
    } catch (err) {
      error = err.message;
    }
  }

  // check if there is existing contacts
  let hasContact = false;
  try {
    hasContact = !!JSON.parse(localStorage.getItem("contactInfo"));
  } catch (err) {
    error = err.message;
  }

  // return necessary data
  const data = {
    hasContact: hasContact,
    error,
  };

  return data;
};
