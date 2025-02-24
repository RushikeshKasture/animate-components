import FlipButton from "@/components/btnFlip";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <div className="flex flex-row items-start gap-4 justify-start">
      <div className="flex items-center flex-col gap-4 justify-center m-4">
        <h4>on initial load</h4>
        <Button variant="filled" animationVariant="fade">
          fade
        </Button>
        <Button variant="filled" animationVariant="slideTop">
          slideTop
        </Button>
        <Button variant="filled" animationVariant="slideBottom">
          slideBottom
        </Button>
        <Button variant="filled" animationVariant="slideLeft">
          slideLeft
        </Button>
        <Button variant="filled" animationVariant="slideRight">
          slideRight
        </Button>
        <Button variant="filled" animationVariant="slideRight">
          slideRight
        </Button>
        <Button variant="default" animationVariant="spring">
          spring
        </Button>
      </div>
      <div className="flex items-center flex-col gap-4 justify-center m-4">
        <h4>on hover</h4>
        <Button variant="default" animationVariant="scale">
          scale
        </Button>
        <Button variant="default" animationVariant="rotate">
          rotate
        </Button>
        <FlipButton />
      </div>
    </div>
  );
}
