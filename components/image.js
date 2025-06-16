import {Figure, FigureCaption, Image} from "react-bootstrap";

export default function ImageWithCaption({children, src, alt, width, height}) {
  return (
    <div className={"text-center"}>
      <Figure>
        <Image
          width={width}
          height={height}
          alt={alt}
          src={src}
          className={"mb-2"}
          rounded
          fluid
        />
        <FigureCaption>
          {children}
        </FigureCaption>
      </Figure>
    </div>
  );
}

let _example = (
  <ImageWithCaption src={"trubus.jpg"}>
    This is a caption
  </ImageWithCaption>
)