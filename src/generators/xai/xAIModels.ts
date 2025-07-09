export const enum xAITextGenModel {
	GROK_3_MINI = "grok-3-mini",
	GROK_3 = "grok-3",
}

export const xAITextGenModels: Record<xAITextGenModel, string> = {
	[xAITextGenModel.GROK_3_MINI]: "Grok 3 Mini",
	[xAITextGenModel.GROK_3]: "Grok 3",
};
