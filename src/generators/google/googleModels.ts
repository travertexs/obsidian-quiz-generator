export const enum GoogleTextGenModel {
	GEMINI_1_5_FLASH = "gemini-1.5-flash",
	GEMINI_1_5_PRO = "gemini-1.5-pro",
	GEMINI_2_0_FLASH_LITE = "gemini-2.0-flash-lite",
	GEMINI_2_0_FLASH = "gemini-2.0-flash",
}

export const googleTextGenModels: Record<GoogleTextGenModel, string> = {
	[GoogleTextGenModel.GEMINI_1_5_FLASH]: "Gemini 1.5 Flash",
	[GoogleTextGenModel.GEMINI_1_5_PRO]: "Gemini 1.5 Pro",
	[GoogleTextGenModel.GEMINI_2_0_FLASH_LITE]: "Gemini 2.0 Flash-Lite",
	[GoogleTextGenModel.GEMINI_2_0_FLASH]: "Gemini 2.0 Flash",
};

export const enum GoogleEmbeddingModel {
	TEXT_EMBEDDING_004 = "text-embedding-004",
}

export const googleEmbeddingModels: Record<GoogleEmbeddingModel, string> = {
	[GoogleEmbeddingModel.TEXT_EMBEDDING_004]: "Text Embedding 004",
};
