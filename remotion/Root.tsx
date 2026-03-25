import { Composition } from "remotion";
import { HelloWorld } from "./HelloWorld";
import { CasaHunter } from "./CasaHunter";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="CasaHunter"
        component={CasaHunter}
        durationInFrames={1350}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
