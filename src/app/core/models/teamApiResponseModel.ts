import { ApiResponseModel } from "src/app/core/models/apiResponseModel";
import { Team } from "./team";

export interface TeamApiResponseModel extends ApiResponseModel {
	data: Array<Team>;
}
