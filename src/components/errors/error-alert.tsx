import { Alert } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

export function ErrorAlert() {
  return (
    <Alert icon={<IconAlertCircle size={16} />} title="Error" color="yellow">
      An error has occured, try reloading the page
    </Alert>
  );
}
