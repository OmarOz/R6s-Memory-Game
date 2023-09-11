import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // const abortCont=new AbortController();

    setTimeout(
      () =>
        fetch(url)
          .then((res) => {
            if (!res.ok) {
              throw Error("could not catch");
            }
            return res.json();
          })
          .then((data) => {
            // console.log(data);
            setData(data);
            setLoading(false);
            setError(null);
          })
          .catch((err) => {
            if (err.name === "AbortError") {
              console.log("aborted");
            } else {
              setLoading(false);
              setError(err.message);
              //console.log(err.message);
            }
          }),

      1000
    );
    // return () => abortCont.abort()
  }, [url]);
  return { data, loading, error };
};
export default useFetch;
