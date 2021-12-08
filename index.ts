import fastify from "fastify";
import usersDomain from "./users";

const main = async () => {
  const server = fastify({
    logger: true,
  })
  await server.register(usersDomain)
  server.get('/ping', async (req, res) => {
    return 'pong\n'
  })
  server.listen(8080, "0.0.0.0", (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
