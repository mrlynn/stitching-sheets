
exports = async function(payload) {
  
   const mongodb = context.services.get("mongodb-atlas");
   const eventsdb = mongodb.db("events");
   const eventscoll = eventsdb.collection("events");
   /**
    * replace date with iso compatible dateStart
    * 
    */
   dateStart = new Date(payload.query.date_start);
   
   dateEnd = new Date(payload.query.date_end);
   
   payload.query.date_start = dateStart;
   payload.query.date_end = dateEnd;
   const result= await eventscoll.insertOne(payload.query);

   if(result) {
        return { text: `Inserted event` };   
   }
   return { text: `Error saving` };

}
