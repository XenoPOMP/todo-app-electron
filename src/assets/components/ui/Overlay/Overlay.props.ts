export interface OverlayProps {
	className?: string;
	backdrop: {
		blurAmount?: number;
		blurColor?: string;
	};
	trigger: boolean;
	flexCenter?: boolean;
}
