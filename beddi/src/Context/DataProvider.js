import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export default function DataProvider(props) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://apiv2.tajir.store/web/stores/home/beddishop")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);
  return (
    <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
  );
}
