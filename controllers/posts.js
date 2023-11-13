const postsDb = require("../db/postsDb.json")

function index(req, res) {

    res.format({
       
        html : ()=> {
            let posts = []

            posts.push("<ul>")

            for(const post of postsDb){
                posts.push(`<li>
                <div>${post.titolo}</div>
                <div>${post.contenuto}</div>
                <div> <img src="/${post.immagine}" alt="immagine post ${post.immagine}" width="150"></div>
                <div>${post.tags}</div>
                </li>`)
            }
            posts.push("</ul>")

            res.send(posts.join(""))
        },
        json: () => {
            res.type("json").send({
                numberOfPosts: postsDb.length,
                posts: postsDb
            })
        }
    })
}



module.exports = {
    index
}