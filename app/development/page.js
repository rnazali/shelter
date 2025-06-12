import {
  Alert,
  Button,
  Stack
} from "react-bootstrap";
import {getLorem} from "@/components/utilities";
import ImageWithCaption from "@/components/image";


export default function Development() {
  return (
    <div>
      <h1>Development page</h1>

      {getLorem()}

      <Stack direction="horizontal" gap={1} className={"mb-4"}>
        <Button variant={"primary"}>Asd</Button>
        <Button variant="danger">Asd</Button>
        <Button variant="outline-danger">Asd</Button>
      </Stack>

      <>
        <Alert variant="warning">Alert</Alert>
      </>

      <>
        <ImageWithCaption src={"trubus.jpg"}>
          This is a caption about very cute little cactus.
        </ImageWithCaption>
      </>
    </div>
  )
}