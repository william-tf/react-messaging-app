import React from "react";

function useEffectAfterMount(cb, dependencies) {
  const justMounted = React.useRef(true);
  console.log("BEFORE ", justMounted);
  React.useEffect(() => {
    if (!justMounted.current) {
      return cb();
    }
    justMounted.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
  console.log("AFTER", justMounted);
}

export default useEffectAfterMount;
