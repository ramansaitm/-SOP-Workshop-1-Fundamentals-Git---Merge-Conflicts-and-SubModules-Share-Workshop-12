const express= require('express')
const {getPosts,getPost, Search, Count,}=require('../container/index')
const router=express.Router(Search)

router.get('/',getPosts)
router.get('/skip',getPost)
router.get("/search/:title",Search)
router.get('/count',Count)

module.exports={
    router
};