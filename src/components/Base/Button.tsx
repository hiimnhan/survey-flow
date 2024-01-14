import {
  ButtonProps as BaseButtonProps,
  Button as BaseButton,
} from "../ui/button";
import Icon from "./Icon";

interface ButtonProps extends BaseButtonProps {
  icon?: React.ComponentProps<typeof Icon>["name"];
}

export default function Button({ icon, children, ...props }: ButtonProps) {
  return (
    <BaseButton {...props}>
      {icon && <Icon name={icon} className="mr-2 h-4 w-4" />}
      {children}
    </BaseButton>
  );
}
