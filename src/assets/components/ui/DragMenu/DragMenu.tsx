import { motion } from 'framer-motion';
import { FC, PropsWithChildren, useRef } from 'react';

import { DragMenuProps } from './DragMenu.props';

const DragMenu: FC<PropsWithChildren<DragMenuProps>> = ({
	children,
	classNames,
	axis,
}) => {
	const constraintRef = useRef(null);

	return (
		<motion.div ref={constraintRef} className={classNames?.constraint}>
			<motion.div
				drag={axis}
				dragConstraints={constraintRef}
				dragElastic={0.2}
				className={classNames?.draggable}
			>
				{children}
			</motion.div>
		</motion.div>
	);
};

export default DragMenu;
