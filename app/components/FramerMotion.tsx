import { Box } from "@chakra-ui/react";
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

export function EnterX({
  isRight = false,
  duration = 0.3,
  index = 0,
  delayStep = 0.1,
  children,
}: any) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0, x: isRight ? 100 : -100 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration,
            delay: index * delayStep,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function EnterY({
  isBottom = false,
  duration = 0.3,
  index = 0,
  delayStep = 0.1,
  children,
}: any) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0, y: isBottom ? 100 : -100 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            delay: index * delayStep,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

const MotionBox = motion.create(Box);

export default function AutoScrollSlider({
  items = [],
  renderItem,
  speed = 30,
}: any) {
  const controls = useAnimation();

  useEffect(() => {
    const loop = async () => {
      while (true) {
        await controls.start({
          x: "-100%",
          transition: { duration: speed, ease: "linear" },
        });
        controls.set({ x: "0" });
      }
    };
    loop();
  }, [controls, speed]);

  const looped = Array(10).fill(items).flat();

  return (
    <Box overflow="hidden" w="full">
      <MotionBox
        display="flex"
        gap={6}
        animate={controls}
        px={4}
        minW="max-content"
      >
        {looped.map((item, idx) => (
          <Box key={idx}>{renderItem(item, idx)}</Box>
        ))}
      </MotionBox>
    </Box>
  );
}
