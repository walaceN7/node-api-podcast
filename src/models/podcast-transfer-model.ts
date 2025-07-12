import { StatusCode } from "../utils/status-code";
import { PodcastModel } from "./podcast-model";

export interface PodCastTransferModel {
  statusCode: StatusCode | 0;
  body: PodcastModel[];
}
