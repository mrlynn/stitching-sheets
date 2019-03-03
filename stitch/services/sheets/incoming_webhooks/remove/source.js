exports = async function(payload) {
  const mongodb = context.services.get("mongodb-atlas");
  const eventsdb = mongodb.db("events");
  const eventscoll = eventsdb.collection("events");
  console.log(JSON.stringify(payload.query.name));
  console.log(JSON.stringify(payload.query.location));
  const delresult = await eventscoll.deleteOne({name:payload.query.name, location: payload.query.location});
  console.log(JSON.stringify(delresult));
  return { text: `Deleted ${delresult.deletedCount} items` };
};