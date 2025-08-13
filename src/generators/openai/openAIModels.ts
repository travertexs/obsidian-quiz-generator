export const enum OpenAITextGenModel {
	GPT_4o = "gpt-4o",
	GPT_4o_MINI = "gpt-4o-mini",
	GPT_4_1 = "gpt-4.1",
	GPT_4_1_MINI = "gpt-4.1-mini",
	GPT_4_1_NANO = "gpt-4.1-nano",
	O4_MINI = "o4-mini",
	GPT_5 = "gpt-5",
	GPT_5_MINI = "gpt-5-mini",
	GPT_5_NANO = "gpt-5-nano",
}

export const openAITextGenModels: Record<OpenAITextGenModel, string> = {
	[OpenAITextGenModel.GPT_4o]: "GPT-4o",
	[OpenAITextGenModel.GPT_4o_MINI]: "GPT-4o mini",
	[OpenAITextGenModel.GPT_4_1]: "GPT-4.1",
	[OpenAITextGenModel.GPT_4_1_MINI]: "GPT-4.1 mini",
	[OpenAITextGenModel.GPT_4_1_NANO]: "GPT-4.1 nano",
	[OpenAITextGenModel.O4_MINI]: "o4-mini",
	[OpenAITextGenModel.GPT_5]: "gpt-5",
	[OpenAITextGenModel.GPT_5_MINI]: "gpt-5-mini",
	[OpenAITextGenModel.GPT_5_NANO]: "gpt-5-nano",
};

export const enum OpenAIEmbeddingModel {
	TEXT_EMBEDDING_3_SMALL = "text-embedding-3-small",
	TEXT_EMBEDDING_3_LARGE = "text-embedding-3-large",
}

export const openAIEmbeddingModels: Record<OpenAIEmbeddingModel, string> = {
	[OpenAIEmbeddingModel.TEXT_EMBEDDING_3_SMALL]: "Text Embedding 3 Small",
	[OpenAIEmbeddingModel.TEXT_EMBEDDING_3_LARGE]: "Text Embedding 3 Large",
};
