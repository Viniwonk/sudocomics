import "../../style/App.css";

import tape from "../../images/tape.png";

interface Props {
  motion: boolean;
}

export default function Tape({ motion }: Props) {
  return <div className={motion ? "tapeMotionOn" : "tapeMotionOff"}></div>;
}
