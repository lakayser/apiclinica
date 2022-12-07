import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://mati:matigol100@dialogflowcluster.reans.mongodb.net/chatbotDB?retryWrites=true&w=majority", {
    
})
    .then(db => console.log('Db is connected'))
    .catch(err => console.log(err))