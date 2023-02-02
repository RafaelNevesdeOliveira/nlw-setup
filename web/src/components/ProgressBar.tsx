import * as Progress from "@radix-ui/react-progress";
import React from "react";
import '../styles/global.css'

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar(props: ProgressBarProps){
  const [progress, setProgress] = React.useState(props.progress);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(progress), 500);
    return () => clearTimeout(timer);
  }, []);
  
  return(
    <Progress.Root className="ProgressRoot mt-4" value={props.progress}>
    <Progress.Indicator
      className="ProgressIndicator"
      style={{ transform: `translateX(-${100 - props.progress}%)` }}
    />
  </Progress.Root>
  )
}