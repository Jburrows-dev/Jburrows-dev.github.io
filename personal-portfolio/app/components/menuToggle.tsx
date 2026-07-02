import * as motion from "motion/react-client"
import type { Variants } from "motion/react"
import { stagger } from "motion/react"

interface PathProps {
    d?: string
    variants: Variants
    color?: string
    transition?: { duration: number }
}

function Path(props: PathProps) {
    let color = props.color ? props.color : "text"

    return (
        <motion.path
            fill="transparent"
            strokeWidth="2.5"
            stroke={`var(--${color})`}
            strokeLinecap="round"
            {...props}
        />
    )
}

type MenuToggleProps = {
    className?: string,
    color?: string,
    isOpen: boolean;
    toggle: () => void
}

export default function MenuToggle({ className, color, isOpen, toggle }: MenuToggleProps) {
    if (!className) className = "";
    return (
        <button className={`drawer-toggle-btn ${className}`} onClick={toggle} aria-label="Toggle menu">
            <motion.svg
                width="20"
                height="20"
                viewBox="0 0 23 23"
                initial={false}
                animate={isOpen ? "open" : "closed"}
            >
                <Path
                    color={color}
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" },
                    }}
                />
                <Path
                    color={color}
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.1 }}
                />
                <Path
                    color={color}
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" },
                    }}
                />
            </motion.svg>
        </button>
    )
}