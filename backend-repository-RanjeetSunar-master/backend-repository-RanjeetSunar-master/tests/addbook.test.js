const Product = require('../models/addbookModel');
const mongoose = require('mongoose');
// creating database
const url = 'mongodb://localhost:27017/lms_testt';
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
 'isbnno': '1234',
 'authors': 'ranjeet',
 'categories':'calculation'
 };
 return Product.create(product)
 .then((pro_ret) => {
 expect(pro_ret.bookname).toEqual('Math');
 });
 });




//  code for testing update
it('update test', async () => {
 return Product.findOneAndUpdate({_id :Object('614fffd2d9858e923af6d87c')}, 
{$set : {bookname:'Science'}})
 .then((pp)=>{
 expect(pp.bookname).toEqual('Science')
});
})



//code for testing delete
it('Delete Test', async () => {
    const status = await Product.deleteOne({_id :Object('6150002e7a237968e2043ee3')});
    expect(status.ok);
   });
});
