
if(process.env.NODE_ENV==='production')
{
    //module.exports=require('./prod.js');
    import key from './prod';
    export default key;

    console.log(process.env)

}
else
{
    import key from './dev';
    export default key;
   // module.exports=require('./dev.js');
}