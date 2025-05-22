export const enum GoogleTextGenModel {
	GEMINI_1_5_FLASH = "gemini-1.5-flash",
	GEMINI_1_5_PRO = "gemini-1.5-pro",
	GEMINI_2_0_FLASH_LITE = "gemini-2.0-flash-lite",
	GEMINI_2_0_FLASH = "gemini-2.0-flash",
	GEMINI_2_5_FLASH = "gemini-2.5-flash-preview-05-20",
	GEMINI_2_5_PRO_EXP = "gemini-2.5-pro-exp-03-25",
	GEMINI_2_5_PRO_PREVIEW = "gemini-2.5-pro-preview-05-06",
}

export const googleTextGenModels: Record<GoogleTextGenModel, string> = {
	[GoogleTextGenModel.GEMINI_1_5_FLASH]: "Gemini 1.5 Flash",
	[GoogleTextGenModel.GEMINI_1_5_PRO]: "Gemini 1.5 Pro",
	[GoogleTextGenModel.GEMINI_2_0_FLASH_LITE]: "Gemini 2.0 Flash-Lite",
	[GoogleTextGenModel.GEMINI_2_0_FLASH]: "Gemini 2.0 Flash",
	[GoogleTextGenModel.GEMINI_2_5_FLASH]: "Gemini 2.5 Flash",
	[GoogleTextGenModel.GEMINI_2_5_PRO_EXP]: "Gemini 2.5 Pro Experimental",
	[GoogleTextGenModel.GEMINI_2_5_PRO_PREVIEW]: "Gemini 2.5 Pro Preview",
};

export const enum GoogleEmbeddingModel {
	TEXT_EMBEDDING_004 = "text-embedding-004",
}

export const googleEmbeddingModels: Record<GoogleEmbeddingModel, string> = {
	[GoogleEmbeddingModel.TEXT_EMBEDDING_004]: "Text Embedding 004",
};
