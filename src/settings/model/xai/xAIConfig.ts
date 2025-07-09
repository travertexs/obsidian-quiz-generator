import { xAITextGenModel } from "../../../generators/xai/xAIModels";

export interface xAIConfig {
	xAIApiKey: string;
	xAIBaseURL: string;
	xAITextGenModel: string;
}

export const DEFAULT_XAI_SETTINGS: xAIConfig = {
	xAIApiKey: "",
	xAIBaseURL: "https://api.x.ai/v1",
	xAITextGenModel: xAITextGenModel.GROK_3_MINI,
};
