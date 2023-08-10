const BASE_PATH_FORAPI =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://adeelhackathon.vercel.app";

//  local host ya deploy hwa link attach ho ga server se

export default BASE_PATH_FORAPI;
