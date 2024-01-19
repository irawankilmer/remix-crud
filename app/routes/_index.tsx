import type { MetaFunction } from "@remix-run/node";
import { Tooltip, Button } from "flowbite-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Irawan Kilmer" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <Tooltip content="Flowbite is awesome">
      <Button>
        Hover to find out
      </Button>
    </Tooltip>
    </div>
  );
}
