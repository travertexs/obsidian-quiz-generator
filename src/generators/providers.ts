export enum Provider {
	OPENAI = "OPENAI",
	GOOGLE = "GOOGLE",
	XAI = "XAI",
	ANTHROPIC = "ANTHROPIC",
	PERPLEXITY = "PERPLEXITY",
	MISTRAL = "MISTRAL",
	COHERE = "COHERE",
	OLLAMA = "OLLAMA",
}

export const providers: Record<Provider, string> = {
	[Provider.OPENAI]: "OpenAI",
	[Provider.GOOGLE]: "Google",
	[Provider.XAI]: "xAI",
	[Provider.ANTHROPIC]: "Anthropic",
	[Provider.PERPLEXITY]: "Perplexity",
	[Provider.MISTRAL]: "Mistral",
	[Provider.COHERE]: "Cohere",
	[Provider.OLLAMA]: "Ollama",
};
