import { ModalCreateEvent } from "./modal-create-event";
import { ModalCreateMember } from "./modal-create-member";

export function RenderAllModal() {
  return (
    <>
      <ModalCreateEvent />
      <ModalCreateMember />
    </>
  );
}
