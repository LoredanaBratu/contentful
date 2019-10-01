import { createClient } from "contentful";

const client = createClient({
  space: "pnxg86r3evw1",
  accessToken: "JkC-GVpJdRkLS7HNxX5PhS0m0ZozGguodTz6MG-RrUY",
  retryOnError: false
});

export default client;
