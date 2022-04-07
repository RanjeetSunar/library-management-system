const Product = require('../models/messageModel');
const mongoose = require('mongoose');
// creating database
const url = 'mongodb://localhost:27017/lms_testt3';
beforeAll(async () => {
 await mongoose.connect(url, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 });
});
afterAll(async () => {
 await mongoose.connection.close();
});
describe('message testing', () => {



    // code for insert testing
 it('insert test', () => {
 const product = {
 'name': 'rohan',
 'email': '1234',
 'message': '2078/6/20'
 };
 return Product.create(product)
 .then((pro_ret) => {
 expect(pro_ret.name).toEqual('rohan');
 });
 });




//  code for testing update
it('update test', async () => {
 return Product.findOneAndUpdate({_id :Object('61501ad35ea2b85c00ee01cf')}, 
{$set : {bookname:'rohan'}})
 .then((pp)=>{
 expect(pp.name).toEqual('rohan')
});
})



//code for testing delete
it('Delete Test', async () => {
    const status = await Product.deleteOne({_id :Object('61501ade472bc63c05b7da51')});
    expect(status.ok);
   });
});
