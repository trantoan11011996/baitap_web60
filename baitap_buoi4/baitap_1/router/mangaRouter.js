const express = require('express')

const mangaRouter = express.Router()

let mangas = [
    {
        id : 1,
        name : "7 vien ngoc rong"
    },
    {
        id : 2,
        name : "conan",
    },
    {
        id : 3,
        name : "doraemon",
    }
]

mangaRouter.get('/',function(req,res){
    res.send(mangas)
})

// create new manga
mangaRouter.post('/',function(req,res){
    const newManga = {
        id : mangas.length + 1,
        name : req.body.name
    }
    mangas.push(newManga)
    res.send(mangas)
})

// edit manga
mangaRouter.put('/',function(req,res){
    let newMangas = mangas.map(item=>{
        if(item.id === req.body.id){
            return{
                id : item.id,
                name : req.body.name
            }
        }
        return item
    })
    mangas = newMangas
    res.send(mangas)
})

// delete manga
mangaRouter.delete('/',function(req,res){
    let newMangas = mangas.filter(item=>item.id !== req.body.id)
    mangas = newMangas
    res.send(newMangas)
})

module.exports = mangaRouter