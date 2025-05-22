export const enum OpenAITextGenModel {
	GPT_3_5_TURBO = "gpt-3.5-turbo",
	GPT_4_TURBO = "gpt-4-turbo",
	GPT_4o_MINI = "gpt-4o-mini",
	GPT_4o = "gpt-4o",
	GPT_4_1 = "gpt-4.1",
	GPT_4_1_MINI = "gpt-4.1-mini",
	GPT_4_1_NANO = "gpt-4.1-nano",
	O3_MINI = "o3-mini",
	O4_MINI = "o4-mini",
}

export const openAITextGenModels: Record<OpenAITextGenModel, string> = {
	[OpenAITextGenModel.GPT_3_5_TURBO]: "GPT-3.5 Turbo",
	[OpenAITextGenModel.GPT_4_TURBO]: "GPT-4 Turbo",
	[OpenAITextGenModel.GPT_4o_MINI]: "GPT-4o mini",
	[OpenAITextGenModel.GPT_4o]: "GPT-4o",
	[OpenAITextGenModel.GPT_4_1]: "GPT-4.1",
	[OpenAITextGenModel.GPT_4_1_MINI]: "GPT-4.1 mini",
	[OpenAITextGenModel.GPT_4_1_NANO]: "GPT-4.1 nano",
	[OpenAITextGenModel.O3_MINI]: "o3-mini",
	[OpenAITextGenModel.O4_MINI]: "o4-mini",
};

export const enum OpenAIEmbeddingModel {
	TEXT_EMBEDDING_3_SMALL = "text-embedding-3-small",
	TEXT_EMBEDDING_3_LARGE = "text-embedding-3-large",
}

export const openAIEmbeddingModels: Record<OpenAIEmbeddingModel, string> = {
	[OpenAIEmbeddingModel.TEXT_EMBEDDING_3_SMALL]: "Text Embedding 3 Small",
	[OpenAIEmbeddingModel.TEXT_EMBEDDING_3_LARGE]: "Text Embedding 3 Large",
};
