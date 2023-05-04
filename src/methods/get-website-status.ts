import { WebError } from "../types/web-error";

export interface WebsiteStatus {
  statusCode: number;
  message: string | undefined;
  color: string;
}

export const getWebsiteStatus = (
  statusCode: number,
  error?: WebError | undefined
): WebsiteStatus => {
  switch (statusCode) {
    case 200:
      return {
        statusCode: statusCode,
        message: error ? error.message : "Up and Running",
        color: "green",
      };

    case 301:
      return {
        statusCode: statusCode,
        message: error ? error.message : "Moved Permanently",
        color: "yellow",
      };

    case 302:
      return {
        statusCode: statusCode,
        message: error ? error.message : "Moved Temporarily",
        color: "yellow",
      };

    case 400:
      return {
        statusCode: statusCode,
        message: error ? error.message : "Bad Request",
        color: "red",
      };

    case 401:
      return {
        statusCode: statusCode,
        message: error ? error.message : "Unauthorized",
        color: "red",
      };

    case 403:
      return {
        statusCode: statusCode,
        message: error ? error.message : "Forbidden",
        color: "red",
      };

    case 404:
      return {
        statusCode: statusCode,
        message: error ? error.message : "Not Found",
        color: "red",
      };

    case 500:
      return {
        statusCode: statusCode,
        message: error ? error.message : "Internal Server Error",
        color: "red",
      };

    case 502:
      return {
        statusCode: statusCode,
        message: error ? error.message : "Bad Gateway",
        color: "red",
      };

    case 503:
      return {
        statusCode: statusCode,
        message: error ? error.message : "Service Unavailable",
        color: "red",
      };

    case 504:
      return {
        statusCode: statusCode,
        message: error ? error.message : "Gateway Timeout",
        color: "red",
      };

    default:
      return {
        statusCode: statusCode,
        message: error ? error.message : "Unknown Host",
        color: "red",
      };
  }
};
