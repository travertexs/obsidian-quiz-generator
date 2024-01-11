import { App, FuzzySuggestModal } from "obsidian";

export default class FolderAdder extends FuzzySuggestModal<string> {
	private callback: ((selectedItem: string, evt: MouseEvent | KeyboardEvent) => void) | null = null;
	private readonly folders: string[];

	constructor(app: App, folders: string[]) {
		super(app);
		this.folders = folders;

		this.onChooseItem = this.onChooseItem.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	onOpen() {
		super.onOpen();
		document.addEventListener("keydown", this.handleKeyPress);

		this.modalEl.style.top = "20%";
		this.modalEl.style.left = "30%";
	}

	onClose() {
		document.removeEventListener("keydown", this.handleKeyPress);
		super.onClose();
	}

	setCallback(callback: (selectedItem: string, evt: MouseEvent | KeyboardEvent) => void): void {
		this.callback = callback;
	}

	onChooseItem(item: string, evt: MouseEvent | KeyboardEvent): void {
		if (this.callback) {
			this.callback(item, evt);
		}
	}

	getItemText(item: string): string {
		return item;
	}

	getItems(): string[] {
		return this.folders;
	}

	private handleKeyPress(event: KeyboardEvent) {
		if (event.code === "Escape") {
			this.close();
		}
	}

}
