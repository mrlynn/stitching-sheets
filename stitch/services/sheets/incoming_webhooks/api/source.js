
exports = async function(payload) {
  
   const mongodb = context.services.get("mongodb-atlas");
   const eventsdb = mongodb.db("events");
   const eventscoll = eventsdb.collection("events");
   
   const args=payload.query.text.split(" ");
   
   switch(args[0]) {
     case "add":
       dateStart = new Date(payload.query.date_start);
       dateEnd = new Date(payload.query.date_end);
       payload.query.date_start = dateStart;
       payload.query.date_end = dateEnd;
       const result= await eventscoll.insertOne(payload.query);
       if(result) {
            return { text: `Inserted event` };   
       }
       return { text: `Error saving` };
     case "list":
       const findresult = await eventscoll.find({}).toArray();
       const strres=findresult.map( x=> `${x.name} at ${x.location} from ${new Date(x.date_start).toLocaleString()} to ${new Date(x.date_end).toLocaleString()} (${x.status})`).join("\n");
       return { text: `Events as of ${new Date().toLocaleString()}\n${strres}` };
     case "remove":
       const delresult = await eventscoll.deleteOne({name:payload.query.name, location: payload.query.location, date_start: payload.query.date_start});
       console.log(JSON.stringify(delresult));
       return { text: `Deleted ${delresult.deletedCount} stashed items` };
     default:
       return { text: "Unrecognized command - try events [list], or remove [event_id]" };
   }
}
