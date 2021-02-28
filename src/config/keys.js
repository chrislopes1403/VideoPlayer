
if(process.env.NODE_ENV==='production')
{
    module.exports=require('./prod.js');
    console.log(process.env)
}
else
{
    module.exports=require('./dev.js');
}