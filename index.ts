import fastify from "fastify";
import usersDomain from "./users";

const main = async () => {
  const server = fastify({
    logger: true,
  })
  await server.register(usersDomain)
  server.listen(8080, (err, address) => {
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
