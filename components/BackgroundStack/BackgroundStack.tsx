import { Stack } from "@mui/system";

interface PropsType {
  children: React.ReactNode;
  spacing: {
    xs: number;
    md: number;
    sm: number;
  };
}

const BackgroundStack = ({ children, spacing }: PropsType) => {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      spacing={spacing}
      sx={{
        padding: "20px 0 0 0",
      }}
    >
      {children}
    </Stack>
  );
};

export default BackgroundStack;
