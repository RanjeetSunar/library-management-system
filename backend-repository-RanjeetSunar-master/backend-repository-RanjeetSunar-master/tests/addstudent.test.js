const Product = require('../models/addstudents');
const mongoose = require('mongoose');
// creating database
const url = 'mongodb://localhost:27017/lms_testt1';
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
 'studentname': 'ranjeet',
 'studentid': '1234',
 'batch': '26',
 'programmes':'calculation'
 };
 return Product.create(product)
 .then((pro_ret) => {
 expect(pro_ret.studentname).toEqual('ranjeet');
 });
 });




//  code for testing update
it('update test', async () => {
 return Product.findOneAndUpdate({_id :Object('615017eea2da81098d719853')}, 
{$set : {studentname:'roshan'}})
 .then((pp)=>{
 expect(pp.studentname).toEqual('roshan')
});
})



// //code for testing delete
// it('Delete Test', async () => {
//     const status = await Product.deleteOne({_id :Object('6150002e7a237968e2043ee3')});
//     expect(status.ok);
//    });



});
