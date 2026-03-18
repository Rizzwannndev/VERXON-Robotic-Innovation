import { useTransition } from "./TransitionWrapper";

const TransitionLink = ({ to, children }) => {
  const { startTransition } = useTransition();

  return (
    <button onClick={() => startTransition(to)}>
      {children}
    </button>
  );
};

export default TransitionLink;