import { useState } from "react";

const useEditableField = (initial = "") => {
  const [value, setValue] = useState<string>(initial);
  const [editing, setEditing] = useState<boolean>(false);

  const save = (val: string) => {
    setValue(val);
    setEditing(false);
  };

  return { value, setValue, editing, startEditing: () => setEditing(true), save };
};

export default useEditableField;