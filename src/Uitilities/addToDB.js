const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList");
    if (storedBookSTR) {
      const storedBookData = JSON.parse(storedBookSTR); // 🔴 fixed variable name
      return storedBookData; // 🔴 return added
    } else {
      return []; // empty array if nothing in storage
    }
  };
  
  const addToStoredDB = (id) => {
    const storedBookData = getStoredBook(); // 🔴 fetch current list
    if (storedBookData.includes(id)) {
      alert("This book already exists");
    } 
    else {
      storedBookData.push(id);
      const data = JSON.stringify(storedBookData);
      localStorage.setItem("readList", data);
    }
  };
  
  export { addToStoredDB, getStoredBook }; // ✅ optional: export both
  