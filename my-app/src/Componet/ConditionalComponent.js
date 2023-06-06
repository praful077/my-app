import { useState } from "react";

export default function ConditionalComponent() {
  const [display] = useState(false);

  return display ? (
    <div>
      <h3>True conditional This is a true conditional</h3>
    </div>
  ) : (
    <div>
      <h3>false conditional This is a false conditional</h3>
    </div>
  );
}
