import { MetaResponseModel } from "./metaReponseModel";

export interface ApiResponseModel {
	data: Array<any>;
	meta: MetaResponseModel;
}
