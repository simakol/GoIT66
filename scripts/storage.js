const save = (key, value) => {
  try {
    const serializedData = JSON.stringify(value);
    localStorage.setItem(key, serializedData);
  } catch (err) {
    console.error(err.message);
  }
};

const load = (key) => {
  try {
    const serializedData = localStorage.getItem(key);
    return serializedData === null ? undefined : JSON.parse(serializedData);
  } catch (err) {
    console.error(err.message);
  }
};

export { save, load };
