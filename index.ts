
const server = Bun.serve({
    port: 3000,
    fetch(request) {
      return new Response("Server is online!");
    },
  });
  
  console.log(`Listening on ${server.url}`);