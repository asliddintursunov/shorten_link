import axios from "axios";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { HiOutlineClipboardCopy } from "react-icons/hi";

function App() {
  const BASE_URL = "https://swiftlinkapi.azurewebsites.net/api/shorten";
  const [url, setUrl] = useState<string>("");
  const [isPending, setIsPending] = useState<boolean | null>(null);
  const [result, setResult] = useState<string>("");
  const [copy, setCopy] = useState<boolean>(false);

  const handleSubmit = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(url);

    setIsPending(true);
    axios
      .post(BASE_URL, {
        url: url,
      })
      .then((res) => {
        console.log(res);
        setIsPending(false);
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsPending(false);
      });
  };

  const copyUrl = function () {
    if (result !== "") {
      console.log(result);
      const el = document.createElement("textarea");
      el.value = result;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }

    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    }, 1500);
  };
  return (
    <div
      style={{
        height: "calc(100vh - 120px)",
      }}
      className="overflow-hidden px-2"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-gradient text-center">
        Shorten Yout Loooong Links
      </h1>
      <br />
      <br />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 max-w-[425px] mx-auto"
      >
        <input
          disabled={isPending === true}
          type="text"
          placeholder="Enter url"
          className="input input-bordered w-full"
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="btn btn-primary"
          disabled={isPending === true || url === ""}
        >
          Shorten
        </button>
      </form>
      {isPending === false && (
        <div className="flex flex-col gap-2 max-w-[425px] md:mx-auto mx-2">
          <p className="text-lg md:text-xl font-bold result-gradient">
            Result:{" "}
            <a
              href={result}
              className="font-medium text-sm md:text-[16px] cursor-pointer hover:underline hover:decoration-orange-300"
              target="_blank"
            >
              {result}
            </a>
          </p>
          {copy && (
            <>
              <button className="btn text-xl md:text-2xl select-none cursor-pointer active:text-lg md:active:text-xl transition-all copy-btn">
                <HiOutlineClipboardCopy />
              </button>
              <span className="text-sm px-3 py-1 rounded-sm bg-indigo-500 text-white copy-info">
                copied
              </span>
            </>
          )}
          {!copy && (
            <>
              <button
                onClick={copyUrl}
                className="btn text-xl md:text-2xl select-none cursor-pointer active:text-md md:active:text-lg transition-all copy-btn"
              >
                <IoCopyOutline />
              </button>
              <span className="text-sm px-3 py-1 rounded-sm bg-indigo-500 text-white copy-info">
                copy
              </span>
            </>
          )}
        </div>
      )}
      {isPending === true && (
        <div className="max-w-[425px] mx-auto text-center mt-8">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
    </div>
  );
}

export default App;
