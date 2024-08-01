import { Composition } from "remotion";
import { HelloWorld, myCompSchema } from "./HelloWorld";
import { Logo, myCompSchema2 } from "./HelloWorld/Logo";
import { MyComposition } from "./MyComposition/MyComposition";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComposition"
        durationInFrames={60}
        fps={30}
        width={1920}
        height={1080}
        component={MyComposition}
      />
    </>
  );
};
