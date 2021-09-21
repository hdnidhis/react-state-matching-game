import { useEffect, useRef, useState } from "react";

export default useHover = () => {
	const ref = useRef();
	const [hovered, setHovered] = useState(false);
	enter = () => {
		setHovered(true);
	};
	leave = () => {
		setHovered(false);
	};
	useEffect(() => {
		const refCopy = ref;
		refCopy.current.addEventListener("mouseenter", enter);
		refCopy.current.addEventListener("mouseleave", leave);
		return () => {
			refCopy.current.removeEventListener("mouseenter", enter);
			refCopy.current.removeEventListener("mouseleave", leave);
		};
	});
	return [res, hovered];
};
