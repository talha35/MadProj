import Constants from "expo-constants";
const { manifest } = Constants;
export const baseUrl =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? "http://" + manifest.debuggerHost.split(`:`).shift().concat(`:3001/`)
    : `api.example.com`;
