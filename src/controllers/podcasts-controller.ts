import { IncomingMessage, ServerResponse } from "http";
import { PodCastTransferModel } from "../models/podcast-transfer-model";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { ContentType } from "../utils/content-type";

const sendResponse = (res: ServerResponse, content: PodCastTransferModel) => {
  res.writeHead(content.statusCode, { "content-type": ContentType.JSON });
  res.write(JSON.stringify(content.body));

  res.end();
};

export const getListEpisodes = async (res: ServerResponse) => {
  const content: PodCastTransferModel = await serviceListEpisodes();

  sendResponse(res, content);
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodCastTransferModel = await serviceFilterEpisodes(req.url);

  sendResponse(res, content);
};
