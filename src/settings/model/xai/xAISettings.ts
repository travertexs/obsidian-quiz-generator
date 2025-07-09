import { Setting } from "obsidian";
import QuizGenerator from "../../../main";
import { xAITextGenModels } from "../../../generators/xai/xAIModels";
import { DEFAULT_XAI_SETTINGS } from "./xAIConfig";

export const displayXAIProviderSettings = (containerEl: HTMLElement, plugin: QuizGenerator, refreshSettings: () => void): void => {
	new Setting(containerEl)
		.setName("xAI API key")
		.setDesc("Enter your xAI API key here.")
		.addText(text =>
			text
				.setValue(plugin.settings.xAIApiKey)
				.onChange(async (value) => {
					plugin.settings.xAIApiKey = value.trim();
					await plugin.saveSettings();
				}).inputEl.type = "password"
		);

	new Setting(containerEl)
		.setName("xAI API base url")
		.setDesc("Enter your xAI API base URL here.")
		.addButton(button =>
			button
				.setClass("clickable-icon")
				.setIcon("rotate-ccw")
				.setTooltip("Restore default")
				.onClick(async () => {
					plugin.settings.xAIBaseURL = DEFAULT_XAI_SETTINGS.xAIBaseURL;
					await plugin.saveSettings();
					refreshSettings();
				})
		)
		.addText(text =>
			text
				.setValue(plugin.settings.xAIBaseURL)
				.onChange(async (value) => {
					plugin.settings.xAIBaseURL = value.trim();
					await plugin.saveSettings();
				})
		);
};

export const displayXAITextModelSettings = (containerEl: HTMLElement, plugin: QuizGenerator, refreshSettings: () => void): void => {
	new Setting(containerEl)
		.setName("Generation model")
		.setDesc("Model used for quiz generation.")
		.addDropdown(dropdown =>
			dropdown
				.addOptions(xAITextGenModels)
				.setValue(plugin.settings.xAITextGenModel)
				.onChange(async (value) => {
					plugin.settings.xAITextGenModel = value;
					await plugin.saveSettings();
				})
		);
};

export const displayXAIEmbeddingModelSettings = (containerEl: HTMLElement, plugin: QuizGenerator, refreshSettings: () => void): void => {

};
