export interface EndlessTimerProps {
	name?: string;
	callback: () => void | Promise<void>;
	interval: number;
}
