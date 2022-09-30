function handleRequest(method: "POST" | "GET" | "UPDATE" | "DELETE"): void {
  console.log(method);
}

const req = {
  method: "POST",
} as const;

handleRequest(req.method);
