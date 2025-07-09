import { Setting } from "obsidian";
import QuizGenerator from "../../main";
import { Provider, providers } from "../../generators/providers";
import {
	displayOpenAIProviderSettings,
	displayOpenAITextModelSettings,
	displayOpenAIEmbeddingModelSettings,
} from "./openai/openAISettings";
import {
	displayGoogleProviderSettings,
	displayGoogleTextModelSettings,
	displayGoogleEmbeddingModelSettings,
} from "./google/googleSettings";
import {
	displayXAIProviderSettings,
	displayXAITextModelSettings,
	displayXAIEmbeddingModelSettings,
} from "./xai/xAISettings";
import {
	displayAnthropicProviderSettings,
	displayAnthropicTextModelSettings,
	displayAnthropicEmbeddingModelSettings,
} from "./anthropic/anthropicSettings";
import {
	displayPerplexityProviderSettings,
	displayPerplexityTextModelSettings,
	displayPerplexityEmbeddingModelSettings,
} from "./perplexity/perplexitySettings";
import {
	displayMistralProviderSettings,
	displayMistralTextModelSettings,
	displayMistralEmbeddingModelSettings,
} from "./mistral/mistralSettings";
import {
	displayCohereProviderSettings,
	displayCohereTextModelSettings,
	displayCohereEmbeddingModelSettings,
} from "./cohere/cohereSettings";
import {
	displayOllamaProviderSettings,
	displayOllamaTextModelSettings,
	displayOllamaEmbeddingModelSettings,
} from "./ollama/ollamaSettings";

export const displayProviderSettings = (containerEl: HTMLElement, plugin: QuizGenerator, refreshSettings: () => void): void => {
	new Setting(containerEl).setName("Provider").setHeading();
	new Setting(containerEl)
		.setName("Provider")
		.setDesc("Model provider to display.")
		.addDropdown(dropdown =>
			dropdown
				.addOptions(providers)
				.setValue(plugin.settings.provider)
				.onChange(async (value) => {
					plugin.settings.provider = value;
					await plugin.saveSettings();
					refreshSettings();
				})
		);

	switch (plugin.settings.provider){
		case Provider.OPENAI:
			displayOpenAIProviderSettings(containerEl, plugin, refreshSettings);
			break;
		case Provider.GOOGLE:
			displayGoogleProviderSettings(containerEl, plugin, refreshSettings);
			break;
		case Provider.XAI:
			displayXAIProviderSettings(containerEl, plugin, refreshSettings);
			break;
		case Provider.ANTHROPIC:
			displayAnthropicProviderSettings(containerEl, plugin, refreshSettings);
			break;
		case Provider.PERPLEXITY:
			displayPerplexityProviderSettings(containerEl, plugin, refreshSettings);
			break;
		case Provider.MISTRAL:
			displayMistralProviderSettings(containerEl, plugin, refreshSettings);
			break;
		case Provider.COHERE:
			displayCohereProviderSettings(containerEl, plugin, refreshSettings);
			break;
		case Provider.OLLAMA:
			displayOllamaProviderSettings(containerEl, plugin, refreshSettings);
			break;
		default:
			break;
	}
};

export const displayTextModelSettings = (containerEl: HTMLElement, plugin: QuizGenerator, refreshSettings: () => void): void => {
	new Setting(containerEl).setName("Text Generation Model").setHeading();

	new Setting(containerEl)
		.setName("Provider")
		.setDesc("Model provider to use for text generation.")
		.addDropdown(dropdown =>
			dropdown
				.addOptions(providers)
				.setValue(plugin.settings.provider)
				.onChange(async (value) => {
					plugin.settings.provider = value;
					await plugin.saveSettings();
					refreshSettings();
				})
		);

	switch (plugin.settings.provider){
		case Provider.OPENAI:
			displayOpenAITextModelSettings(containerEl, plugin, refreshSettings);
			break;
		case Provider.GOOGLE:
			displayGoogleTextModelSettings(containerEl, plugin, refreshSettings);
			break;
		case Provider.XAI:
			displayXAITextModelSettings(containerEl, plugin, refreshSettings);
			break;
		case Provider.ANTHROPIC:
			displayAnthropicTextModelSettings(containerEl, plugin, refreshSettings);
			break;
		case Provider.PERPLEXITY:
			displayPerplexityTextModelSettings(containerEl, plugin, refreshSettings);
			break;
		case Provider.MISTRAL:
			displayMistralTextModelSettings(containerEl, plugin, refreshSettings);
			break;
		case Provider.COHERE:
			displayCohereTextModelSettings(containerEl, plugin, refreshSettings);
			break;
		case Provider.OLLAMA:
			displayOllamaTextModelSettings(containerEl, plugin, refreshSettings);
			break;
		default:
			break;
	}
};

export const displayEmbeddingModelSettings = (containerEl: HTMLElement, plugin: QuizGenerator, refreshSettings: () => void): void => {
	new Setting(containerEl).setName("Embedding Model").setHeading();

	new Setting(containerEl)
		.setName("Provider")
		.setDesc("Model provider to use for embedding.")
		.addDropdown(dropdown =>
			dropdown
				.addOptions(providers)
				.setValue(plugin.settings.embeddingProvider)
				.onChange(async (value) => {
					plugin.settings.embeddingProvider = value;
					await plugin.saveSettings();
					refreshSettings();
				})
		);

	switch (plugin.settings.embeddingProvider){
		case Provider.OPENAI:
			displayOpenAIEmbeddingModelSettings(containerEl, plugin, refreshSettings);
			break;
		case Provider.GOOGLE:
			displayGoogleEmbeddingModelSettings(containerEl, plugin, refreshSettings);
			break;
		case Provider.XAI:
			displayXAIEmbeddingModelSettings(containerEl, plugin, refreshSettings);
			break;
		case Provider.ANTHROPIC:
			displayAnthropicEmbeddingModelSettings(containerEl, plugin, refreshSettings);
			break;
		case Provider.PERPLEXITY:
			displayPerplexityEmbeddingModelSettings(containerEl, plugin, refreshSettings);
			break;
		case Provider.MISTRAL:
			displayMistralEmbeddingModelSettings(containerEl, plugin, refreshSettings);
			break;
		case Provider.COHERE:
			displayCohereEmbeddingModelSettings(containerEl, plugin, refreshSettings);
			break;
		case Provider.OLLAMA:
			displayOllamaEmbeddingModelSettings(containerEl, plugin, refreshSettings);
			break;
		default:
			break;
	}
};