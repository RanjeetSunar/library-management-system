const Product = require('../models/adminModel');
const mongoose = require('mongoose');
// creating database
const url = 'mongodb://localhost:27017/lms_testt4';
beforeAll(async () => {
 await mongoose.connect(url, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 });
});
afterAll(async () => {
 await mongoose.connection.close();
});
describe('add student testing', () => {



    // code for insert testing
 it('insert test', () => {
 const product = {
 'username': 'ranjeet',
 'email': 'ranjeet@gmail.com',
 'password': '12345',
 
 };
 return Product.create(product)
 .then((pro_ret) => {
 expect(pro_ret.username).toEqual('ranjeet');
 });
 });




//  code for testing update
it('update test', async () => {
 return Product.findOneAndUpdate({_id :Object('61501bf3dad9c7eaca3acb59')}, 
{$set : {username:'ranjeet'}})
 .then((pp)=>{
 expect(pp.username).toEqual('ranjeet')
});
})



//code for testing delete
it('Delete Test', async () => {
    const status = await Product.deleteOne({_id :Object('61501c30b3029382a8b48858')});
    expect(status.ok);
   });



});
