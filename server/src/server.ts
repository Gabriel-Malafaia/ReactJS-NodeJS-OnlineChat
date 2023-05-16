import "dotenv/config";
import { main } from "./database/connection";
import { app } from "./app";

const PORT = process.env.PORT || 3001;

main();

app.listen(PORT, () => {
  console.log(`App is running in http://localhost:${PORT}`);
});
