import ImageWithCaption from "@/components/image";

export default function NotFound() {
  return (
    <div className={"text-center pt-5"}>
      <div className={"mb-5"}>
        <h1 className={"fw-bold"}>404</h1>
        <p className={"fw-bold"}>Page not found :(</p>
      </div>
      <div>
        <p>Please have a magnificent cactus instead:</p>
        <ImageWithCaption src={"trubus.jpg"}>
          Hi, my name is Trubus the  cactus!
        </ImageWithCaption>
      </div>
    </div>
  );
}