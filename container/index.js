const Post=require('../model/index')

exports.getPosts = (req,res)=>{
    const posts = Post.find()
    .then((posts) => {
        res.json({posts});
    })
    .catch(err => console.log(err))
}

//pagination add here 
exports.getPost = (req,res)=>{
    let page =2;
    let limit=3;

    const posts = Post.find().skip((page-1)*limit).select('id').limit(limit)
    .then((posts) => {
        res.json({posts});
    })
    .catch(err => console.log(err))
}
//it's use to search the value from the database

exports.Search=(req,res)=>
{
    var regex=new RegExp(req.params.title,'i')
    Post.find({title :regex}).then((result)=>
    {
        res.status(200).json(result)
    })
}
//count total list in database 
exports.Count = (req,res)=>{
    const posts = Post.find().select('title').count()
    .then((posts) => {
        res.json({posts},
            );
    })
    .catch(err => console.log(err))


    // for acceding order sorting 
    // sort({name:1})

    // for desanding order sorting
    // sort({name:-1})
}