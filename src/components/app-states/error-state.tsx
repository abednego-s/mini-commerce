import { Alert } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

export function ErrorState() {
  return (
    <Alert icon={<IconAlertCircle size={16} />} title="Error" color="yellow">
      An error has occured, try reloading the page
    </Alert>
  );
}
