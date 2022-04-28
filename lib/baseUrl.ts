const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://" + process.env.VERCEL_URL
    : "http://localhost:3000";

export default BASE_URL;
