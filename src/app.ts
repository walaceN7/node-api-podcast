import * as http from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";
import { StatusCode } from "./utils/status-code";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  const baseUrl = request.url?.split("?")[0];

  if (request.method === HttpMethods.GET) {
    if (baseUrl === Routes.LIST) {
      await getListEpisodes(response);
    } else if (baseUrl === Routes.EPISODE) {
      await getFilterEpisodes(request, response);
    } else {
      response.writeHead(StatusCode.NOT_FOUND);
      response.end();
    }
  } else {
    response.writeHead(StatusCode.NOT_FOUND);
    response.end();
  }
};
