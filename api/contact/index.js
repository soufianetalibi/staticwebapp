module.exports = async function (context, req) {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    context.res = {
      status: 400,
      body: "Tous les champs sont requis."
    };
    return;
  }

  // 👉 Ici tu peux enregistrer, envoyer par mail, stocker dans Azure Table, etc.
  context.log("Message reçu :", name, email, message);

  context.res = {
    status: 200,
    body: "Message reçu avec succès !"
  };
};
