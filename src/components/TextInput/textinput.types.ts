export type TextInputProps = {
    id: string;
    type: "text" | "password";
    placeholder?: string;
    defaultValue: string;
    onChangeHandler: (arg0: string) => void;
    classes?: string;
};