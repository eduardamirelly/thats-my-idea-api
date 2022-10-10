import App from "./app";
import { API_PORT } from "./config/env";

const app = new App().express;

app.listen(API_PORT, () => console.log(`API running at port ${API_PORT} 🔥`));
