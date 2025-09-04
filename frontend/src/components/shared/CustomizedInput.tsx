import TextField from "@mui/material/TextField";

// 1. Update the Props type to include autoComplete
type Props = {
  name: string;
  type: string;
  label: string;
  autoComplete?: string; // Add this line
};

function CustomizedInput(props: Props) {
  return (
    <TextField
      margin="normal"
      InputLabelProps={{ style: { color: "white" } }}
      name={props.name}
      label={props.label}
      type={props.type}
      // 2. Pass the autoComplete prop directly to TextField
      autoComplete={props.autoComplete}
      InputProps={{
        style: {
          width: "400px",
          borderRadius: 10,
          fontSize: 20,
          color: "white",
        },
      }}
    />
  );
}

export default CustomizedInput;