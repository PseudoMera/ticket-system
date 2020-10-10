import React, { memo } from "react";

type ExampleProps = {};

const Example: React.FC<ExampleProps> = ({}: ExampleProps) => {
  return <p>Example React Component</p>;
};

export default memo(Example);
