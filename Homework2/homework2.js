const blogPost = [
    {blogNo:1, post:"post no 1"},
    {blogNo:2, post:"post no 2"},
    {blogNo:3, post:"post no 3"}
]
let success = true;

function showBlogs(){
    return new Promise((resolve,reject)=>{
        if(success){
            resolve(console.log(blogPost))
        }else{
            reject('ERROR!')
        }
    })
}

function addPost(newpost){
    return new Promise((resolve,reject)=>{
        blogPost.push(newpost);
        if(success){
            resolve(console.log('post is pushed'))
        }else{
            reject('error!')
        }
    })
}

async function addAndShow(newPost){
    try{
        await addPost(newPost)
        showBlogs();
    }catch(error){
        console.log(error)
    }
    
}

addAndShow({blogNo:4, post:"post no 4"})
