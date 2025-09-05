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
      fullWidth //  makes it responsive automatically
      InputProps={{
       sx: {
          borderRadius: 2,
          color: "white",
          fontSize: {
            xs: "14px", // 📱 Mobile screens
            sm: "16px", // 📱 Tablet
            md: "18px", // 💻 Desktop
            lg: "20px", // 🖥️ Large screens
          },
        },
      }}
    />
  );
}

export default CustomizedInput;