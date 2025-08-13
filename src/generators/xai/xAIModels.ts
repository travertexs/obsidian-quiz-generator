export const enum xAITextGenModel {
	GROK_3_MINI = "grok-3-mini",
	GROK_3 = "grok-3",
	GROK_4 = "grok-4-0709",
}

export const xAITextGenModels: Record<xAITextGenModel, string> = {
	[xAITextGenModel.GROK_3_MINI]: "Grok 3 Mini",
	[xAITextGenModel.GROK_3]: "Grok 3",
	[xAITextGenModel.GROK_4]: "Grok 4",
};
