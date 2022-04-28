const BASE_URL =
  process.env.NODE_ENV === "production" || process.env.VERCEL_ENV === "preview"
    ? "https://" + process.env.VERCEL_URL
    : "http://localhost:3000";

export default BASE_URL;
