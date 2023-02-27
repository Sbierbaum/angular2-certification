import { ApiResponseModel } from "src/app/core/models/apiResponseModel";
import { Game } from "./game";

export interface GameApiResponseModel extends ApiResponseModel {
	data: Array<Game>;
}
