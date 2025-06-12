import {Figure, FigureCaption, Image} from "react-bootstrap";

export default function ImageWithCaption({children, src, alt, width = 200, height = 200}) {
  return (
    <div className={"text-center"}>
      <Figure className={"border border-light-subtle p-2"}>
        <Image
          width={width}
          height={height}
          alt={alt}
          src={src}
          className={"mb-2"}
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