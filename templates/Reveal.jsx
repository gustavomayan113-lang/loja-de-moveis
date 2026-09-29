import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

function resolveTag(as) {
  if (typeof as === "string") return motion[as] ?? motion.div;
  return as ?? motion.div;
}

export function Reveal({
  children,
  delay = 0,
  y = 26,
  x = 0,
  once = true,
  amount = 0.25,
  as = "div",
  className,
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = resolveTag(as);

  return (
    <MotionTag
      className={`reveal ${className ?? ""}`.trim()}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function Stagger({ children, className, gap = 0.09, delay = 0, as = "div" }) {
  const MotionTag = resolveTag(as);
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({ children, className, y = 24, as = "div", ...rest }) {
  const reduce = useReducedMotion();
  const MotionTag = resolveTag(as);
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: reduce ? { opacity: 0 } : { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: EASE },
        },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function SectionHead({ eyebrow, title, lead, center = false, dark = false }) {
  return (
    <div
      className={`section-head ${center ? "section-head--center" : ""}`.trim()}
    >
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="title">{title}</h2>
      </Reveal>
      {lead ? (
        <Reveal delay={0.16}>
          <p className="lead">{lead}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
