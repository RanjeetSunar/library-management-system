const Product = require('../models/booksissuedModel');
const mongoose = require('mongoose');
// creating database
const url = 'mongodb://localhost:27017/lms_testt2';
beforeAll(async () => {
 await mongoose.connect(url, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 });
});
afterAll(async () => {
 await mongoose.connection.close();
});
describe('Product Schema test anything', () => {



    // code for insert testing
 it('insert test', () => {
 const product = {
 'bookname': 'Math',
 'studentid': '1234',
 'start': '2078/6/20',
 'end':'2078/6/30'
 };
 return Product.create(product)
 .then((pro_ret) => {
 expect(pro_ret.bookname).toEqual('Math');
 });
 });




//  code for testing update
it('update test', async () => {
 return Product.findOneAndUpdate({_id :Object('615019490367dedea803d27d')}, 
{$set : {bookname:'Science'}})
 .then((pp)=>{
 expect(pp.bookname).toEqual('Science')
});
})



//code for testing delete
it('Delete Test', async () => {
    const status = await Product.deleteOne({_id :Object('61501969b899f5f88fbcb00f')});
    expect(status.ok);
   });
});
