export const localStorageContact = (form) => {
  const storage = localStorage.getItem("contactInfo");
  const local = storage ? JSON.parse(storage) : [];
  let newEntry = true;

  form.id = crypto.randomUUID();

  let checkedData = local.map((el) => {
    if (
      el.firstName === form.firstName &&
      el.lastName === form.lastName &&
      el.phone === form.phone &&
      el.email === form.email
    ) {
      newEntry = false;
      return { ...el };
    }
    return el;
  });

  let error = "";

  try {
    localStorage.setItem(
      "contactInfo",
      JSON.stringify(newEntry ? [form, ...local] : [...checkedData])
    );
    const selectedData = JSON.parse(localStorage.getItem("selectedContact"));
    localStorage.setItem(
      "selectedContact",
      JSON.stringify(newEntry ? form : selectedData)
    );
  } catch (err) {
    error = err.message;
  }

  const data = {
    local: newEntry ? [form, ...local] : [...checkedData],
    error,
  };

  return data;
};
