import createConnection from "../mysql-connection";

async function insert() {
  const connection = await createConnection();
  const [result] = await connection.execute(
    "INSERT INTO genres (name) VALUES (?)",
    ["!!!!!"]
  );

  console.log(result.insertId);
}

(async function () {
  const users = await insert();
})();
